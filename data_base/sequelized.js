let Sequelize = require('sequelize');

  let sequelize = new Sequelize('postgresql://postgres:papamaman@localhost:5432/postgres');

// this here create the sequelize 
  let example = sequelize.define('example', {
   
    country: Sequelize.STRING,
    capital: Sequelize.STRING,
    population: Sequelize.INTEGER,
});

  example
 //ensure the table exists,
 .sync()

 .then(function(){
//perform your action here
 //`Hat` is now ready to be used.
  console.log("this table exist long before")
  example.findAll().then(function(rows) {
    for(var i = 0; i < rows.length; i++) {
    var columnData = rows[i].dataValues;
    var country = columnData.country;
    var capital = columnData.capital;
    var population = columnData.population;

 }

 console.log(country , capital, population+ ' '+"Millions")

});


//  example.create({
//      country: 'Burkina ',
//      capital : 'Ouaga',
//      population: 18000000

//  })
})
 