import React from 'react';
import './App.css';
import Menu from './contant/page/Menu';
import { Col, Row } from 'antd';
import Search from './contant/page/Search';
import InformationUser from './contant/page/InformationUser';
import Home from './contant/Home';
import TicketControl from './contant/TicketControl';

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
            {/* <TicketControl/> */}
            <Home/>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default App;
