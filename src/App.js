import Header from "./components/header";
import { Route, Routes, useParams } from "react-router-dom";

import BlogList from "./components/read";
import BlogDetails from "./components/oneread";
function App() {
  return (
    <div className="App">
 <Header/>
<Routes>
  <Route path="/" element={<BlogList/>}/>

  <Route path={`/blogs/:id`} element={<BlogDetails/>}/>
</Routes>
    </div>
  );
}

export default App;
