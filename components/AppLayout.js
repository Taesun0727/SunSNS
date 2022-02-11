import PropTypes from 'prop-types';
import Link from 'next/link';
import React from 'react';
import { Input, Menu, Row, Col } from 'antd'
import styled from 'styled-components';
import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';
import { useSelector } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

const SearchInput = styled(Input.Search)`
  verticalAlign: middle;
`;

const Global = createGlobalStyle`
  .ant-row {
    margin-right: 0 !important
    margin-left: 0 !important
  }

  .ant-col:first-child {
    padding-left: 0 !important
  }

  .ant-col:last-child {
    padding-right: 0 !important
  }
`;


const AppLayout = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn)
  
  return (
    <>
      <Global/>
      <Menu mode='horizontal'>
        <Menu.Item key='1'>
          <Link href="/"><a>SunSNS</a></Link>
        </Menu.Item>
        <Menu.Item key='2'>
          <Link href="/profile"><a>Profile</a></Link>
        </Menu.Item>
        <Menu.Item key='3'>
          <SearchInput enterButton />
        </Menu.Item>
        <Menu.Item key='4'>
          <Link href="/signup"><a>Signup</a></Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile/> : <LoginForm/>}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a href="https://velog.io/@ts6938" target="_blank" rel="noreferrer noopener">Made by Sun</a>
        </Col>
      </Row>
    </>
  )
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default AppLayout;