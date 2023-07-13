import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Learning React</h1>
        <img src={logo} className="App-logo" alt="logo" />

         <code>react is so cool!</code>
         
         <p>second paragraph</p>
         
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </a>
      </header>
    </div>
  );
}

export default App;