// // console.log("PG");

// // for (let i = 0 ; i<5; i++){
// //     console.log("hello world")
// // }


//include the node postgres library
//connect to a database
const { Pool, Client } = require('pg')

const connectionString = 'postgresql://postgres:papamaman@localhost:5432/postgres'

const pool = new Pool({
    connectionString: connectionString,
  })

  pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    pool.end()
  })

  const client = new Client({
    connectionString: connectionString,
  })

// const query ={
//     text : 'INSERT INTO barbers(first_name, last_name, phone_number) VALUE($1, $2, $2)'
// }
  
  client.connect()
  client.query('SELECT * from barbers', (err, res) => {
    //console.log(err, res)
    if (err){
        console.log(err.stack)
    }else {
        res.rows.forEach(row =>{
            console.log(row)
        })
    }

    client.end()
  })


 