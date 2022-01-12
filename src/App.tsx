import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Col, Row } from "antd";
import Menu from "./containet/page/Menu";
import Search from "./containet/page/Search";
import InformationUser from "./containet/page/InformationUser";
import Home from "./containet/Home";
import TicketControl from "./containet/TicketControl";
import TicketManager from "./containet/ticketManage";
import Setting from "./containet/setting";

function App() {
  return (
    <div className="container">
      <Row gutter={[36, 18]} style={{ height: "100%" }}>
        <Col span={4}>
          <Menu />
        </Col>
        <Col span={20} style={{ display: "flex", flexDirection: "column" }}>
          <Row justify="space-between">
            <Search />
            <InformationUser />
          </Row>
          <Row className="page-wapper">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/TicketControl" element={<TicketControl />} />
              <Route path="/TicketManager" element={<TicketManager />} />
              <Route path="/Setting" element={<Setting />} />
            </Routes>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default App;
