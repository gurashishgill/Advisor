import React, { useState, useEffect } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import "./AdvisorProfile.css";
import { BsEye } from "react-icons/bs";
import paginationFactory from "react-bootstrap-table2-paginator";
import BootstrapTable from "react-bootstrap-table-next";
import { useSelector, useDispatch } from "react-redux";
import { getClients, reset } from "../../features/clients/clientsSlice";
import { useHistory } from "react-router-dom";
import EditAdvisorProfile from "../EditAdvisorProfile/EditAdvisorProfile";
import Alert from "@mui/material/Alert";
// import "mdb-react-ui-kit/dist/css/mdb.min.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";

export const prepareData = (clients) => {
  const items = [];
  clients.forEach(function (client) {
    items.push({ id: client.clientID, name: client.sortName, price: 2100 });
  });
  return items;
};

function AdvisorProfile() {
  const [modalShow, setModalShow] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { userinfo } = useSelector((state) => state.advisor);
  const { clients } = useSelector((state) => state.clients);

  const columns = [
    {
      dataField: "id",
      text: "Client ID",
      sort: true,
    },
    {
      dataField: "name",
      text: "Client Name",
      sort: true,
    },
    {
      dataField: "price",
      text: "Investment",
      sort: true,
    },
    {
      dataField: "view",
      text: "View",
      formatter: (cellContent, row) => {
        return (
          <div className="custom_button_container">
            <div
              style={{
                backgroundColor: "#0D6EFD",
                color: "#ffffff",
                fontSize: "20px",
                padding: "2px 7px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              <BsEye
                onClick={() => history.push(`/client/profile/${row.id}`)}
              />
            </div>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    dispatch(getClients(userinfo.advisorID));
  }, [dispatch]);

  useEffect(() => {
    if (token === null) {
      history.push("/AdvisorLogin");
    }
  }, [token]);

  let clientsdata = prepareData(clients);
  return (
    <section style={{ backgroundColor: "#eee", minHeight: "90vh" }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="/avatar.png"
                  alt="avatar"
                  style={{ width: "240px" }}
                  fluid
                />
                <p className="text-muted mb-1">
                  {userinfo.firstName} {userinfo.lastName}
                </p>
                {userinfo.roleID == 2 ? (
                  <p className="text-mute mb-4">Advisor</p>
                ) : (
                  <p className="text-muted">Client</p>
                )}

                <div className="">
                  <button onClick={() => setModalShow(true)}>
                    Edit profile
                  </button>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-5">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {userinfo.firstName} {userinfo.lastName}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {userinfo.email}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {userinfo.phone}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>City</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {userinfo.city}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>State</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {userinfo.state}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {userinfo.address}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Company</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {userinfo.company}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        {clients.length == 0 ? (
          <Alert variant="outlined" severity="warning">
            You have no clients — start adding!
          </Alert>
        ) : (
          <MDBRow>
            <MDBCard>
              <BootstrapTable
                bootstrap4
                keyField="id"
                data={clientsdata}
                columns={columns}
                hover
                pagination={paginationFactory({
                  sizePerPage: 10,
                  hideSizePerPage: true,
                })}
              ></BootstrapTable>
            </MDBCard>
          </MDBRow>
        )}
      </MDBContainer>
      <EditAdvisorProfile show={modalShow} onHide={() => setModalShow(false)} />
    </section>
  );
}

export default AdvisorProfile;
