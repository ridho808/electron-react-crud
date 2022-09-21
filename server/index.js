const experss = require('express');
const DB = require('./config/database.js');
const Router = require('./router/Router.js');
const Port = 4000;
const Cors = require('cors');
const App = experss();


App.use(Cors());
App.use(experss.json());
App.use(Router);

App.listen(Port || process.env.PORT,()=>{
    try {
         DB.once('open',()=>{
            console.log('Database success connected');
        })
    } catch (error) {
        DB.on('error',(error)=> {return error});
    };
    console.log(`server Running at http://localhost:${Port}`);
});