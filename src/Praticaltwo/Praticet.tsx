import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const Praticet = () => {
  const [userInfo, setUserInfo] = useState([]);
  console.log(userInfo);
  useEffect(() => {
    const fetchdata = async () => {
      const { data } = await axios.get("http://localhost:5000/content");
      setUserInfo(data);
    };
    fetchdata();
  }, []);
  const deleteHandeler = (_id: any) => {
    // console.log ("Hello")
    axios
      .delete(`http://localhost:5000/content/delete/${_id}`)
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
      {" "}
      <table>
        <thead>
          <tr>
            <th>title</th>
            <th>body</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {userInfo?.map((items: any) => (
            <>
              <tr>
                <td>{items?.title}</td>
                <td>{items?.body}</td>

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

export default Praticet;
