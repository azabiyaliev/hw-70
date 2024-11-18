import { Button, Container, TextField } from "@mui/material";
import { NavLink, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { IContactForm } from '../../types';
import axiosAPI from '../../axiosAPI.ts';
import Box from '@mui/material/Box';

const initialForm = {
  name: "",
  phone: "",
  email: "",
  photoUrl: "",
};

const AddNewContact = () => {
  const [form, setForm] = useState<IContactForm>({ ...initialForm });
  const navigate = useNavigate();

  useEffect(() => {
    setForm((prevState) => ({
      ...prevState,
    }));
  },[]);

  const onChangeField = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitForm = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axiosAPI.post("contacts.json", { ...form });
      navigate("/contacts");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form onSubmit={submitForm} className="d-flex flex-column justify-content-between">
      <Container maxWidth="xl">
        <h1>Add new contact</h1>
        <Box
            sx={{
              py: 3,
              display: 'grid',
              gap: 2,
              flexWrap: 'wrap',
              width: '100%',
            }}
          >
          <TextField
              sx={{me: 'auto', maxWidth: 400}}
              type="text"
              id="outlined-basic"
              label="Name"
              name="name"
              variant="outlined"
              onChange={onChangeField}
            />
            <TextField
              sx={{me: 'auto', maxWidth: 400}}
              type="text"
              id="outlined-basic"
              label="Phone"
              name="phone"
              variant="outlined"
              onChange={onChangeField}
            />
            <TextField
              sx={{me: 'auto', maxWidth: 400}}
              type="text"
              id="outlined-basic"
              label="Email"
              name="email"
              variant="outlined"
              onChange={onChangeField}
            />
            <TextField
              sx={{me: 'auto', maxWidth: 400}}
              type="url"
              id="outlined-basic"
              label="Photo"
              name="photoUrl"
              variant="outlined"
              onChange={onChangeField}
            />
            <div>
              <p>Photo preview:</p>
              <img style={{maxWidth: 200, maxHeight: 200}} alt={form.photoUrl} src={form.photoUrl}/>
            </div>
            <div
              style={{maxWidth: 400}}
              className="d-flex flex-row align-items-center justify-content-between"
            >
              <Button
                type="submit"
                sx={{me: 'auto', width: '8%'}}
                color="inherit"
                variant="outlined"
              >
                Save
              </Button>
              <Button
                type="button"
                sx={{me: 'auto', width: '50%'}}
                color="inherit"
                variant="outlined"
                to="/contacts"
                component={NavLink}
              >
                Back to contacts
              </Button>
            </div>
          </Box>
          </Container>
        </form>
  );
};

export default AddNewContact;
