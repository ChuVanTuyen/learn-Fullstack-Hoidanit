
let getHomePage = (req, res) => {
    //return res.send("hello world from controller");//bắn 1 dòng chữ
    return res.render('homePage.ejs');//render 1 file html ejs
}

module.exports = {
    getHomePage: getHomePage,
}