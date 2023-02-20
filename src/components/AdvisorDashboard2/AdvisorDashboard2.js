import React from "react";
import "./AdvisorDashboard2.css";
import { FiUsers } from "react-icons/fi";
import { TfiMoney } from "react-icons/tfi";
import { AiOutlineUser } from "react-icons/ai";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ClientListTable from "../ClientListTable/ClientListTable";
import InvesmentListTable from "../InvestmentListTable/InvestmentListTable";

function AdvisorDashboard2() {
  return (
    <div className="dashboard2">
      <div className="dashboard2_container">
        <div className="dashboard2_top">
          {/* It will contain cards */}

          <div className="dashboard2_card">
            <h4 className="dashboard2_card_heading">Clients</h4>
            <div className="dashboard2_card_content">
              <div className="dashboard2_card_icon1">
                <FiUsers fontSize={28} color={"#FF771D"} />
              </div>
              <p>120</p>
            </div>
          </div>

          <div className="dashboard2_card">
            <h4 className="dashboard2_card_heading">Investments</h4>
            <div className="dashboard2_card_content">
              <div className="dashboard2_card_icon2">
                <TfiMoney fontSize={28} color={"#2ECA6A"} />
              </div>
              <p>₹12,672</p>
            </div>
          </div>

          <div className="dashboard2_card">
            <h4 className="dashboard2_card_heading">Major Client</h4>
            <div className="dashboard2_card_content">
              <div className="dashboard2_card_icon3">
                <AiOutlineUser fontSize={28} color={"#4154F1"} />
              </div>
              <p>Incedo</p>
            </div>
          </div>
        </div>
        <div className="dashboard2_bottom">
          <Tabs>
            <TabList>
              <Tab>Client List</Tab>
              <Tab>Investment List</Tab>
            </TabList>

            <TabPanel>
              <ClientListTable />
            </TabPanel>
            <TabPanel>
              <InvesmentListTable />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default AdvisorDashboard2;