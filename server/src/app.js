const express = require("express")
const cors = require('cors')
const dbConnect = require("./config/dbConnect");
const { errorHandler, notFound } = require("./middlewares/errorMiddleware");
const userRoute = require("./routes/users/usersRoute");
const categoriesRoute = require("./routes/categories/categoriesRoute");
const transactionRoute = require("./routes/transaction/transactionRoute");
const dotenv = require('dotenv').config();
const app = express()



//Database Connection
dbConnect();

//middlewares
app.use(express.json());
app.use(cors())

//User  Routes
app.use("/api/users",userRoute); 

// categories routes
// app.use('/api/categories',categoriesRoute)

// //Income Routes
// app.use("/api/transaction",transactionRoute);



// Error Handling
app.use(notFound)
app.use(errorHandler)



module.exports = app;