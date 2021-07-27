import React, { useState } from "react";
import { Table, Radio, Divider } from "antd";

// 定义数据
const data = Array.from({ length: 20 }, (_, x) => {
  return {
    key: x,
    name: `0_${x}`,
    age: x + 1,
    address: `New York No.${x} Lake Park`,
  };
});
// 定义列
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === "Disabled User",
    // Column configuration not to be checked
    name: record.name,
  }),
};
const MyTable = () => {
  const [selectionType, setSelectionType] = useState("checkbox");
  return (
    <div>
      <Radio.Group
        onChange={({ target: { value } }) => {
          setSelectionType(value);
        }}
        value={selectionType}
      >
        <Radio value="checkbox">Checkbox</Radio>
        <Radio value="radio">radio</Radio>
      </Radio.Group>

      <Divider />

      <Table
        bordered
        pagination={{
          defaultPageSize: 5,
          pageSizeOptions: ["5", "10"],
          onShowSizeChange: function (current, size) {
            console.log(current, "--current");
            console.log(size, "----size");
          },
          showSizeChanger: true,
        }}
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};

export default MyTable;
