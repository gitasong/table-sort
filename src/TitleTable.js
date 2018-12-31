import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

class TitleTable extends Component {
  render() {
    const data = this.props.data;
    // console.log(`data in TitleTable: ${data}`);
    // console.log(`data in TitleTable instanceof Array? ${data instanceof Array}`);
    // console.log(`data.length = ${this.props.data.length}`);

    const titleList = data.map((item) =>
      <Table.Row key={item.id}>
        <Table.Cell><p>{item.userId}</p></Table.Cell>
        <Table.Cell><p>{item.id}</p></Table.Cell>
        <Table.Cell><p>{item.title}</p></Table.Cell>
        <Table.Cell><p>{`${item.completed}`}</p></Table.Cell>
      </Table.Row>
    );
    // console.log(`titleList: ${titleList}`);
    // console.log(`titleList instanceof Array? ${titleList instanceof Array}`);
    // console.log(`titleList.length = ${titleList.length}`);

    return(
      <Table celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>User ID</Table.HeaderCell>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Completed</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {titleList}
        </Table.Body>

      </Table>
    );
  }
}

export default TitleTable;
