import React from "react";

export default function ConctactScree({ classPanel, dataXpos, dataYpos }) {
  return (
    <div className={classPanel} data-x-pos={dataXpos} data-y-pos={dataYpos}>
      <h1>Screen contact</h1>
    </div>
  );
}
