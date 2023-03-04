import React, { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import LakeTrends from "./components/LakeTrends";
import AustinLakes from "./components/AustinLakes";
import ProtectOurLakes from "./components/ProtectOurLakes";
import AboutUs from "./components/AboutUs";

import "./App.css"; // import the provided CSS file

function App() {
  const [activeTab, setActiveTab] = useState("Lake Trends");

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  let content;
  if (activeTab === "Lake Trends") {
    content = <LakeTrends />;
  } else if (activeTab === "Austin Lakes") {
    content = <AustinLakes />;
  } else if (activeTab === "Protect Our Lakes") {
    content = <ProtectOurLakes />;
  } else if (activeTab === "About Us") {
    content = <AboutUs />;
  }

  return (
    <div className="App">
      <NavigationBar onTabChange={handleTabChange} activeTab={activeTab} />
      <div className="TabContent">{content}

      </div>
      
    </div>
  );
}

export default App;
