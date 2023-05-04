import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./LoginPage";
import Home from './Home';
import LoginFooter from "./loginfooter";




export default function Loginhome() {
  
  return (
    
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<LoginFooter />}>
          <Route index element={<Login />} />
          <Route path="Home" element={<Home />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Loginhome />);