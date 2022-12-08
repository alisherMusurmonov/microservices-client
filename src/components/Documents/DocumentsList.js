import React from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../router';
import { styleTag } from '../../utils';

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    render: (text) => <div dangerouslySetInnerHTML={{ __html: styleTag(text) }} />
  },
  {
    title: 'User id',
    dataIndex: 'userId',
    render: (text) => <Link to={`${ROUTES.USERS}/${text}`}>{text}</Link>
  },

  {
    title: 'Created',
    dataIndex: 'createdAt',
  },
  {
    title: 'Updated',
    dataIndex: 'updatedAt',
  },
];

const DocumentsList = ({ loading = false, data = [] }) => {
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

export default DocumentsList;