import React, { useState } from "react";
import paginationFactory from "react-bootstrap-table2-paginator";
import BootstrapTable from "react-bootstrap-table-next";
import "./InvestmentListTable.css";
import { MdModeEditOutline, MdDeleteOutline } from "react-icons/md";
import { RxOpenInNewWindow } from "react-icons/rx";

export const InvestmentGenerator = (quantity) => {
  const items = [];
  for (let i = 0; i < quantity; i++) {
    items.push({ id: i, name: `Item name ${i}`, price: 2100 + i });
  }
  return items;
};

const investments = InvestmentGenerator(100);

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
        <RxOpenInNewWindow />
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
    text: "Investment ID",
    sort: true,
  },
  {
    dataField: "name",
    text: "Investment Name",
    sort: true,
  },
  {
    dataField: "price",
    text: "Investment Amount",
    sort: true,
  },
  {
    dataField: "action",
    text: "Actions",
    formatter: customButton,
  },
];

function InvestmentListTable() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div className="clienttable_button_container">
        <button onClick={() => setModalShow(true)}>Add New Investment</button>
      </div>
      <BootstrapTable
        bootstrap4
        keyField="id"
        data={investments}
        columns={columns}
        striped
        bordered
        hover
        pagination={paginationFactory({
          sizePerPage: 5,
          hideSizePerPage: true,
        })}
      ></BootstrapTable>
      {/* <AddClientModal show={modalShow} onHide={() => setModalShow(false)} /> */}
    </>
  );
}

export default InvestmentListTable;
