import {  Route,Routes} from "react-router-dom";
import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";

function App() {
  return (
      <Layout>
        <Routes>
        <Route path='/' element={<Home/>}/>
          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/quiz" element={<Quiz/>} />
          <Route exact path="/result" element={<Result/>} />
          </Routes>
      </Layout>
  );
}

export default App;