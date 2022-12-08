import React, { useState } from "react";
import { Button, Form, Input, Select, DatePicker, message } from "antd";
import { createUser } from "../../services/users";
import { LANGUAGES, COUNTRIES } from '../../constants';

const initilaState = {
  name: "",
  phone: "",
  dob: "",
  language: LANGUAGES[0].value,
  country: COUNTRIES[0].value,
  dateOfBirth: null,
};

const { Option } = Select;

function AddUser() {
  const [loading, setLoading] = useState(false);
  const formHandler = async (values) => {
    try {
      setLoading(true);
      await createUser(values);
      message.success('User has been created!', 3)
      setLoading(false);
    } catch (error) {
      message.error(error.message, 3);
      setLoading(false);
    }
  };

  return (
    <Form onFinish={formHandler} layout="vertical" initialValues={initilaState}>
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input your name!",
          },
        ]}
      >
        <Input type="text" name="name" />
      </Form.Item>
      <Form.Item
        label="Phone"
        name="phone"
        rules={[
          {
            required: true,
            message: "Please input your phone number!",
          },
        ]}
      >
        <Input type="tel" name="phone" />
      </Form.Item>
      <Form.Item label="Language" name="language">
        <Select
          name="language"
        >
          {LANGUAGES.map(({ value, label }) => (
            <Option value={value} key={value}>{label}</Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name="dateOfBirth" label="Date Of Birth" rules={[
        {
          required: true,
          message: "Please input your dob!",
        },
      ]}>
        <DatePicker name="dateOfBirth" />
      </Form.Item>
      <Form.Item name="country" label="Birth Country">
        <Select name="country">
          {COUNTRIES.map(({ value, label }) => (
            <Option value={value} key={value}>{label}</Option>
          ))}
        </Select>
      </Form.Item>
      <Button loading={loading} htmlType="submit" type="primary">
        Save
      </Button>
    </Form>
  );
}

export default AddUser;