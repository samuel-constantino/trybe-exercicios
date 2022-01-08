// index.js
const express = require('express');
const { Address, Employee } = require('./models');

const app = express();

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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

module.exports = app;