import React, { useState } from "react";

const ProductTable = () => {
  const [products, setProducts] = useState([
    {  image: "💰", name: "Personal Loan", category: "Personal Loan", commissionType: "VARIABLE", commissionValue: "5%", label: "Popular", status: true },
    {  image: "🏠", name: "Home Loan", category: "Home Loan", commissionType: "VARIABLE", commissionValue: "7%", label: "", status: true },
    { image: "💼",name: "Business Loan", category: "Business Loan", commissionType: "VARIABLE", commissionValue: "2%", label: "", status: true },
    { image: "💳", name: "Credit Card", category: "Credit Card", commissionType: "FIXED", commissionValue: "₹150", label: "", status: true },
    { image: "📱", name: "ABCD app", category: "Application", commissionType: "FIXED", commissionValue: "₹50", label: "Earn more", status: true },
    { image: "📱",name: "ABCD app test", category: "Application", commissionType: "VARIABLE", commissionValue: "3%", label: "AECD", status: false },
  ]);

  const toggleStatus = (index) => {
    const updatedProducts = [...products];
    updatedProducts[index].status = !updatedProducts[index].status;
    setProducts(updatedProducts);
  };

  return (
    <div className="p-4 w-full">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold"></h1>
        <div>
          <button className="bg-red-500 text-white px-4 py-1 rounded mr-2"> Refresh</button>
          <button className="bg-red-500 text-white px-4 py-1 rounded">Add Product</button>
        </div>
      </div>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-200 p-2">Image</th>
            <th className="border border-gray-200 p-2">Name</th>
            <th className="border border-gray-200 p-2">Category</th>
            <th className="border border-gray-200 p-2">Commission Type</th>
            <th className="border border-gray-200 p-2">Commission Value</th>
            <th className="border border-gray-200 p-2">Label Tag</th>
            <th className="border border-gray-200 p-2">Status</th>
            <th className="border border-gray-200 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td className="border border-gray-200 p-2">{product.image}</td>
              <td className="border border-gray-200 p-2">{product.name}</td>
              <td className="border border-gray-200 p-2">{product.category}</td>
              <td className="border border-gray-200 p-2">{product.commissionType}</td>
              <td className="border border-gray-200 p-2">{product.commissionValue}</td>
              <td className="border border-gray-200 p-2">{product.label}</td>
              <td className="border border-gray-200 p-2">
                <button
                  className={`relative inline-block w-24 h-6 rounded-full transition-colors duration-300 ${product.status ? "bg-red-500" : "bg-gray-500"}`}
                  onClick={() => toggleStatus(index)}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 h-5 w-5 bg-white rounded-full transition-transform duration-300 transform ${product.status ? "translate-x-16" : "translate-x-0"}`}
                  ></span>
                  <span
                    className={`absolute inset-0 flex items-center justify-start pl-7 text-white text-xs font-bold transition-opacity duration-300 ${product.status ? "opacity-100" : "opacity-0"}`}
                  >
                    Active
                  </span>
                  <span
                    className={`absolute inset-0 flex items-center justify-end pr-7 text-white text-xs font-bold transition-opacity duration-300 ${product.status ? "opacity-0" : "opacity-100"}`}
                  >
                    Inactive
                  </span>
                </button>
              </td>
              <td className="border border-gray-200 p-2">✏️</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
