const express=require('express')
const cors=require('cors')
const app=express()

const connectDB=require('./config/connectDB')

//middleware
app.use(express.json())
app.use(cors())

//connectDB (config)
connectDB()

//routes
// localhost:5000/projets/
app.use("/projets",require('./routes/projet'))
app.use("/utilisateurs",require('./routes/utilisateurs'))


//run server
const port=process.env.PORT||5000
app.listen(port,err=>err?console.log(err):console.log(`connected on port ${port}`))
