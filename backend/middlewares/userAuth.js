const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
    try {
        const token = req.headers['authorization'];
        if (!token) {
            return res.status(401).json({
                error: 'error',
                message: 'Unauthorized: Token not provided'
            });
        }

        jwt.verify(token, process.env.USER_ACCESS_TOKEN_SECRET, (err, decoded) => {
            if (err) {
                return res.status(403).json({
                    error: 'error',
                    message: 'Forbidden: Invalid token'
                });
            }
            
            req.user = decoded;
            next(); 
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'error',
            message: 'Internal Server Error'
        });
    }
}

module.exports = verifyToken;
