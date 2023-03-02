import React, { useState, useEffect } from "react";
import paginationFactory from "react-bootstrap-table2-paginator";
import BootstrapTable from "react-bootstrap-table-next";
import "./ClientListTable.css";
import { MdModeEditOutline, MdDeleteOutline } from "react-icons/md";
import { BsEye } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { getClients, deleteClient } from "../../features/clients/clientsSlice";
import swal from "sweetalert";
import AddClient from "../AddClient/AddClient";

export const prepareData = (clients) => {
  const items = [];
  clients.forEach(function (client) {
    items.push({ id: client.clientID, name: client.sortName, price: 2100 });
  });
  return items;
};

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
        onClick={() => console.log(`${cell} ${row}`)}
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

function ClientListTable() {
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
      dataField: "remove",
      text: "Delete",
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
              <MdDeleteOutline onClick={() => handleDelete(row.id)} />
            </div>
          </div>
        );
      },
    },
  ];
  const dispatch = useDispatch();
  const { userinfo } = useSelector((state) => state.advisor);
  const { clients, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.clients
  );
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    dispatch(getClients(userinfo.advisorID));
  }, [dispatch]);

  const handleDelete = (clientId) => {
    dispatch(deleteClient(clientId));
  };

  let clientsdata = prepareData(clients);

  return (
    <>
      <div className="clienttable_button_container">
        <button onClick={() => setModalShow(true)}>Add New Client</button>
      </div>
      <BootstrapTable
        bootstrap4
        keyField="id"
        data={clientsdata}
        columns={columns}
        striped
        bordered
        hover
        pagination={paginationFactory({
          sizePerPage: 5,
          hideSizePerPage: true,
        })}
      ></BootstrapTable>
      <AddClient show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default ClientListTable;
