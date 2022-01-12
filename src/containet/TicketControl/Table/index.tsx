import { Table } from "antd";

import "./table.scss";

interface TableType {
  columns: any;
  data: any;
  request: boolean;
}

function TableCustom({ columns, data, request }: TableType) {
  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        rowKey="id"
        rowClassName={(record, index) =>
          index % 2 === 0 ? "control-row-light" : "control-row-dark"
        }
        loading={request}
        className="control-table"
        pagination={{
          className: "control-pagination",
          position: ["bottomCenter"],
        }}
      />
    </div>
  );
}

export default TableCustom;
