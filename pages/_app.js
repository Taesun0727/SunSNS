import React from 'react';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import Head from 'next/head';
import wrapper from '../store/configureStore';

const SunSNS = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet='utf-8'/>
        <title>SunSNS</title>
      </Head>
      <Component />
    </>
  )
}

SunSNS.propTypes = {
  Component: PropTypes.elementType.isRequired
}

export default wrapper.withRedux(SunSNS);