import React, { createContext, useContext } from "react";

type TabContextType = {
  activeTab: string;
  setActiveTab: (id: string) => void;
};

type TabProps = {
  children: React.ReactNode;
};

type Button = {
  id: string;
  children: React.ReactNode;
};
const TabContext = createContext<TabContextType | null>(null);
const Tab = ({ children }: TabProps) => {
  const [activeTab, setActiveTab] = React.useState<string>("");
  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="w-full rounded-md border p-2 border-white bg-slate-800">
        {children}
      </div>
    </TabContext.Provider>
  );
};

const Button = ({ id, children }: Button) => {
  const context = useContext(TabContext);
  if (!context) return null;
  const { activeTab, setActiveTab } = context;
  const handleClick = () => {
    setActiveTab(activeTab === id ? "" : id);
  };
  return (
    <div
      onClick={handleClick}
      className={`${
        activeTab === id ? "bg-blue-500" : "bg-gray-500"
      } p-2 rounded-md cursor-pointer`}
    >
      {children}
    </div>
  );
};

Tab.Button = Button;
export default Tab;
