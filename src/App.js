import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'John Snow', place: 'In Death' },
      { name: 'Danerius Targeryen', place: 'In fire' }
    ]
  }
  switchCharacterHandler = () => {
    console.log('Nah It does\'nt work still');
  }
  render() {
    return (
      <div className="App" >
        <h1>This is Hello World :)</h1>
        <p>And It's still struglling</p>
        <button onClick={this.switchCharacterHandler}>Don't Click Me</button>
        <Person name={this.state.persons[0].name} place={this.state.persons[0].place}>And Yeah I'm Aegon Targeryen :)</Person>
        <Person name={this.state.persons[1].name} place={this.state.persons[1].place}></Person>
      </div>
      // React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'This Really is " Hello World!!"'))
    );
  }
}

export default App;
