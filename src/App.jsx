import React, { useState } from "react";
import Blogs from "./Blogs.json";
import "./App.css";
import menu from "./assets/menu.svg";

function App() {
  
  const [visibleDescriptions, setVisibleDescriptions] = useState({});

  
  const toggleDescription = (blogId, event) => {
    
    event.stopPropagation();
    
    setVisibleDescriptions(prevState => ({
      ...prevState,
      [blogId]: !prevState[blogId]
    }));
  };

  return (
    <div className="App">
      <div className="header">
        <h1>FELLABLOGS</h1>
        <img src={menu} alt="Menu Logo" />
      </div>
      <div className="blog-container">
        {Blogs.map((blog) => (
          <div 
            className="blog-card" 
            key={blog.id}
            onClick={(e) => toggleDescription(blog.id, e)}
          >
            <h2 className="blog-title">{blog.title}</h2>
            <br />
            <div className="blog-details">
              <span className="blog-author">By {blog.author} |</span>
              <span className="blog-date"> {blog.date}</span>
            </div>
            
            
            {visibleDescriptions[blog.id] && (
              <p className="blog-description">{blog.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

