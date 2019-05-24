import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'John Snow', place: 'In Death' },
      { name: 'Danerius Targeryen', place: 'In fire' }
    ],
    tag: "And also I'm Aegon Tarygeryen :)",
    isShow: false
  }

  switchCharacterHandler = (name) => {
    this.setState({
      persons: [
        { name: name, place: "Oh I've been worse" },
        { name: 'Sansa Stark', place: "Wife of Tyrion" },
      ],
      tag: "Yeah I Drink And I know Things!!"
    });
  }

  nameChangeHandler = (name) => {
    const { persons } = this.state;
    persons[0] = { name: name.target.value, place: 'Everywhere' }
    this.setState(persons);
  }

  namesHandler = () => {
    if (!this.state.isShow) {
      this.setState({ isShow: true })
    } else {
      this.setState({ isShow: false })

    }
  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App" >
        <h1>This is Hello World :)</h1>
        <p onClick={this.namesHandler}>Don't Click here</p>
        <button
          style={style}
          onClick={this.switchCharacterHandler.bind(this, 'Tyrion Lanister')}>Don't Click Me</button>
        {this.state.isShow ?
          <div>
            <Person name={this.state.persons[0].name} place={this.state.persons[0].place} onClick={this.toggleTagHandler} >{this.state.tag}</Person>
            <Person name={this.state.persons[1].name} place={this.state.persons[1].place}></Person>
          </div> : null
        }
      </div>
      // React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'This Really is " Hello World!!"'))
      //changed={this.nameChangeHandler}
    );
  }
}

export default App;
