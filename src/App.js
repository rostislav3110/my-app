import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Catalog from "./pages/catalog";
import Main from "./pages/main";
import News from "./pages/news";
import NotFound from "./pages/not-found";
import Layout from "./pages/layout";

function App() {
  return ( <div className="App">
    {/* <Header/> */}
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Main/>}/>
        <Route path="laptop-catalog" element={<Catalog/>}/>
        <Route path="top-news" element={<News/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Route>
      
    </Routes>
  </div>
)};

export default App;
