import logo from './logo.svg';
import './App.css';
//import One from './Pages/One.js';
import Html1 from './Pages/Html1.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
               {/* <One/> */}
        <Html1/>
         <h1 style={{ color: 'red', fontStyle: 'italic' }}>Hello React</h1>
        
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
