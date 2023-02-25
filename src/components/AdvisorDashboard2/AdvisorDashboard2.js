import React from "react";
import "./AdvisorDashboard2.css";
import { FiUsers } from "react-icons/fi";
import { TfiMoney } from "react-icons/tfi";
import { AiOutlineUser } from "react-icons/ai";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ClientListTable from "../ClientListTable/ClientListTable";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserInfo, reset } from "../../features/advisor/advisorSlice";
import { useEffect } from "react";
import swal from "sweetalert";

function AdvisorDashboard2() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { token } = useSelector((state) => state.auth);
  const { userinfo, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.advisor
  );

  useEffect(() => {
    if (token === null) {
      history.push("/AdvisorLogin");
    }
  }, [token]);

  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      swal({
        title: "Error!",
        text: message,
        icon: "error",
        button: "OK",
      });
    }
    dispatch(reset());
  }, [userinfo, isError, isSuccess, isLoading, message, history]);

  return (
    <>
      <div className="dashboard2">
        <div className="dashboard2_container">
          <div className="dashboard2_top">
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
              <TabList></TabList>

              <TabPanel>
                <ClientListTable />
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdvisorDashboard2;
