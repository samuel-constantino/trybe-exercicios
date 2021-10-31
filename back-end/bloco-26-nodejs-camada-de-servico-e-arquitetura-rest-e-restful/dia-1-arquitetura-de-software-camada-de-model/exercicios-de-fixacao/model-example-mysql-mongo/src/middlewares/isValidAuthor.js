const isValidAuthor = (req, res, next) => {
    const { first_name, middle_name, last_name } = req.body;
    console.log(first_name, middle_name, last_name)

    if (!first_name || first_name === '') return res.status(400).json({message: 'Bad Request: primeiro nome inválido'});
    if (middle_name && middle_name === '') return res.status(400).json({message: 'Bad Request: nome do meio inválido'});
    if (!last_name || last_name === '') return res.status(400).json({message: 'Bad Request: último nome inválido'});

    next();
};
    
module.exports = isValidAuthor;