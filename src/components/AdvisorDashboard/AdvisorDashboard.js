import React from "react";
import "./AdvisorDashboard.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ClientListTable from "../ClientListTable/ClientListTable";
import InvestmentListTable from "../InvestmentListTable/InvestmentListTable";
import { BiLogOut } from "react-icons/bi";

function AdvisorDashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard_container">
        <div className="dashboard_heading">
          <h1>
            Welcome, <span>Name</span>
          </h1>
          <div>
            <button>
              Logout <BiLogOut />
            </button>
          </div>
        </div>
        <div className="dashboard_table">
          <Tabs
            defaultActiveKey="clientList"
            id="uncontrolled-tab-example"
            className="mb-3"
            fill
          >
            <Tab eventKey="clientList" title="Client List">
              <ClientListTable />
            </Tab>
            <Tab eventKey="investmentList" title="Investment List">
              <InvestmentListTable />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default AdvisorDashboard;
