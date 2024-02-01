import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import ArticleList from "./ArticleList";

console.log(blogData);
const posts = blogData.posts

function App() {
  return (
    <div className="App">
      <Header />
      <ArticleList posts={posts}/>
      <p>You're on your own from here! Follow the deliverables; test things out inthe browser as you write your code; and good luck!</p>
    </div>
  );
}

export default App;
