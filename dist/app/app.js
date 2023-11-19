"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
// middleware
app.use(express_1.default.json());
app.use(express_1.default.text());
//
const userRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);
userRouter.post("/create-user", (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: "User is created successfully",
        data: user
    });
});
courseRouter.post("/create-course", (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        message: "Course successfully created",
        data: course
    });
});
const logger = (req, res, next) => {
    console.log(req.url, req.hostname, req.method);
    next();
};
app.get('/', logger, (req, res) => {
    // console.log(req.params.userId, req.params.subId);
    const query = req.query;
    console.log(query);
    res.send('Hello Developer Tamim Iqbal Marufff!');
});
app.post("/anything", logger, (req, res) => {
    console.log(req.body);
    res.json({
        message: "Successfully have the data"
    });
});
exports.default = app;
