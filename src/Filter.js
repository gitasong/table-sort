import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class Filter extends Component {
  render() {
    return(
      <Form onSubmit={this.props.submitSearchTerm}>
        <Form.Input
          fluid
          label="Search for a Title"
          placeholder="Enter title"
          onChange={this.props.updateSearchTerm}
        />
        <Form.Button>
          Submit
        </Form.Button>
      </Form>
    )
  }
}

export default Filter;
