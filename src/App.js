import React, { Component } from 'react';
import './App.css';
import Filter from './Filter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      // data: []
    }

    this.updateSearchTerm = this.updateSearchTerm.bind(this);
    this.submitSearchTerm = this.submitSearchTerm.bind(this);
  }

  updateSearchTerm = (event, {value}) => {
    this.setState({searchTerm: {value}});
    console.log(`updated searchTerm: ${value}`);
  }

  submitSearchTerm = (event) => {
    // starting with seed data from JSON file
    // TODO: fetch data from JSON file
    const data = [
      {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      },
      {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
      },
      {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
      },
      {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
      }
    ];

    // filter for searchTerm
    const { searchTerm } = this.state;

    event.preventDefault();
    const filteredData = data.filter((item) => item.title === searchTerm.value);
    filteredData.forEach(item => console.log(`filteredData item ID ${item.id}: ${item.title}`));
  }

  render() {
    return (
      <div className="App">
        <header as="h1">Title Sort</header>
        {/* filter/input component - fetch and filter data based on input string */}
        <Filter
          updateSearchTerm={this.updateSearchTerm}
          submitSearchTerm={this.submitSearchTerm}
          searchTerm={this.searchTerm}
        />
        {/* table component - conditionally render based on results of input filtering */}
          {/* table row component - render for each returned data object */}
      </div>
    );
  }
}

export default App;
