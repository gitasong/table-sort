import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class Search extends Component {
  render() {
    return(
      <Form onSubmit={this.props.filterSearchTerm}>
        <Form.Input
          fluid
          size="large"
          icon="search"
          label="Search for a Title"
          placeholder="Enter search text (Press Return to display results)"
          onChange={this.props.updateSearchTerm}
        />
      </Form>
    )
  }
}

export default Search;
