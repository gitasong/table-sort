import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class Search extends Component {
  render() {
    return(
      <Form onSubmit={this.props.filterSearchTerm}>
        <Form.Input
          fluid
          label="Search for a Title"
          placeholder="Enter search text (Press Return to search)"
          onChange={this.props.updateSearchTerm}
        />
      </Form>
    )
  }
}

export default Search;
