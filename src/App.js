import logo from './logo.svg';
import './App.css';
import { buildQueries } from '@testing-library/react';

const number = 5555;
const singers = [
  { name: 'Md Mizanur Rahman', job: 'unemployed' },
  { name: 'Mohsina Jahan', job: 'wife' },
  { name: 'Molla Kohi', job: 'Restaurant' },
  { name: 'Nehikak', job: 'Faltu' }
]

const singerStyle = {
  color: 'blue',
  backgroundColor: 'white'

}


function App() {

  const nayoks = ['Rubel', 'Bapparaz', 'Kuber', 'Jasim', 'Salman Shah', 'Riaz', 'Anowar']
  return (
    <div className="App">
      {
        nayoks.map(nayok => <li>Name: {nayok}</li>)
      }
      {
        singers.map(singer => <Person name={singer.name}></Person>)
      }
      {/*{
        nayoks.map(nayok => <Person name={nayok}></Person>)
      }*/}

      {/*<Person name={nayoks[0]} nayika='Rojina'></Person>
      <Person name={nayoks[1]} nayika='Rekha'></Person>
    <Person name={nayoks[2]} nayika='Kopila'></Person>*/}

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
      <p>{props.nayika}</p>
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
