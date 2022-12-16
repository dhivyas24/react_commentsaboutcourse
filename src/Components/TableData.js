import React from "react";

function TableData({ data }) {
  return (
    <div>
      {data &&
        data.map((item, id) => (
          <div key={item.id} className="boxin1">
            <div
              align="left"
              style={{ fontSize: 25, color: "black", fontWeight: "bold" }}
            >
              {item.name.value}
            </div>
            <div align="left" style={{ fontSize: 20 }}>
              {item.comment.value}
            </div>
          </div>
        ))}
    </div>
  );
}

export default TableData;
