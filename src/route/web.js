import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
    //chuẩn rest api
    // router.get('/', (req, res) => {//tạo router lấy thông tin dùng get
    //     return res.send("router đầu tiên");
    // });
    router.get('/', homeController.getHomePage);


    router.get('/cvt', (req, res) => {//tạo router lấy thông tin dùng get
        return res.send("xin chào Chu Văn Tuyến");
    });

    return app.use("/", router);//sử dụng các route mà ta khai báo
}

module.exports = initWebRoutes;