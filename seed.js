const mongoose = require("mongoose");
const Customer = require("./models/user");

// mongoose.connect("mongodb://localhost:27017/banking", { useUnifiedTopology: true, useNewUrlParser: true })
//     .then(() => {
//         console.log("connected");
//     })
//     .catch((err) => {
    //         console.log("error", err);
//     })

const v = async () => {
    await Customer.deleteMany({});
    await Customer.insertMany([{
        username: "Example1", email: "example1@gmail.com", Balance: 500, avatar: "https://images.unsplash.com/photo-1601430854328-26d0d524344a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80", contact: 7712400440, about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam molestias, ab temporibus natus maiores soluta quis inventore debitis modi nesciunt? Nam ullam ipsum."
    }, {
        username: "Example2", email: "example2gmail.com", Balance: 500, avatar: "https://images.unsplash.com/photo-1455761070998-b340f7060cd6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fGNhcnRvb24lMjBjaGFyYWN0ZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60", contact: 7712400440, about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam molestias, ab temporibus natus maiores soluta quis inventore debitis modi nesciunt? Nam ullam ipsum."
    }, {
        username: "Example3", email: "example3@gmail.com", Balance: 500, avatar: "https://images.unsplash.com/photo-1561505397-8e667b30ef2b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fGNhcnRvb24lMjBjaGFyYWN0ZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60", contact: 8823324064, about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam molestias, ab temporibus natus maiores soluta quis inventore debitis modi nesciunt? Nam ullam ipsum."
    },
    {
        username: "Example4", email: "example4@gmail.com", Balance: 500, avatar: "https://images.unsplash.com/photo-1606663889134-b1dedb5ed8b7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODB8fGNhcnRvb24lMjBjaGFyYWN0ZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60", contact: 7790422189, about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam molestias, ab temporibus natus maiores soluta quis inventore debitis modi nesciunt? Nam."
    },
    {
        username: "Example5", email: "example5@gmail.com", Balance: 500, avatar: "https://images.unsplash.com/photo-1606663889439-d732b9e58816?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEwfHxjYXJ0b29uJTIwY2hhcmFjdGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60", contact: 6631123098, about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam molestias, ab temporibus natus maiores soluta quis inventore debitis modi nesciunt? Nam ullam ipsum."
    },
    {
        username: "Example6", email: "example6@gmail.com", Balance: 500, avatar: "https://images.unsplash.com/photo-1614583225146-5177e6fbbe7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI5fHxjYXJ0b29uJTIwY2hhcmFjdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60", contact: 8234580971, about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam molestias, ab temporibus natus maiores soluta quis inventore debitis modi nesciunt? Nam ullam ipsum."
    },
    {
        username: "Example7", email: "example7@gmail.com", Balance: 500, avatar: "https://images.unsplash.com/photo-1532059196142-bd2a6bbbaa55?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTcyfHxjYXJ0b29uJTIwY2hhcmFjdGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60", contact: 2098453187, about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam molestias, ab temporibus natus maiores soluta quis inventore debitis modi nesciunt? Nam ullam."
    }]);
};

//v();
module.exports=v;