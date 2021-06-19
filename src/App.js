import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";



import Home from "./components//Home/Home";
import Navbar from "./components/Navbar/Navbar.js";
import Post from "./components/post/post";
import Nav from "./components/Nav/Nav";
import Post_two from "./components/Post_two/Post_two";
import Post_four from "./components/post_four/Post_four";
import SignIn from "./components/signIn/SignIn";
import "./App.css";
import Post_five from "./components/Post_five/Post_five";


function App(){

    return <div>
        <Navbar/>
        <Home/>
        
        <Nav/>
        <Post/>
        <Post_two/>
        <SignIn/>
        <Post_five/>
        

    </div>
}

export default App;
