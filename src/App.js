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
      <Person name='Rubel' nayika='Rojina'></Person>
      <Person name='Bapparaz' nayika='Rekha'></Person>
      <Person name='Kuber' nayika='Kopila'></Person>

      <h4>New component: created</h4>
      <Friend name='Mizanur' wife='Mohsina'></Friend>
      <Friend love='Kohinur' phone='01723'></Friend>

    </div>
  );
}

function Person(props) {

  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p>Nayika:{props.nayika}</p>
    </div>
  )
}

function Friend(props) {
  return (
    <div className='container'>
      <h1>{props.name} {props.love}</h1>
      <p>{props.wife} {props.phone}</p>
    </div>
  )
}

export default App;
