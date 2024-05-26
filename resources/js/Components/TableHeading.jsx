import React from "react";

const TableHeading = ({ name, children }) => {
  return (
    <th>
      <div className="px-3 py-3 flex items-center justify-between gap-1 cursor-pointer">
        {children}
      </div>
    </th>
  );
};

export default TableHeading;
