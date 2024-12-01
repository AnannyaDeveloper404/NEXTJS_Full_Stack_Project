import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="text-3xl">DASHBOARD</div>
      {children}
    </>
  );
}

export default Layout;
