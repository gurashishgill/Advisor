import React from "react";
import paginationFactory from "react-bootstrap-table2-paginator";
import BootstrapTable from "react-bootstrap-table-next";
import "./InvestmentListTable.css";

export const InvestmentGenerator = (quantity) => {
  const items = [];
  for (let i = 0; i < quantity; i++) {
    items.push({ id: i, name: `Item name ${i}`, price: 2100 + i });
  }
  return items;
};

const investments = InvestmentGenerator(100);

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
    text: "Price",
  },
];

function InvestmentListTable() {
  return (
    <>
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
      />
    </>
  );
}

export default InvestmentListTable;
