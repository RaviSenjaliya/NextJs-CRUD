"use client";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import { useState } from "react";

export default function AlertDialog({ setEdit }) {
  const [open, setOpen] = useState(false);
  const [Data, setData] = useState({
    fname: "",
    lname: "",
    phone: "",
    clg: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let mychnage = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };

  let musubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/api/tutorials", Data).then((v) => {
      console.log(v.data);
      setEdit(v.data._id);
    });
    handleClose();
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        New user
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">New User</DialogTitle>
        <DialogContent>
          <form onSubmit={musubmit}>
            <div>
              <br />
              <TextField
                id="outlined-basic"
                label="Firs Name"
                variant="outlined"
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
  );
}
