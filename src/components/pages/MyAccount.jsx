import React, { useEffect } from "react";

function MyAccount() {
  useEffect(() => {
    console.log("mount MyAccount");
  }, []);

  return (
    <>
      <h1>Profile</h1>
      <ul>
        <li>Michel</li>
        <li>36 ans</li>
        <li>Charpentier</li>
      </ul>
    </>
  );
}

export default MyAccount;
