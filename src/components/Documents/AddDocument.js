import React, { useEffect, useState } from "react";
import { Button, Form, Input, Select, message } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { fetchUsers } from '../../services/users';
import { createDocument } from '../../services/documents';
import CreateButton from '../CreateButton';
import { ROUTES } from '../../router';

const initilaState = {
  title: '',
  userId: '',
};

const { Option } = Select;

function AddDocument() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const handleFetch = async () => {
    try {
      setLoading(true);
      const users = await fetchUsers();
      setUsers(users);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      message.error(error.message);
    }
  };

  const formHandler = async (values) => {
    try {
      setLoading(true);
      const { userId } = values;
      const { language = 'en' } = users.find(i => i._id === userId);
      await createDocument({ ...values, language });
      message.success('User has been created!', 3)
      setLoading(false);
    } catch (error) {
      message.error(error.message, 3);
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  if (!users.length && !loading) {
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>There is no any user. You need to creat a one first.</h2>
        <CreateButton
          url={ROUTES.CREATE_USER}
          buttonText="Create User"
          buttonIcon={<UserOutlined />}
        />
      </div>
    )
  }

  return (
    <Form onFinish={formHandler} layout="vertical" initialValues={initilaState}>
      <Form.Item
        label="Title"
        name="title"
        rules={[
          {
            required: true,
            message: "Please input document title!",
          },
        ]}
      >
        <Input type="text" name="name" />
      </Form.Item>
      <Form.Item name="userId" label="Birth Country"
        rules={[
          {
            required: true,
            message: 'Select user please!'
          }
        ]}
      >
        <Select name="userId">
          {users.map(({ _id, name }) => (
            <Option value={_id} key={_id}>{name}</Option>
          ))}
        </Select>
      </Form.Item>
      <Button loading={loading} htmlType="submit" type="primary">
        Save
      </Button>
    </Form>
  );
}

export default AddDocument;