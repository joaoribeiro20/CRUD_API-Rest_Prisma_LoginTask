import { Router } from "express";
import { CreateUser } from "./controllers/CreateUser";
import { GetOneUser } from "./controllers/GetOneUser";
import { CreateTask } from "./controllers/CreateTask";
import { UpdateTask } from "./controllers/UpdateTask";
import { DeleteTask } from "./controllers/DeleteTask";

const routes = Router()

routes.get('/', (req, res) => {
    return res.json('start')
})


routes.post('/createUser', new CreateUser().user)
routes.post('/login', new GetOneUser().user)

routes.post('/createTask', new CreateTask().task)
routes.patch('/updateTask', new UpdateTask().task)
routes.delete('/deleteTask', new DeleteTask().task)


export default routes