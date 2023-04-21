const app = require('./app.js');
const {conn} = require('../db/db');

const PORT = 3001
try {
    conn.sync({force:true}).then(()=>{
        console.log(conn.models);
        app.listen(PORT, ()=>{
            console.log(`Server raised in port: http://localhost:${PORT}`);
        })
    })
} catch (error) {
    console.log(error);
}



