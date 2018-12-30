import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class Search extends Component {
  render() {
    return(
      <Form onSubmit={this.props.processSearchTerm}>
        <Form.Input
          fluid
          label="Search for a Title"
          placeholder="Enter title"
          onChange={this.props.updateSearchTerm}
        />
      </Form>
    )
  }
}

export default Search;
