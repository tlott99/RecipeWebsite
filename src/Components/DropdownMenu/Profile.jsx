import React from "react";

const Profile = () => {

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    
      <div className="flex">
        <img src="" alt="" height="50px" width="50px" />
        <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
        </div>
      </div>
    )
  
};

export default Profile;