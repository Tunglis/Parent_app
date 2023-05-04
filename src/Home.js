import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './MainPage';
import Leaderboard from './Leaderboard'
import ExerciesRecordPage from './ExerciesRecordPage'
import Profile from "./Profile";
import Vip from './Vip'
import Header from "./Header";
import Login from "./LoginPage";
import LoginFooter from "./loginfooter";
import ErrorPage from "./error";



export default function header() {
  
  return (
    
    <BrowserRouter>
      <Routes>
      
          <Route index element={<Login />} />
        
       
  
          <Route path="/" element={<Header />}>
          <Route path="Main" element={<Main />} />
          <Route path="Leaderboard" element={<Leaderboard />} />
          <Route path="ExerciesRecordPage" element={<ExerciesRecordPage />} />
          <Route path="Profile" element={<Profile/>}/>
          <Route path="Vip" element={<Vip />} />
        </Route>
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<header />);