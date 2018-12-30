import React, { Component } from 'react';
import './App.css';
import Search from './Search';
import TitleTable from './TitleTable';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      data: [
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
      ],
      filteredData: []
    }

    this.updateSearchTerm = this.updateSearchTerm.bind(this);
    this.filterSearchTerm = this.filterSearchTerm.bind(this);
  }

  updateSearchTerm = (event, {value}) => {
    this.setState({searchTerm: {value}});
    console.log(`updated searchTerm: ${value}`);
  }

  filterSearchTerm = (event) => {
    // starting with seed data from JSON file
    // TODO: fetch data from JSON file (in componentDidMount?)
    // filter for searchTerm
    const { searchTerm, data } = this.state;
    console.log(`searchTerm: ${searchTerm.value}`);

    event.preventDefault();
    const filteredData = data.filter((item) => item.title === searchTerm.value);
    filteredData.forEach(item => console.log(`filteredData item ID ${item.id}: ${item.title}`));
    this.setState({filteredData: filteredData});
  }

  render() {
    const { searchTerm, data } = this.state;
    const displayData = searchTerm ? this.state.filteredData : data;  // TODO: Need to handle case where the filter returns no data, and display a message instead of the entire dataset
    console.log(`displayData instanceof Array? ${displayData instanceof Array}`);
    console.log(`displayData.length = ${displayData.length}`);

    return (
      <div className="App">
        <header as="h1">Title Sort</header>
        {/* search/input component - fetch and filter data based on input string */}
        <Search
          updateSearchTerm={this.updateSearchTerm}
          filterSearchTerm={this.filterSearchTerm}
          searchTerm={this.searchTerm}
        />
        {/* table component - conditionally render based on results of input filtering */}
          {/* table row component - render for each returned data object */}
        <TitleTable data={displayData} />
      </div>
    );
  }
}

export default App;
