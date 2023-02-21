
import db from "../models/index";

let getHomePage = async (req, res) => {
    //return res.send("hello world from controller");//bắn 1 dòng chữ
    try {
        let data = await db.user.findAll(); // lệnh tìm kiếm tất cả các data có trong bảng user mysql bằng sequelize
        return res.render('homePage.ejs');//render 1 file html ejs
    } catch (e) {
        console.log(e);
    }

}

module.exports = {
    getHomePage: getHomePage,
}