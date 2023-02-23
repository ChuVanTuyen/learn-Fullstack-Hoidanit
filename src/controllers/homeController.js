
import db from "../models/index";
import CRUDservice from "../services/CRUDservices";

let getHomePage = async (req, res) => {
    //return res.send("hello world from controller");//bắn 1 dòng chữ
    try {
        let data = await db.User.findAll(); // lệnh tìm kiếm tất cả các data có trong bảng user mysql bằng sequelize
        return res.render('homePage.ejs', {
            data: JSON.stringify(data)
        });//render 1 file html ejs
    } catch (e) {
        console.log(e);
    }
}

let getCRUD = (req, res) => {
    return res.render("crud.ejs");
}

let postCRUD = async (req, res) => {
    //console.log(req.body);// lấy dữ liệu từ người dùng gửi đến bằng form method="POST"
    let message = await CRUDservice.createNewUser(req.body);
    console.log(message);
    return res.send("post crud server")
}

module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
}