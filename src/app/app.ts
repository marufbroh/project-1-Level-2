import express, { NextFunction, Request, Response } from "express"
const app = express()
const port = 3000

// middleware
app.use(express.json());
app.use(express.text());

//
const userRouter = express.Router();
const courseRouter = express.Router();

app.use("/api/v1/users", userRouter)
app.use("/api/v1/courses", courseRouter)

userRouter.post("/create-user", (req: Request, res: Response) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: "User is created successfully",
        data: user
    })
})

courseRouter.post("/create-course", (req: Request, res: Response) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        message: "Course successfully created",
        data: course
    })
})



const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.url, req.hostname, req.method);
    next();
}

app.get('/', logger, (req: Request, res: Response) => {
    // console.log(req.params.userId, req.params.subId);
    const query = req.query;
    console.log(query);
    res.send('Hello Developer Tamim Iqbal Marufff!')
})

app.post("/anything", logger, (req: Request, res: Response) => {
    console.log(req.body);
    res.json({
        message: "Successfully have the data"
    })
})

export default app;