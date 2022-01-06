import React from 'react';
import './App.css';
import Menu from './contant/page/Menu';
import { Col, Row } from 'antd';
import Search from './contant/page/Search';
import InformationUser from './contant/page/InformationUser';
import graph from './assets/svg/img/graph.svg'
import Home from './contant/Home';

function App() {
  return (
    <div className="container">
      <Row gutter={[36, 18]} style={{height: "100%"}}>
        <Col span={4}>
          <Menu />
        </Col>
        <Col span={20} style={{display: "flex", flexDirection: "column"}}>
          <Row justify="space-between">
            <Search/>
            <InformationUser/>
          </Row>
          <Row className="page-wapper">
            <Home/>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default App;
