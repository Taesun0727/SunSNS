import PropTypes from 'prop-types';
import Link from 'next/link';
import React from 'react';
import { Menu, Row, Col } from 'antd';
import { useSelector } from 'react-redux';
import UserProfile from './UserProfile';
import LoginForm from './LoginForm';

const AppLayout = ({ children }) => {
  const { me } = useSelector((state) => state.user);

  return (
    <>
      <Menu mode="horizontal">
        <Menu.Item key="1">
          <Link href="/"><a>SunSNS</a></Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link href="/profile"><a>Profile</a></Link>
        </Menu.Item>
        <Menu.Item key="3" />
        <Menu.Item key="4">
          <Link href="/signup"><a>Signup</a></Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {me ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a href="https://velog.io/@ts6938" target="_blank" rel="noreferrer noopener">Made by Sun</a>
        </Col>
      </Row>
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
