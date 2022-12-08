import { Button, message } from 'antd';
import React, { useEffect, useState } from 'react'
import {
  UserOutlined,
} from '@ant-design/icons';
import CreateButton from '../../components/CreateButton';
import UsersList from '../../components/Users/UsersList'
import { ROUTES } from '../../router';
import { fetchUsers } from '../../services/users';

export default function Users() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const handleFetch = async () => {
    try {
      setLoading(true);
      const users = await fetchUsers();
      setData(users);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      message.error(error.message);
    }
  }
  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div>
      <CreateButton
        url={ROUTES.CREATE_USER}
        buttonText="Create User"
        styles={{ textAlign: 'right' }}
        buttonIcon={<UserOutlined />}
      />
      <UsersList data={data} loading={loading} />
    </div>
  )
}
