var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    var sql = require("mssql");

    // config for your database
    var config = {
        user: 'sa',
        password: 'sa_123',
        server: 'localhost', 
        database: 'employee',
        //port:1433
    };

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select * from details', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });
});


module.exports = router;


// function loadEmployees() {
//     //4.
//     var dbConn = new sql.Connection(config);
//     //5.
//     dbConn.connect().then(function () {
//         //6.
//         var request = new sql.Request(dbConn);
//         //7.
//         request.query("select * from details").then(function (recordSet) {
//             console.log(recordSet);
//             dbConn.close();
//         }).catch(function (err) {
//             //8.
//             console.log(err);
//             dbConn.close();
//         });
//     }).catch(function (err) {
//         //9.
//         console.log(err);
//     });
// }
// //10.
// loadEmployees();