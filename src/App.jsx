import { useState } from "react";
import "./App.css";
import { Routes,Route } from "react-router-dom";
import { Home } from "./pages/Home";
import Post from '../src/pages/Post';

function App() {
  return (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home/:blog"/>
      <Route path="/post" element={<Post />} />
    </Routes>
  </>
  )
}
export default App;
