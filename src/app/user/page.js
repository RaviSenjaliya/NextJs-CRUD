"use client";
import Swal from "sweetalert2";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import AlertDialog from "../components/FormDialog";
import Edituser from "./[userid]/edituser/page";

const FetchDataComponent = () => {
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState(-1); //update karvamate

  useEffect(() => {
    fetchData();
  }, [edit]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:8080/api/tutorials");
    const jsonData = await response.json();
    setData(jsonData);
  };

  let mydelete = async (id) => {
    Swal.fire({
      title: "Do you want to Delete?",
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:8080/api/tutorials/${id}`).then((v) => {
          setEdit(v.data._id);
        });
      }
    });
  };

  return (
    <div>
      <h1>
        {/* new user */}
        <AlertDialog setEdit={setEdit} />
      </h1>
      <h1>Fetching Data Using Fetch API</h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Show-more</th>
            <th>Edit</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item.fname}</td>
              <td>
                <Link href={`/user/${item._id}`}>
                  <Button variant="contained" color="warning">
                    Read...
                  </Button>
                </Link>
              </td>
              <td>
                <Edituser id={item._id} setEdit={setEdit} />
              </td>
              <td>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => mydelete(item._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FetchDataComponent;
