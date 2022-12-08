import React from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../router';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text, record) => <Link to={`${ROUTES.USERS}/${record._id}`}>{text}</Link>
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
  },
  {
    title: 'Date Of Birth',
    dataIndex: 'dateOfBirth',
  },
  {
    title: 'Country',
    dataIndex: 'country',
  },
  {
    title: 'Language',
    dataIndex: 'language',
  },
];

const UsersList = ({ loading = false, data = [] }) => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      loading={loading}
      pagination={{
        hideOnSinglePage: true,
        defaultPageSize: 5,
        showSizeChanger: true,
        pageSizeOptions: [1, 5, 10, 20]
      }}
    />
  );
};
export default UsersList;