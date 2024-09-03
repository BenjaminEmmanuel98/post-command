import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetailsScreen = () => {
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState<any>({});
  console.log(userInfo);
  useEffect(() => {
    const fetchdata = async () => {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/Users/${id}`
      );
      setUserInfo(data);
    };
    fetchdata();
  }, []);
  return (
    <div>
      <p>{userInfo?.id}</p>
      <p>{userInfo?.name}</p>
      <p>{userInfo?.email}</p>
    </div>
  );
};

export default UserDetailsScreen;
