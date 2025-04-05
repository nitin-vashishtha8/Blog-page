import React from "react";
import Blogs from "./Blogs.json";
import "./App.css"; 


function App() {
  return (
    
    <div className="App">
    <nav>
      <h1>FELLABLOGS</h1>
      
    </nav>
      <div className="blog-container">
        {Blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <h2 className="blog-title">{blog.title}</h2>
            <br></br>
            
             <div className="blog-details">
               <span className="blog-author">By {blog.author} |</span>
              <span className="blog-date"> {blog.date}</span>
              </div>
            
            <p className="blog-description">{blog.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;


