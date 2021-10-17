const config = {
  nodeEnv: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  hostname: process.env.HOSTNAME || "localhost",
  mongodb: {
    uri:
      process.env.MONGODB_URI ||
      "mongodb+srv://admin:10qYWbTiI2Q4BDMW@cluster0.fwaph.mongodb.net/test?retryWrites=true&w=majority",
  },
  secretKey: process.env.SECRET_KEY || "123456",
  secretKeyAdmin: process.env.SECRET_KEY || "nick",
  postgresql: {
    user: "postgres",
    host: "localhost",
    database: "my_database",
    password: "1234",
    port: 5432,
  },
};

module.exports = config;
