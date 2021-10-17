const config = require('../../config');
const { Pool, Client } = require("pg");

const myData = new Pool(config.postgresql, ()=>{
     console.log(`Postgre SQL connect to ${config.postgresql.database}`);
})

module.exports ={
    myData
}


