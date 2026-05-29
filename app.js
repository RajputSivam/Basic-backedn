//ORM-Object Relational Mapping
//ODM-Object Document Mapping

const express = require('express');
const app = express();

const userMode = require('./usermodel');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(require('path').join(__dirname, "public")));

app.get('/', (req, res) => {
    res.send("welcome");
})
app.get('/create', async (req, res) => {
    let user = await userMode.create({
        name: "Harsh",
        email: "harash@gami .com",
        username: "harsh"
    });
    res.send(user);
});
app.get('/create2', async (req, res) => {
    let user = await userMode.create({
        name: "Harshita",
        email: "harashia@gami.com",
        username: "harshita"
    });
    res.send(user);
});

app.get('/update', async (req, res) => {
    let updateduser = await userMode.findOneAndUpdate({ username: 'harsh' }, { name: "harsh vandana sharma" }, { returnDocument: 'after' })
    res.send(updateduser);
})

app.get("/read", async (req, res) => {
    let users = await userMode.find();
    res.send(users);
})
app.get("/read2", async (req, res) => {
    let users = await userMode.findOne({ username: "harsh" });
    res.send(users);
})

app.get("/delete", async (req, res) => {
    let users = await userMode.findOneAndDelete({ username: "harsh" });
    res.send(users);
})
app.listen(3000);



// node -e "const mongoose = require('mongoose'); mongoose.connect('mongodb://localhost:27017/users').then(() => console.log('Connected')).catch(() => console.log('Not Connected'))"

