import { Input, Table, Tooltip } from "antd";
import React, { useState } from "react";
import type { ColumnsType } from "antd/es/table";
import {
  PlayCircleOutlined,
  BookOutlined,
  InfoCircleOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "Personal Information",
    children: <p></p>,
  },
  {
    key: "2",
    label: "Education",
    children: <p></p>,
  },
  {
    key: "3",
    label: "Work Experience",
    children: <p></p>,
  },
  {
    key: "4",
    label: "Activity Filter",
    children: <p></p>,
  },
  {
    key: "5",
    label: "Advanced Filter",
    children: <p></p>,
  },
];

interface DataType {
  key: React.Key;
  qualified: string;
  task: string;
  disqualified: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "247 Candidates",
    dataIndex: "name",
    render: () => (
      <div
        className="info"
        style={{ display: "flex", alignItems: "center", columnGap: "20px" }}
      >
        <div>
          <h1 className="profile">AS</h1>
        </div>
        <div>
          <h3>Aaliyah Sanderson</h3>
          <p>Riyadh, Saudi Arabia</p>
          <p>Bachelor - Cambridge University (2023-2023)</p>
          <span id="hash">#top_candidate</span>
          <div className="tags">
            <span>New York</span>
            <span>New York</span>
            <span>New York</span>
          </div>
        </div>
      </div>
    ),
    width: "60%",
  },
  {
    title: "Qualified",
    dataIndex: "qualified",
    align: "right",
  },
  {
    title: "Task",
    dataIndex: "task",
    align: "right",
    render: (text: string) => {
      return (
        <span className="value">
          <PlayCircleOutlined />
          {text}
        </span>
      );
    },
  },
  {
    title: "Disqualified",
    dataIndex: "disqualified",
    align: "right",
    render: (text: string) => {
      return text !== "" ? (
        <span className="value">
          <BookOutlined />
          {text}
        </span>
      ) : null;
    },
  },
];

const data: DataType[] = [
  {
    key: "1",
    task: "4",
    qualified: "",
    disqualified: "",
  },
  {
    key: "2",
    task: "5",
    qualified: "",
    disqualified: "",
  },
  {
    key: "3",
    task: "9",
    qualified: "",
    disqualified: "5 Programs",
  },
  {
    key: "3",
    task: "9",
    qualified: "",
    disqualified: "5 Programs",
  },
  {
    key: "3",
    task: "9",
    qualified: "",
    disqualified: "5 Programs",
  },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
};

const HomePageContent = () => {
  return (
    <section className="page-content">
      <div className="left">
        <Input
          className="input"
          placeholder="Search by name, edu, exp or #tag"
          prefix={
            <SearchOutlined
              style={{ color: "rgba(0,0,0,.45)" }}
              className="site-form-item-icon"
            />
          }
          suffix={<InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />}
        />
        <div className="filter">
          <div className="head">
            <h3>Filters</h3>
            <p>0 selected</p>
          </div>
          <Collapse
            style={{ background: "white", border: "none", borderRadius:"0px" }}
            items={items}
            defaultActiveKey={["1"]}
          />
        </div>
      </div>
      <div className="right">
        <div>
          <Table
            rowSelection={{
              type: "checkbox",
              ...rowSelection,
            }}
            columns={columns}
            dataSource={data}
            pagination={false}
          />
        </div>
      </div>
    </section>
  );
};

export default HomePageContent;
