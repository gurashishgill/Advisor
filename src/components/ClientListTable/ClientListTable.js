import React, { useState } from "react";
import paginationFactory from "react-bootstrap-table2-paginator";
import BootstrapTable from "react-bootstrap-table-next";
import "./ClientListTable.css";
import { GrAdd } from "react-icons/gr";
import Modal from "react-bootstrap/Modal";
import { BsFillPersonFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";

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
          <input type="text" placeholder="UserName" id="UsertName" />
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
  },
  {
    text: "Options",
    
    
  },
];

function ClientListTable() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
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
      />
      <div className="clienttable_button_container">
        <button onClick={() => setModalShow(true)}>
          Add New Client <GrAdd />
        </button>
      </div>
      <AddClientModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default ClientListTable;
