import React from "react";


const LogoutButton = () => {
  const { logout } = ""

  return (
    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
  );
};

export default LogoutButton;