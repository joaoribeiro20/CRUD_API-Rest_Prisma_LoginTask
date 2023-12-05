import { Router } from "express";
import { CreateUser } from "./controllers/CreateUser";
import { GetOneUser } from "./controllers/GetOneUser";
import { CreateTask } from "./controllers/CreateTask";
import { UpdateTask } from "./controllers/UpdateTask";
import { DeleteTask } from "./controllers/DeleteTask";
import { GetUserID } from "./controllers/GetUserID";

const routes = Router()

routes.get('/', (req, res) => {
    return res.json('start')
})


routes.post('/createUser', new CreateUser().user)
routes.post('/login', new GetOneUser().user)

routes.get('/getUser/:id', new GetUserID().user1)

routes.post('/createTask', new CreateTask().task)
routes.patch('/updateTask', new UpdateTask().task)
routes.delete('/deleteTask', new DeleteTask().task)


export default routes