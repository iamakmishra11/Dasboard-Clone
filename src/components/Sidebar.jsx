import React from "react";

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", active: false },
    { name: "Product Management", active: true, subItems: ["Products", "Create Product", "Categories"] },
    { name: "Merchant Management", active: false },
    { name: "Lead Management", active: false },
    { name: "User Management", active: false },
    { name: "Training Management", active: false },
    { name: "Code Upload Management", active: false },
  ];

  return (
    <div className="bg-red-600 text-white w-60 h-screen p-4">
      <ul>
        {menuItems.map((item, index) => (
          <li key={index} className={`mb-2 ${item.active ? "font-bold" : ""}`}>
            {item.name}
            {item.subItems && (
              <ul className="ml-4 text-sm">
                {item.subItems.map((sub, i) => (
                  <li key={i}>{sub}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
