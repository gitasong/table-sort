import React, { Component } from 'react';
// import TitleRow from './TitleRow';
import { Table } from 'semantic-ui-react';

class TitleTable extends Component {
  render() {
    const data = this.props.data;
    console.log(`data in TitleTable: ${data}`);
    console.log(`data in TitleTable instanceof Array? ${data instanceof Array}`);
    console.log(`data.length = ${this.props.data.length}`);
    const titleList = data.map((item) =>
      // <TitleRow item={item} key={item.id} />
      <Table.Row key={item.id}>
        <Table.Cell>{item.userId}</Table.Cell>
        <Table.Cell>{item.id}</Table.Cell>
        <Table.Cell>{item.title}</Table.Cell>
        <Table.Cell>{item.completed}</Table.Cell>
      </Table.Row>
    );
    // console.log(`titleList: ${titleList}`);
    console.log(`titleList instanceof Array? ${titleList instanceof Array}`);
    console.log(`titleList.length = ${titleList.length}`);

    return(
      <Table celled collapsing>
        {/* <Table.Header>
          <Table.Row>
            <Table.HeaderCell>User ID</Table.HeaderCell>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Completed</Table.HeaderCell>
          </Table.Row>
        </Table.Header> */}

        {this.titleList.length > 0 ? <Table.Body>{titleList}</Table.Body> : null}
      </Table>
    );
  }
}

export default TitleTable;
