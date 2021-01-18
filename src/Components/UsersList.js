import axios from "axios";
import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";

const UsersList = () => {
  const [usersList, setUsersList] = useState([]);
  // useEffect(() => {
  //     fetch('https://jsonplaceholder.typicode.com/users').
  //     then((res)=>res.json()).
  //     then((res)=>setUsersList(res)).catch((err)=>console.log(err))

  // }, [])
  useEffect(() => {
    const getData = async () => {
      try {
        const usersArray = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        console.log(usersArray);
        setUsersList(usersArray.data);
      } catch (error) {
        console.error(error);
      }
    };
    getData()
  }, []);
  return (
    <div className="container-fluid">
      <div className="row mt-3">
        {usersList.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
    </div>
  );
};
// mt-3 means margin top 3
export default UsersList;
