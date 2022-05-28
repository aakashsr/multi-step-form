import "./App.css";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App">
      <h1 className="title">
        <img src="./logonew.png" alt='logo' />
        <span>Eden</span>
      </h1>
      <Signup />
    </div>
  );
}

export default App;
