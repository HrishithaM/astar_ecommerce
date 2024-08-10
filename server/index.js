const express = require("express")
const mongoose = require ('mongoose');
const UserModel = require("./models/Users");
const ProductModel = require("./models/product");
const cors = require('cors') // allows to connect our API with react frontend without errors 

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://hrishitham:SnoyeeIsTheBest@cluster0.njd8lyn.mongodb.net/merntutorial?retryWrites=true&w=majority&appName=Cluster0"
)

app.get('/getUsers', async (req, res) => {
    try {
      const results = await UserModel.find();
      res.send(results);
    } catch (err) {
      res.status(500).send(err);
    }
  });

app.post("/createUser" , async (req, res) => {
        const user = req.body;
        const newUser = new UserModel(user);
        await newUser.save();

        res.json(user);
});

app.listen(5000, () => {
    console.log("SERVER RUNS PERFECTLY!");
});