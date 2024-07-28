import React, { useState } from 'react';

const Tabs = ({ items }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="tab-headers">
        {items.map((item, index) => (
          <button
            key={index}
            className={index === activeTab ? 'active' : ''}
            onClick={() => handleTabClick(index)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {items[activeTab] && items[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;