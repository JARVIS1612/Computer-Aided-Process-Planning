const root = (req, res) => {
    res.render("root");
};

const form = (req, res) =>{
    res.render("form");
}


module.exports = {
    root,
    form
}