import React from "react";
import Blogs from "./Blogs.json";
import "./App.css"; 

function App() {
  return (
    
    <div className="App">
    <div><h1>Nit Blogs</h1></div>  
      <div className="blog-container">
        {Blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <h2 className="blog-title">{blog.title}</h2>
            <br></br>
            
              <span className="blog-author">By {blog.author}</span>
              <span className="blog-date">📅 {blog.date}</span>
            
            <p className="blog-description">{blog.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;


