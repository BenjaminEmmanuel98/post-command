import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const FecTchandDeleTeDaTa = () => {
  const [userInfo, setUserInfo] = useState([]);
  console.log(userInfo);
  useEffect(() => {
    const fetchdata = async () => {
      const { data } = await axios.get(
        "https://fullstack-student-backend.onrender.com/api/auth"
      );
      setUserInfo(data);
    };
    fetchdata();
  }, []);
  const deleteHandeler = (_id: any) => {
    // console.log ("Hello")
    axios
      .delete(
        `https://fullstack-student-backend.onrender.com/api/auth/delete/${_id}`
      )
      .then(() => {
        // alert("Delete successful");
        window.location.reload();
      })
      .catch((err) => {
        alert("Request Not Successful");
      });
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>EmailAddress</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {userInfo?.map((items: any) => (
            <>
              <tr>
                <td>{items?.firstName}</td>
                <td>{items?.lastName}</td>
                <td>{items?.email}</td>
                <td>
                  <FaEdit style={{ color: "green" }} />
                </td>
                <td
                  style={{ cursor: "pointer" }}
                  onClick={() => deleteHandeler(items?._id)}
                >
                  <MdDeleteForever style={{ color: "red" }} />
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FecTchandDeleTeDaTa;
