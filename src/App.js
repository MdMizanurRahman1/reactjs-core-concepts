import logo from './logo.svg';
import './App.css';
import { buildQueries } from '@testing-library/react';

const number = 5555;
const singer = {
  name: 'Md Mizanur Rahman', job: 'unemployed'
};
const singer2 = { name: 'Mohsina Jahan', job: 'wife' };

const singerStyle = {
  color: 'blue',
  backgroundColor: 'white'

}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>JSX</h1>
        <div className="container">
          <h3>Hello Dude, React. How are you?</h3>
        </div>

        <div className="music">
          <p>Name: {2222 + number}</p>
          <p style={singerStyle}>Name: {singer.name} {singer.job} </p>
          <p style={{
            color: 'green',
            backgroundColor: 'white'
          }}>Name: {singer2.name} {singer2.job}</p>
        </div>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
