import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Post } from "./pages/Post";
import SingleEntry from "./pages/SingleEntry";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/blogpost/:id" element={<SingleEntry />} />
          <Route path="/post" element={<Post />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
