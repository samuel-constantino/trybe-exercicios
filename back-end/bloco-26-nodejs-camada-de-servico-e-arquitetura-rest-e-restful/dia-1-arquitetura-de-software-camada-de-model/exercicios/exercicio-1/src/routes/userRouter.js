const userRouter = (_req, res, _next) => {
    res.status(200).json({message: "User Router"});
};

module.exports = userRouter;