import React, { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import Tab1 from "./components/Tab1";
import Tab2 from "./components/Tab2";
import Tab3 from "./components/Tab3";
import Tab4 from "./components/Tab4";

import "./App.css"; // import the provided CSS file
import Travis from "./components/Travis";

function App() {
  const [activeTab, setActiveTab] = useState("Tab1");

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  let content;
  if (activeTab === "Tab1") {
    content = <Tab1 />;
  } else if (activeTab === "Tab2") {
    content = <Tab2 />;
  } else if (activeTab === "Tab3") {
    content = <Tab3 />;
  } else if (activeTab === "Tab4") {
    content = <Tab4 />;
  }

  return (
    <div className="App">
      <Travis />
      <NavigationBar onTabChange={handleTabChange} activeTab={activeTab} />
      <div className="TabContent">{content}</div>
      
    </div>
  );
}

export default App;
