const jwt = require('jsonwebtoken'),

generateToken = (_id) => {
    const token = jwt.sign({_id},process.env.SECRET,{expiresIn:"1hr"});
    return token;
}

module.exports = generateToken