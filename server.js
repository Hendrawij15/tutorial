const express = require('express')
const app = express() 
const cors = require('cors')

//SETTING CORS//
var corsoption = {
    origin: "http://localhost:4000"
}

app.use(cors(corsoption))

//MEMBUAT PARSING REQUEST content type application-JSON//
app.use(express.json())

//Body request, parsing aplication/x-www-force-urlencode//
app.use(express.urlencoded({extended:true}))



 //sync database//
 const db = require("./app/models")
 db.sequelize.sync({force:true}).then(()=>{
    console.log ("sync db")
 }).catch((err)=>{
    console.log (`failed sync db ${err.message}`)
 })

 //route 
 require("./app/routes/tutorial.route")(app);


//ROUTE CRUD//
app.get('/',(req,res)=>{ //memanggil di postman/web browser//
    res.json({
        message:'Selamat datang di belajar tutorial'
    })
})

//setting port listen/server

const PORT = 8080
app.listen(PORT,()=>{
    console.log(`server up on port ${PORT}`)
})
