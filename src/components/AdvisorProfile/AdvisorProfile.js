import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import { useSelector } from "react-redux";
import { BsEye } from "react-icons/bs";
import paginationFactory from "react-bootstrap-table2-paginator";
import BootstrapTable from "react-bootstrap-table-next";
// import "mdb-react-ui-kit/dist/css/mdb.min.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";

export const ClientsGenerator = (quantity) => {
  const items = [];
  for (let i = 0; i < quantity; i++) {
    items.push({ id: i, name: `Client name ${i}`, price: 2100 + i });
  }
  return items;
};

const clinets = ClientsGenerator(100);

const customButton = (cell, row) => {
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
        <BsEye />
      </div>
    </div>
  );
};

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
    dataField: "action",
    text: "Actions",
    formatter: customButton,
  },
];

function AdvisorProfile() {
  const { userinfo } = useSelector((state) => state.advisor);
  return (
    <section style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle mb-4"
                  style={{ width: "150px" }}
                  fluid
                />
                <p className="text-muted mb-1">
                  {userinfo.firstName} {userinfo.lastName}
                </p>
                {userinfo.roleID == 2 ? (
                  <p className="text-muted mb-4">Advisor</p>
                ) : (
                  <p className="text-muted">Client</p>
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
            <MDBCard className="mb-4">
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

export default AdvisorProfile;
