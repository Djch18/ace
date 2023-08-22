

const isAdminRole = (req, res, next) => {

    if (!req.user) {
        return res.status(500).json({
            msg: 'Wants to check the role without a token'
        });
    }

    const { role, name } = req.user;

    if (role !== 'ADMIN_ROLE') {
        return res.status(401).json({
            msg: `${name} is not an admin`
        });
    }

    next();
}


const hasRole = (...roles) => {

    return (req, res, next) => {

        if (!req.user) {
            return res.status(500).json({
                msg: 'Wants to check the role without a token'
            });
        }

        if (!roles.includes(req.user.role)) {
            return res.status(401).json({
                msg: 'Unauthorized access'
            });
        }

        next();
    }
}


module.exports = {
    isAdminRole,
    hasRole,
}