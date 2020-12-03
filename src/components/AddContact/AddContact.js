import React, { useContext, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import {contactContext} from "../contexts/ContactContext"


const AddContact = () => {

  const {addContact} = useContext(contactContext)

  let [name, setName] = useState(''); 
  let [surname, setSurname] = useState('');
  let [number, setNumber] = useState(''); 
  let [address, setAddress] = useState('');
  let [email, setEmail] = useState('');
  let [photo, setPhoto] = useState('');

  function handleClick() {
    let newObj = {
      name: name,
      surname: surname,
      number: number,
      address: address,
      email: email,
      photo: photo,
      id: Date.now()
    };
    if(!name || !surname || !number){
      return alert("Заполните все поля!!!")
    }
    addContact(newObj);
    setName('');
    setSurname('');
    setNumber('');
    setAddress('');
    setEmail('');
    setPhoto('');
  }


  return (
    <Grid >
      <Grid>
          <div style={{marginLeft: "250px", transition: "0.3s"}}>
            <h1>Add Contact</h1>

            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
              </Grid>
              <Grid item>
                <TextField value={name} onChange={(e) => setName(e.target.value)} label="Name" />
              </Grid>
            </Grid>

            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
              </Grid>
              <Grid item>
                <TextField value={surname} onChange={(e) => setSurname(e.target.value)} label="Surname" />
              </Grid>
            </Grid>

            <Grid container spacing={1} alignItems="flex-end" >
              <Grid item>
              </Grid>
              <Grid item>
                <TextField type="text" value={number} onChange={(e) => setNumber(e.target.value)} label="Number" />
              </Grid>
            </Grid>

            <Grid container spacing={1} alignItems="flex-end" >
              <Grid item>
              </Grid>
              <Grid item>
                <TextField type="text" value={address} onChange={(e) => setAddress(e.target.value)} label="Address" />
              </Grid>
            </Grid>

            <Grid container spacing={1} alignItems="flex-end" >
              <Grid item>
              </Grid>
              <Grid item>
                <TextField type="text" value={email} onChange={(e) => setEmail(e.target.value)} label="Email" />
              </Grid>
            </Grid>

            <Grid container spacing={1} alignItems="flex-end" >
              <Grid item>
              </Grid>
              <Grid item>
                <TextField type="text" value={photo} onChange={(e) => setPhoto(e.target.value)} label="Photo URL" />
              </Grid>
            </Grid> 

          <Button 
            style={{marginTop: '15px', left: '60px'}} 
            variant="contained" 
            color="primary" 
            onClick={handleClick}>
              Add
          </Button>
          </div>
      </Grid>
    </Grid>
  );
};

export default AddContact;