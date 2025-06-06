import React, { useState } from "react";

const TabbedComponent = () => {
  const [activeTab, setActiveTab] = useState("default");

  const renderContent = () => {
    switch (activeTab) {
      case "Tab1":
        return <p>This is content for Tab 1</p>;
      case "Tab2":
        return <p>This is content for Tab 2</p>;
      case "Tab3":
        return <p>This is content for Tab 3</p>;
      default:
        return "Click on Buttons to View conten";
    }
  };

  return (
    <div>
      <div style={{ marginBottom: "10px" }}>
        <button onClick={() => setActiveTab("Tab1")}>Tab 1</button>
        <button onClick={() => setActiveTab("Tab2")}>Tab 2</button>
        <button onClick={() => setActiveTab("Tab3")}>Tab 3</button>
      </div>
      <div>{renderContent()}</div>
    </div>
  );
};

export default TabbedComponent;
