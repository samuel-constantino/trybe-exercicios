const error = (err, _req, res, _next) => {
    if (err.code && err.status) {
        return res.status(err.status).json({
            message: "Erro ao processar requisição",
            code: err.code,
        });
    }

    return res.status(500).json({message: "Erro ao processar requisição"});
};

module.exports = error;