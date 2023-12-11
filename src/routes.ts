import { Router } from "express";
import { createUser , getOneUser, getUserID } from "./controllers/controllerUsers/UserFactory";
import { createTask, deleteTask, editTask, getTask } from "./controllers/controllerTasks/TaskFactory";

const routes = Router()

routes.get('/', (req, res) => {
    return res.json('start')
})

/* novas rotas */

/* tasks */
routes.post("/task/create", (request, response) =>
createTask().handle(request, response)
);
routes.get("/getTasks/:authorId", (request, response) =>
getTask().handle(request, response)
);
routes.delete("/deleteTask/:id", (request, response) =>
deleteTask().handle(request, response)
);
routes.patch("/editTask", (request, response) =>
editTask().handle(request, response)
);


/* users */
routes.post("/getOneUser", (request, response) =>
getOneUser().handle(request, response)
);

routes.post("/createUserA", (request, response) =>
createUser().handle(request, response)
);

routes.get("/getUser/:id", (request, response) =>
getUserID().handle(request, response)
);


/* 

routes.post('/criarNovoUsuario', new CreateUser().user) 
routes.post('/login', new GetOneUser().user)

routes.get('/getUser/:id', new GetUserID().userId)
routes.get('/getTasks/:idUser', new GetAllTasks().Tasks) */
/* 
routes.post('/createTask', new CreateTask().task)
routes.patch('/updateTask', new UpdateTask().task)
routes.delete('/deleteTask/:taskId', new DeleteTask().task)
 */

export default routes