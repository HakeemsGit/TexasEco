import React, { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import LakesDatabase from "./components/LakesDatabase";
import Tab2 from "./components/Tab2";
import Tab3 from "./components/Tab3";
import Tab4 from "./components/Tab4";

import "./App.css"; // import the provided CSS file

function App() {
  const [activeTab, setActiveTab] = useState("Lakes Database");

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  let content;
  if (activeTab === "Lakes Database") {
    content = <LakesDatabase />;
  } else if (activeTab === "Tab2") {
    content = <Tab2 />;
  } else if (activeTab === "Tab3") {
    content = <Tab3 />;
  } else if (activeTab === "Tab4") {
    content = <Tab4 />;
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
