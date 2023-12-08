import { Router } from "express";
import { CreateUser } from "./controllers/controllerUsers/des/CreateUser";
import { GetOneUser } from "./controllers/controllerUsers/des/GetOneUser";
import { CreateTask } from "./controllers/controllerTasks/CreateTask";
import { UpdateTask } from "./controllers/controllerTasks/UpdateTask";
import { DeleteTask } from "./controllers/controllerTasks/DeleteTask";
import { GetUserID } from "./controllers/controllerUsers/des/GetUserID";
import { GetAllTasks } from "./controllers/controllerTasks/GetAllTasks";

import { createUser , getOneUser } from "./controllers/controllerUsers/UserFactory";
import { CreateUserService } from "./Model/servicesUser/CreateUserService";
import { GetOneUserController } from "./controllers/controllerUsers/GetOneUserController";

const routes = Router()

routes.get('/', (req, res) => {
    return res.json('start')
})

routes.post("/createUserA", (request, response) =>
createUser().handle(request, response)
);

routes.post("/getOneUser", (request, response) =>
getOneUser().handle(request, response)
);


routes.post('/criarNovoUsuario', new CreateUser().user) 
routes.post('/login', new GetOneUser().user)

routes.get('/getUser/:id', new GetUserID().userId)
routes.get('/getTasks/:idUser', new GetAllTasks().Tasks)

routes.post('/createTask', new CreateTask().task)
routes.patch('/updateTask', new UpdateTask().task)
routes.delete('/deleteTask/:taskId', new DeleteTask().task)


export default routes