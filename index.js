const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const multer = require("multer")
const cors = require('cors');
const path = require("path");

const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories")

dotenv.config();
app.use(express.json())

app.use(cors(
    
    //{ origin:["http://localhost:3000/"],
    // methods:["GET","POST"],
    // credentials:true }
));
app.use("/images",express.static(path.join(__dirname,"/images")))


app.use(express.static(path.join(__dirname, "/client/build")));

app.get("*", function (request, response) {
   response.sendFile(path.join(__dirname, "/client/build", "index.html"));
 });


mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser:true, useUnifiedTopology:true, }).then(console.log("Connected to MONGODB")).catch((err)=>console.log(err));

const storage = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null,"images");
    },
    filename:(req,file,cb)=>{
        cb(null,req.body.name);
    }
})

const upload = multer({storage:storage});
app.post("/api/upload",upload.single("file"),(req,res)=>{
    res.status(200).json("File has been uploaded");
})

app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/posts",postRoute);
app.use('/api/categories',categoryRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT ,()=>{
    console.log(`Backend is running in port ${PORT}`)
})
