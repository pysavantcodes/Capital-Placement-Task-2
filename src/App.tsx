import {
  HomeOutlined,
  TeamOutlined,
  CalendarOutlined,
  ShareAltOutlined,
  CopyOutlined,
  BookOutlined,
  HeartOutlined,
  LeftOutlined,
  SettingOutlined,
  DownOutlined,
  TagOutlined,
  UserAddOutlined,
  UserDeleteOutlined,
  MailOutlined,
  SoundOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import "./App.css";
import { useState } from "react";
import HomePageContent from "./components/HomePageContent";

const { Header, Sider } = Layout;

interface Options {
  value: string;
  number: number;
}

const App = () => {
  const options: Options[] = [
    { value: "Applied", number: 1745 },
    { value: "Shortlisted", number: 453 },
    { value: "Technical Interview", number: 123 },
    { value: "Opportunity Browsing", number: 243 },
    { value: "Video Interview I", number: 25 },
    { value: "Video Interview II", number: 25 },
    { value: "Video Interview III", number: 25 },
    { value: "Offer", number: 25 },
    { value: "Withdrawn", number: 25 },
  ];
  const [selectedOption, setSelectedOption] = useState<string>(
    "Opportunity Browsing"
  );
  return (
    <Layout className="layout">
      <Sider
        className="menu"
        style={{ background: "white" }}
        trigger={null}
        collapsible
        collapsed={true}
      >
        <div className="demo-logo-vertical" />
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginBottom: ".5rem",
            padding: "1.5rem 0",
          }}
        >
          <div className="profile-top"></div>
        </div>
        <Menu
          style={{ borderRight: "none" }}
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          color="#D0F7FA"
          items={[
            {
              key: "1",
              icon: <HomeOutlined />,
              label: "",
            },
            {
              key: "2",
              icon: <TeamOutlined />,
              label: "",
            },
            {
              key: "3",
              icon: <CalendarOutlined />,
              label: "",
            },
            {
              key: "4",
              icon: <ShareAltOutlined />,
              label: "",
            },
            {
              key: "5",
              icon: <CopyOutlined />,
              label: "",
            },
            {
              key: "6",
              icon: <BookOutlined />,
              label: "",
            },
            {
              key: "7",
              icon: <HeartOutlined />,
              label: "",
            },
            {
              key: "8",
              icon: <LeftOutlined />,
              label: "",
            },
          ]}
        />
        <span className="user">
          <SettingOutlined
            style={{ fontSize: "23px", opacity: 0.7 }}
            id="setting"
          />
          <p id="user">AS</p>
        </span>
      </Sider>
      <Layout style={{ marginLeft: "80px" }}>
        <Header
          className="header"
          style={{ padding: 0, background: "#F9FAFF" }}
        >
          <div>
            <h3>London Intership Program</h3>
            <p>London</p>
          </div>
          <div className="dropdown">
            <button className="dropbtn">
              {selectedOption}
              <DownOutlined style={{ fontSize: "12px" }} />
            </button>
            <div className="dropdown-content">
              {options.map((data: Options, index: number) => {
                return (
                  <p onClick={()=>setSelectedOption(data.value)} key={index}>
                    {data.value} <span>{data.number}</span>
                  </p>
                );
              })}
            </div>
          </div>
          <div className="header-right">
            <div className="icons">
              <span>
                <TagOutlined />
              </span>
              <span>
                <UserDeleteOutlined />
              </span>
              <span>
                <UserAddOutlined />
              </span>

              <span>
                <SoundOutlined />
              </span>
              <span>
                <MailOutlined />
              </span>
            </div>
            <button className="interview-btn">
              <p>Move to Video Interview</p>
              <DownOutlined style={{ fontSize: "12px" }} />
            </button>
          </div>
        </Header>
        <HomePageContent/>
      </Layout>
    </Layout>
  );
};

export default App;
