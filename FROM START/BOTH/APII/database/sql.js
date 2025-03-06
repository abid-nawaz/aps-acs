const mysql=require("mysql");

const connection=mysql.createConnection({
    host:'badzog0f7vo9kereirvg-mysql.services.clever-cloud.com',
    database:'badzog0f7vo9kereirvg',
    user:'uygn0xebhtyrvpru',
    password:'TYmcymTkCGaYiLZ0BCAH',
    port:'3306',
})


connection.connect((err)=>{
    if (err) throw err;
    console.log("database connection established succesfuly");
})


module.exports={connection};