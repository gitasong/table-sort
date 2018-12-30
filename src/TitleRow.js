import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

class TitleRow extends Component {
  render() {
    // const item = {
    //   "userId": 1,
    //   "id": 9,
    //   "title": "molestiae perspiciatis ipsa",
    //   "completed": false
    // }

    const item = this.props.item;

    return(
      <Table.Row>
        <Table.Cell>{item.userId}</Table.Cell>
        <Table.Cell>{item.id}</Table.Cell>
        <Table.Cell>{item.title}</Table.Cell>
        <Table.Cell>{item.completed}</Table.Cell>
      </Table.Row>
    );
  }
}

export default TitleRow;
