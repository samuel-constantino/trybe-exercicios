const error = (err, _req, res, _next) => {
    console.log(err.message);
    if (err.code && err.status) {
        return res.status(err.status).json({
            message: 'Erro interno do servidor',
            code: err.code
        });
    }

    return res.status(500).json({ message: 'Erro interno do servidor' });
};

module.exports = error;