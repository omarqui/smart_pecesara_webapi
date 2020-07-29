const { getStyledText } = require("../utils/getStyledText");

module.exports.Authenticator = (req,res,next) => {
    const auth = {
        user: "joan",
        password: "pecera123"
    };

    const base64Auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(base64Auth, 'base64').toString().split(":");
    
    if (!(login && password && 
          login == auth.user && 
          password == auth.password)) {
        res.set('WWW-Authenticate', 'Basic realm="401"');
        res.status(401).send(getStyledText("Authentication required."));
    }
    else {
        next();
    }
};