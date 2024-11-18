const express = require('express')
const mongoose = require('mongoose')
const app = express();
const bookRouter = require('./router/book')

mongoose.connect('mongodb://localhost:27017/library')
.then(()=> console.log('mongodb connected'))
.catch((err)=> console.error(err))

app.use(express.json());
app.use("/book", bookrouter)
app.use("/user", userRouter)

app.listen(3000,() =>
{
    console.log("Server startedb on port 3000")
})