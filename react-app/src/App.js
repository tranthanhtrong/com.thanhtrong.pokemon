import logo from './logo.svg';
import './App.css';
import axios from "axios"

const fetchData = () => {
    return axios.get("/")
        .then((response) => console.log(response.data));
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
          <p onClick={fetchData}>Get</p>
      </header>
    </div>
  );
}

export default App;
