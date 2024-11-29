var mysql=require("mysql2");
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"sakshi01@5",
    port:"3306",
    database:"bakery"
})

con.connect(function(err){
    if(err){
        throw err;
    }
    console.log("Connected");

    // var q1="create database Bakery";
    // con.query(q1,function(err){
    //     if (err)
    //         throw err;
    //     console.log("Database created");
    // })

    // var q2="create table cake(cake_id int primary key,name varchar(20),shape varchar(20))";
    // con.query(q2,function(err){
    //     if (err)
    //         throw err;
    //     console.log("table created");
    // })

    // var q3="insert into cake(cake_id,name,shape) values (1,'Chocolate','oval'),(2,'Pineapple','square'),(3,'Strawberry','Heart')";
    // con.query(q3,function(err){
    //     if(err)
    //         throw err;
    //     console.log("Data inserted successfully");
    // })

    var q4="Select * from cake";
    con.query(q4,function(err,data){
        if(err)
            throw err;
        console.log("the table data is:",data);
    })

    var q5="delete from cake where cake_id=3";
    con.query(q5,function(err){
        if(err)
            throw err;
    })

    var q6="Select * from cake";
    con.query(q6,function(err,data){
        if(err)
            throw err;
        console.log("the table data is:",data);
    })
})