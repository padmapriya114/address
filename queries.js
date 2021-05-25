const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "cbanc.cny7tsngrm4b.us-east-2.rds.amazonaws.com",
  database: "postgres",
  password: "cbanc2021",
  port: 5432
});

const insertaddress = (request, response) => {
const {id,address1,address2,city,state,zipcode} = request.body
  pool.query( "INSERT INTO loan (id,address1,address2,city,state,zipcode) VALUES ($1,$2,$3,$4,$5,$6)",[id,address1,address2,city,state,zipcode], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send('A new row is inserted in address')
  })
}

module.exports = {
insertaddress
}
