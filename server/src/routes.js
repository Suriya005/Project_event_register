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

  app.get("/event",controllers.reg_event.getEventList);
  app.post("/event", controllers.reg_event.addEvent);
  app.patch("/event", controllers.reg_event.updateEvent);
  app.delete("/event", controllers.reg_event.deleteEvent);

  app.get("/location",controllers.reg_event.getLocation);
 
  app.post("/verify_token", controllers.pg_users.verifyToken);

  app.get("/get/major", controllers.reg_event.getMajor);
  app.get("/get/faculty", controllers.reg_event.getFaculty);
  app.post("/post/faculty", controllers.reg_event.postFaculty);

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
