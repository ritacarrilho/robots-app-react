import React, { Component, Fragment } from 'react';
import CardList from './CardList';
import { robots } from '../data/robots';
import Header from './Header';
import SeachBox from './Searchbox';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      robots: robots, 
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    console.log(event.target.value);
    this.setState({ searchfield: event.target.value });
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      // console.log(this.state.searchfield);
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })

    return (
      <Fragment>
        <div className='tc'>
          <Header/>
          <SeachBox searchChange={ this.onSearchChange }/>
          <CardList robots={filteredRobots} />
        </div>
      </Fragment>
    );
  }
}

export default App;