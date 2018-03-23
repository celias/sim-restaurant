const passport = require("passport");

const login = passport.authenticate("auth0", {
    successRedirect: "http://localhost:3000/#/userprofile",
    failureRedirect: "http://localhost:3000/#/" 
});

const logout = (req, res) => {
    req.session.destroy(() => {
        res.redirect('http://localhost:3001/#/login');
    });
}

const getUser = (req, res, next) => {
    // console.log(req.user)
    const db = req.app.get("db")
    db.getUserByAuthid([req.user.authid])
    .then(user => { res.status(200).send(user)})
    .catch((err) =>{res.status(500).send}
)}

module.exports = {
    login,
    logout,
    getUser
}