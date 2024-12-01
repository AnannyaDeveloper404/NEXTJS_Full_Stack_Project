import React from "react";

function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  return <h1>User Details:{id}</h1>;
}

export default Page;
