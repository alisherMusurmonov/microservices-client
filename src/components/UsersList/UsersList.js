import React from 'react';
import { Table } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const UsersList = ({ loading = false, data = [] }) => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      loading={loading}
    />
  );
};
export default UsersList;