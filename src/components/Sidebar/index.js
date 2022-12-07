import React, { useState } from 'react';
import {
  BookOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Menu, Layout } from 'antd';
import { Link, } from 'react-router-dom';
const { Sider } = Layout;

const menuItems = [
  {
    key: 'users',
    icon: <UserOutlined />,
    label: 'Users',
    href: '/users',
  },
  {
    key: 'documents',
    icon: <BookOutlined />,
    label: 'Documents',
    href: '/documents',
  },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <div
        style={{
          height: 32,
          margin: 16,
          background: 'rgba(255, 255, 255, 0.2)',
        }}
      />
      <Menu
        theme='dark'
        defaultSelectedKeys={menuItems[0].key}
        mode="inline"
      >
        {menuItems.map((item) => (
          <Menu.Item key={item.key} icon={item.icon}>
            <Link to={item.href}>
              {item.label}
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  )
};

export default Sidebar;