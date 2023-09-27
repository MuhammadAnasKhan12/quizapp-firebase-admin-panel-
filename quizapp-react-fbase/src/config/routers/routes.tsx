import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Login from "../../pages/login"
import Admin from "../../pages/admin";
import Quiz from "../../pages/quiz";
import Signup from "../../pages/signup";
export default function Routerr() { 
    return(<>
      <Router>
        <Routes>
          <Route path="login/" element={<Login />} />
          <Route path="/" element={<Signup />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </Router>
    </>);
}