import React from "react";


function AppLayout({ children, page }) {
  return (
    //wrap
      <div id="content" className={page}>{children}</div>
  );
}

export default AppLayout;
