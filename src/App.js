import React, { Component } from 'react';
import './App.css';
import CardList from './component/card-list/CardList';
import SearchBox from './component/search-box/SearchBox';

export default class App extends Component {
  state = {
    monsters: [],
    searchField: ''
  };
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(() => ({
        monsters: users
      })))
  }

  onHandleChange = (e) => {
    const value = e.target.value;
    this.setState(() => ({
      searchField: value
    }))
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()))
    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox 
          placeholder='search monsters'
          handleChange={this.onHandleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}


