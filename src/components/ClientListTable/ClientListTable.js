import React, { useState } from "react";
import paginationFactory from "react-bootstrap-table2-paginator";
import BootstrapTable from "react-bootstrap-table-next";
import "./ClientListTable.css";
import Modal from "react-bootstrap/Modal";
import { BsFillPersonFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdModeEditOutline, MdDeleteOutline } from "react-icons/md";
import { BsEye } from "react-icons/bs";

function AddClientModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add New Client
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="input_field">
          <div className="icon_container">
            <BsFillPersonFill />
          </div>
          <input type="text" placeholder="Username" id="UsertName" />
        </div>

        <div className="input_field">
          <div className="icon_container">
            <RiLockPasswordFill />
          </div>
          <input type="text" placeholder="Password" id="Password" />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="clientadd_submit_button">Submit</button>
        <button className="clientadd_close_button" onClick={props.onHide}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export const ClientsGenerator = (quantity) => {
  const items = [];
  for (let i = 0; i < quantity; i++) {
    items.push({ id: i, name: `Item name ${i}`, price: 2100 + i });
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
      <div
        style={{
          backgroundColor: "#2ECA6A",
          color: "#ffffff",
          fontSize: "20px",
          padding: "2px 7px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        <MdModeEditOutline />
      </div>
      <div
        style={{
          backgroundColor: "#FF0000",
          color: "#ffffff",
          fontSize: "20px",
          padding: "2px 7px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        <MdDeleteOutline />
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

function ClientListTable() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div className="clienttable_button_container">
        <button onClick={() => setModalShow(true)}>Add New Client</button>
      </div>
      <BootstrapTable
        bootstrap4
        keyField="id"
        data={clinets}
        columns={columns}
        striped
        bordered
        hover
        pagination={paginationFactory({
          sizePerPage: 5,
          hideSizePerPage: true,
        })}
      ></BootstrapTable>
      <AddClientModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default ClientListTable;
