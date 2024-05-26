import React from "react";
import { MdOutlineArrowDropUp, MdOutlineArrowDropDown } from "react-icons/md";

const TableHeading = ({
  name,
  sortable = true,
  sort_field = null,
  sort_direction = null,
  sortChanged = () => {},
  children,
}) => {
  return (
    <th onClick={(e) => sortChanged(name)}>
      <div className="px-3 py-3 flex items-center justify-between gap-1 cursor-pointer">
        {children}
        {sortable && (
          <div>
            <MdOutlineArrowDropUp
              className={
                "w-4 " +
                (sort_field === name && sort_direction === "asc"
                  ? "text-green-500"
                  : "")
              }
              size={20}
            />
            <MdOutlineArrowDropDown
              className={
                "w-4 -mt-2" +
                (sort_field === name && sort_direction === "desc"
                  ? "text-green-500"
                  : "")
              }
              size={20}
            />
          </div>
        )}
      </div>
    </th>
  );
};

export default TableHeading;
