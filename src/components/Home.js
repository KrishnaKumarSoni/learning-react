import { useState, useEffect } from "react";
import Blogslist from "./Blogslist";
import useFetch from "./useFetch";

const Home = () => {

    const{data: blogs, isPending, error} = useFetch("http://localhost:8000/blogs");    

    return ( 
    <div className="home">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {blogs && <Blogslist blogs={blogs} title={"All Blogs!"} />}
    </div>    
    );
}
 
export default Home;