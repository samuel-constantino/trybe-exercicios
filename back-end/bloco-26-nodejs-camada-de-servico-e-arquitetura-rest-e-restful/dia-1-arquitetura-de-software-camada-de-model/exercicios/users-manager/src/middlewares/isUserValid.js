const isUserValid = (req, res, next) => {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || firstName === '') {
        return res.status(400).json({
            "error": true,
            "message": "O campo 'fisrtName' deve ser válido"
        });
    }

    if (!lastName || lastName === '') {
        return res.status(400).json({
            "error": true,
            "message": "O campo 'lastName' deve ser válido"
        });
    }

    if (!email || email === '') {
        return res.status(400).json({
            "error": true,
            "message": "O campo 'email' deve ser válido"
        });
    }

    if (!password || password === '' || password.length < 6) {
        return res.status(400).json({
            "error": true,
            "message": "O campo 'password' deve ter pelo menos 6 caracteres"
        });
    }

    next();
};

module.exports = isUserValid;