const express = require('express');
const { json } = require('body-parser');
const Sequelize = require('sequelize');

const { Address, Employee } = require('./models');
const { development } = require('./config/config');

const app = express();

app.use(json());

const sequelize = new Sequelize(development);

app.get('/employees', async (_req, res) => {
  try {
    const employees = await Employee.findAll({
      include: { model: Address, as: 'addresses' },
    });

    return res.status(200).json(employees);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
});

app.get('/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { includeAddresses } = req.query;

    const employee = await Employee.findOne({
      where: { id },
      // include: [{
      //   model: Address,
      //   as: 'addresses',
      //   attributes: {
      //     exclude: ['number', 'employeeId', 'employee_id'],
      //   }
      // }],
    });

    if (!employee) 
      return res.status(404).json({ message: 'Funcionário não encontrado' });

    if (includeAddresses === 'true') {
      const addresses = await Address.findAll({
        where: { id },
      });
      
      return res.status(200).json({ employee, addresses });
    }

    return res.status(200).json(employee);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
});

app.post('/employees', async (req, res) => {
  // Primeiro iniciamos a transação
  const t = await sequelize.transaction();

  try {
    const {
      firstName,
      lastName,
      age,
      city,
      street,
      number
    } = req.body;

    // Depois executamos as operações
    const employee = await Employee.create(
      { firstName, lastName, age },
      { transaction: t },
    );

    await Address.create(
      { city, street, number, employeeId: employee.id },
      { transaction: t },
    );

    // Se chegou até essa linha, quer dizer que nenhum erro ocorreu.
    // Com isso, podemos finalizar a transação usando a função `commit`.
    await t.commit();

    return res.status(201).json({ message: 'Cadastrado com sucesso' });
  }catch(e) {
    await e.rollback();
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

module.exports = app;