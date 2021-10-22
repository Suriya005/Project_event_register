const controllers = require("./controllers");
const hooks = require("./hooks");
const opts = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          hello: { type: 'string' }
        }
      }
    }
  }
}


const userRoutes = (app) => {
  app.get("/users",{ preHandler: [hooks.auth.validateTokenAdmin] },controllers.pg_users.getUsers);
  app.post("/users/search",{ preHandler: [hooks.auth.validateTokenAdmin] },controllers.pg_users.getUserOnChange);
  app.get("/pgusers/:userId", { preHandler: [hooks.auth.validateToken] },controllers.pg_users.getUserById);
  app.post("/reg", controllers.pg_users.postUser);
  app.patch("/users", controllers.pg_users.updateUser);
  app.delete("/users", controllers.pg_users.deleteUser);
  app.post("/login", controllers.pg_users.postUserLogin);

  // Event
  app.get("/event",controllers.reg_event.getEventList);
  app.post("/event", controllers.reg_event.addEvent);
  app.patch("/event", controllers.reg_event.updateEvent);
  app.delete("/event", controllers.reg_event.deleteEvent);

  // Faculty
  app.get("/faculty", controllers.reg_event.getFaculty);
  app.post("/faculty", controllers.reg_event.postFaculty);
  app.patch("/faculty", controllers.reg_event.updateFaculty);
  app.delete("/faculty", controllers.reg_event.deleteFaculty);

   // major
   app.get("/major", controllers.reg_event.getMajor);
   app.post("/major", controllers.reg_event.postMajor);
   app.patch("/major", controllers.reg_event.updateMajor);
   app.delete("/major", controllers.reg_event.deleteMajor);

  // location
   app.get("/location", controllers.reg_event.getLocation);
   app.post("/location", controllers.reg_event.postLocation);
   app.patch("/location", controllers.reg_event.updateLocation);
   app.delete("/location", controllers.reg_event.deleteLocation);

   // question
   app.get("/question", controllers.reg_event.getQuestion);
   app.post("/question", controllers.reg_event.postQuestion);
   app.patch("/question", controllers.reg_event.updateQuestion);
   app.delete("/question", controllers.reg_event.deleteQuestion);

   // answer
   app.get("/answer", controllers.reg_event.getAnswer);
   app.post("/answer", controllers.reg_event.postAnswer);
   app.patch("/answer", controllers.reg_event.updateAnswer);
   app.delete("/answer", controllers.reg_event.deleteAnswer);

   // reg_event
   app.get("/reg_event", controllers.reg_event.getRegEvent);
   app.post("/reg_event", controllers.reg_event.postRegEvent);
   app.patch("/reg_event", controllers.reg_event.updateRegEvent);
   app.delete("/reg_event", controllers.reg_event.deleteRegEvent);

  //  user service

  app.post('/user/event', controllers.user_reg.getEventById)

  
 
  app.post("/verify_token", controllers.pg_users.verifyToken);

  app.get("/get/major", controllers.reg_event.getMajor);
  
  

  // test
  app.get("/apitest",opts, (req, res) => {
    res.send({hello:'hello world'});
  });

  app.get("/fastify/schema",opts, (req, res) => {
    res.send({hello:'hello world'});
  });
  app.get("/", (req, res) => {
    res.send("node is work");
  });
};

module.exports = {
  userRoutes,
};
