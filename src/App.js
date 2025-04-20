import { useState } from "react";
import "./styles.css";
import Profile from "./componets/profile.js";
import Interest from "./componets/interest";
import Setting from "./componets/setting.js";

export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [error, setError] = useState({});
  const [data, setData] = useState({
    name: "",
    age: "",
    email: "",
    interest: [],
    theme: "light",
  });

  const tabs = [
    {
      name: "profile",
      component: <Profile data={data} setData={setData} error={error} />,
      validator: () => {
        let err = {};
        if (!data.name || data.name.length < 3) {
          err.name = "name can't be less than 3 chars";
        }
        if (!data.email) {
          err.email = `email can't be empty`;
        }
        if (!data.age || data.age < 18) {
          err.age = `age can't be lass than 18`;
        }
        setError(err);
        return err.name || err.age || err.email;
      },
    },
    {
      name: "interest",
      component: <Interest data={data} setData={setData} error={error} />,
      validator: () => {
        let err = {};
        if (data.interest.length == 0) {
          err.interest = "please select atleast one interest";
        }
        setError(err);
        return err.interest;
      },
    },
    {
      name: "setting",
      component: <Setting data={data} setData={setData} error={error} />,
      validator: () => {
        return false;
      },
    },
  ];

  const handleTabChange = (index) => {
    if (!tabs[activeTab]?.validator()) {
      setActiveTab(index);
    }
  };

  const handleChnageNextPre = (clickedValue) => {
    if (clickedValue == "Next") {
      if (!tabs[activeTab]?.validator()) {
        setActiveTab((pre) => pre + 1);
      }
    } else if (clickedValue == "Prev") {
      setError({});
      setActiveTab((pre) => pre - 1);
    }
  };

  const handleSubmitTabForm = () => {
    console.log("ankit===>sub", data);
    // call your apis
  };
  const ActiveComponet = tabs[activeTab].component;

  return (
    <div className="form-conatiner">
      <div className="tab-container">
        {tabs.map((tab, index) => {
          return (
            <div
              key={index}
              className="tab-heading"
              onClick={() => handleTabChange(index)}
            >
              {tab.name}
            </div>
          );
        })}
      </div>
      <div className="selected-tab">{ActiveComponet}</div>
      <div className="form-tab-bottom-btn">
        {activeTab > 0 && (
          <button
            className="pre-next-btn"
            onClick={() => {
              handleChnageNextPre("Prev");
            }}
          >
            Prev
          </button>
        )}
        {activeTab < tabs.length - 1 && (
          <button
            className="pre-next-btn"
            onClick={() => {
              handleChnageNextPre("Next");
            }}
          >
            Next
          </button>
        )}
        {activeTab == tabs.length - 1 && (
          <button
            className="pre-next-btn"
            type="button"
            onClick={handleSubmitTabForm}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}
