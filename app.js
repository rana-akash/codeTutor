// var express = require('express');
// var compression = require('compression');
// var bodyParser = require('body-parser');
// var MongoClient = require('mongodb').MongoClient;
// var logger = require('morgan');
// var routes = require('./routes/index');

// var db = (async function(){
//     const url = "mongodb://localhost:27017/CodeTutorDB";
//     const dbName = 'CodeTutorDB';
//     const client = new MongoClient(url,{useNewUrlParser:true});
//     try{
//         await client.connect();
//         console.log('connected to Mongo....');
//         return client.db(dbName);
//     }catch(err){
//         console.log('unable to connect to mongo server...')
//     }
// })();

// process.on('uncaughtException',function(err){
//     console.log('Caught exception: '+err)
// })

// var app = express();
// app.use(function(req,res,next){
//     res.db = db;
//     next();
// });

// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:false}));
// //app.use(compression({threshold:1}));

// app.use('/api',routes);

// app.set('port',3000);
// app.listen(app.get('port'),function(){
//     console.log('listening on port '+app.get('port'));
// });

// // app.get('*',function(req,res){
// //     res.send('try some other route..');
// // });

// app.use(function(err,req,res,next){
//     console.log(err)
//     //res.status(err.status || 500);
//     res.send(err)
// });

let {PythonShell} = require('python-shell')
  
let options = {
    mode: 'text',
    pythonPath: '/usr/local/bin/python3',
    pythonOptions: ['-u'], // get print results in real-time
    scriptPath: './'
  };
  
  PythonShell.run('test.py', options, function (err, results) {
    if (err) throw err;
    // results is an array consisting of messages collected during execution
    console.log('results: %j', results);
  });