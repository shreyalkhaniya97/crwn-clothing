import React from "react";
import {
  Link,
  Route,
  Routes,
  useNavigate,
  useLocation,
  useMatch,
} from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import "./App.css";

const HatsPage = (props) => {
  return (
    <div>
      <Link to='/topics/12'>Topics</Link>
      <h1>HATS PAGE {props.id}</h1>
    </div>
  );
};

const TopicDetail = (props) => {
  let navigate = useNavigate();
  let location = useLocation();

  let match = useMatch(location.pathname);
  console.log({ navigate });
  console.log({ location });
  console.log(`match`, match);
  return (
    <div>
      <button onClick={() => navigate("/hats")}>Hats</button>
      <h1>TOPIC LIST PAGE</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/hats' element={<HatsPage />} />
        <Route path='/topics/:id' element={<TopicDetail />} />
      </Routes>
    </div>
  );
}

export default App;
