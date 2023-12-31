"use client";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Edituser({ id, setEdit }) {
  const [Data, setData] = useState({
    fname: "",
    lname: "",
    phone: "",
    clg: "",
  });

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let mychnage = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(`http://localhost:8080/api/tutorials/${id}`);
    const jsonData = await response.json();
    setData(jsonData);
  };

  let musubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8080/api/tutorials/${id}`, Data).then((v) => {
      console.log(v.data);
      setEdit(v.data._id);
    });
    handleClose();
  };
  return (
    <>
      <div>
        <Button variant="contained" onClick={handleClickOpen}>
          Edit
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          maxWidth="sm"
          fullWidth
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Edit User</DialogTitle>
          <DialogContent>
            <form onSubmit={musubmit}>
              <div>
                <br />
                <TextField
                  id="outlined-basic"
                  label="Firs Name"
                  variant="outlined"
                  value={Data.fname}
                  name="fname"
                  onChange={mychnage}
                  required
                  fullWidth
                />
                <br />
                <br />
                <TextField
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  value={Data.lname}
                  name="lname"
                  onChange={mychnage}
                  required
                  fullWidth
                />
                <br />
                <br />
                <TextField
                  type="number"
                  id="outlined-basic"
                  label="Phone no"
                  value={Data.phone}
                  variant="outlined"
                  name="phone"
                  onChange={mychnage}
                  required
                  fullWidth
                />
                <br />
                <br />
                <TextField
                  id="outlined-basic"
                  label="college"
                  value={Data.clg}
                  variant="outlined"
                  name="clg"
                  onChange={mychnage}
                  required
                  fullWidth
                />
                <br />
                <br />
                <Button variant="contained" type="submit">
                  submit
                </Button>
                <br />
              </div>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>close</Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}
