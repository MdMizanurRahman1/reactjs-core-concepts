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
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <h4>New component: created</h4>
      <Friend></Friend>
      <Friend></Friend>
      <Friend></Friend>
      <Friend></Friend>
    </div>
  );
}

function Person() {
  return (
    <div className='person'>
      <h1>Shakib Al Hasan</h1>
      <p>Profession: Cricket</p>
    </div>
  )
}

function Friend() {
  return (
    <div className='container'>
      <h1>Name: Md Mizanur</h1>
      <p>Job: Unemployed</p>
    </div>
  )
}

export default App;
