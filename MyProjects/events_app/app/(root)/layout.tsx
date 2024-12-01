import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="text-3xl">NAVBAR</div>
      {children}
    </>
  );
}

export default Layout;
