import * as React from "react";

export default function Header() {
  return (
    <div style={{ backgroundColor: "skyblue", height: 45 }}>
      <div>
        <div
          style={{
            fontSize: 20,
            color: "white",
            fontFamily: "sans-serif",
            marginLeft: 40
          }}
        >
          Comments about course
        </div>
      </div>
    </div>
  );
}
