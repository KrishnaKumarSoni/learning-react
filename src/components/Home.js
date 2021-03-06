import { useState } from "react";
import Blogslist from "./Blogslist";

const Home = () => {


    // id should be unique for each item. 
    const[blogs, setBlogs] = useState([
        {title: "My new website", body: "Lorem ipsum...", author: "Mario", id: 1},
        {title: "How to build your first react project", body: "Lorem ipsum...", author: "Luigi", id: 2},
        {title: "Getting an A in your physics test!", body: "Lorem ipsum...", author: "David", id: 3},
    ]);


    return ( 
    <div className="home">
        <Blogslist blogs={blogs} title={"All Blogs!"}/>
    </div>    
    );
}
 
export default Home;