import React from "react";
import UsersList from "../UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Sean Shinyface",
      image:
        "https://images.pexels.com/photos/3695801/pexels-photo-3695801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
