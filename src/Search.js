import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class Search extends Component {
  render() {
    return(
      <Form>
        <Form.Input
          fluid
          size="large"
          icon="search"
          label="Search for a Title"
          placeholder="Enter search text (Press Return to search)"
          onChange={this.props.filterSearch}
        />
      </Form>
    )
  }
}

export default Search;
