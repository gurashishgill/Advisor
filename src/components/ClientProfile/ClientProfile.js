import React, { useEffect } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { getClientInfo } from "../../features/clients/clientsSlice";
import "./ClientProfile.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import BootstrapTable from "react-bootstrap-table-next";
import { useHistory, useParams } from "react-router-dom";

export const ClientsGenerator = (quantity) => {
  const items = [];
  for (let i = 0; i < quantity; i++) {
    items.push({ id: i, name: `Client name ${i}`, price: 2100 + i });
  }
  return items;
};

const clinets = ClientsGenerator(100);

const columns = [
  {
    dataField: "price",
    text: "Proposed",
    sort: true,
  },
  {
    dataField: "pending",
    text: "Pending",
    sort: true,
  },
  {
    dataField: "price",
    text: "Net Investment",
    sort: true,
  },
  {
    dataField: "value",
    text: "Market Value",
  },
  {
    dataField: "date",
    text: "Inception Date",
    sort: true,
  },
];

function ClientProfile() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { clientid } = useParams();
  const { token } = useSelector((state) => state.auth);
  const { client } = useSelector((state) => state.clients);

  useEffect(() => {
    dispatch(getClientInfo(clientid));
  }, [dispatch]);

  useEffect(() => {
    if (token === null) {
      history.push("/AdvisorLogin");
    }
  }, [token]);

  return (
    <section style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="/avatar.png"
                  alt=""
                  style={{ width: "250px" }}
                  fluid
                />
                <p className="text-muted mb-1">{client.firstName}</p>
                {client.roleID == 2 ? (
                  <p className="text-mute mb-4">Client</p>
                ) : (
                  <p className="text-muted">Advisor</p>
                )}

                {/* <div className="d-flex justify-content-center mb-2">
                  <MDBBtn>Follow</MDBBtn>
                  <MDBBtn outline className="ms-1">
                    Message
                  </MDBBtn>
                </div> */}
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
                      {client.firstName}
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
                      {client.email}
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
                      {client.phone}
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
                      {client.city}
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
                      {client.state}
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
                      {client.address}
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
                      {client.company}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCard>
            <BootstrapTable
              bootstrap4
              keyField="id"
              data={clinets}
              columns={columns}
              bordered
              hover
              pagination={paginationFactory({
                sizePerPage: 10,
                hideSizePerPage: true,
              })}
            ></BootstrapTable>
          </MDBCard>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}

export default ClientProfile;
