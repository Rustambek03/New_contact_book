import React, { useContext, useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { contactContext } from '../contexts/ContactContext';
import LinearProgress from '@material-ui/core/LinearProgress';
import Navbar from '../Navbar/Navbar';
import { makeStyles } from '@material-ui/core/styles';


const EditContact = (props) => {

  const { saveContact, editToContact, cancelButton } = useContext(contactContext)
  const [newEditItem, setNewEditItem] = useState(editToContact)

  useEffect(() => {
    setNewEditItem(editToContact)
  }, [editToContact])

  function handleValue(e) {
    let obj = {
      ...newEditItem,
      [e.target.name]: e.target.value
    }
    setNewEditItem(obj)
  }
  


  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

  const classes = useStyles();

  return (
    <>
      <Navbar/>
      {newEditItem ?
        <Grid container justify="center" alignItems="center" style={{flexDirection: 'column'}}>
        <h1>Edit Contact</h1>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField 
              id="standard-basic" 
              label="Name"
              name="name"
              value={newEditItem.name}
              onChange={handleValue}
            />
          </form>

          <form className={classes.root} noValidate autoComplete="off">
            <TextField 
              id="standard-basic" 
              label="Surname"
              name="surname"
              value={newEditItem.surname}
              onChange={handleValue}
            />
          </form>

          <form className={classes.root} noValidate autoComplete="off">
            <TextField 
              id="standard-basic" 
              label="Number"
              name="number"
              value={newEditItem.number}
              onChange={handleValue}
            />
          </form>

          <form className={classes.root} noValidate autoComplete="off">
            <TextField 
              id="standard-basic"
              label="Address"
              name="address"
              value={newEditItem.address}
              onChange={handleValue}
            />
          </form>

          <form className={classes.root} noValidate autoComplete="off">
            <TextField 
              id="standard-basic" 
              label="Email"
              name="email"
              value={newEditItem.email}
              onChange={handleValue}
            />
          </form>

          <form className={classes.root} noValidate autoComplete="off">
            <TextField 
              id="standard-basic" 
              label="Photo URL"
              name="photo"
              value={newEditItem.photo}
              onChange={handleValue}
            />
          </form>

          <div style={{ marginTop: "30px" }}>
            <Button
              size="small"
              variant="outlined"
              color="primary"
              onClick={() => cancelButton(props.history)}
            >
              Cancel
              </Button>
            <Button
              style={{ left: "30px" }}
              variant="contained"x
              color="primary"
              size="small"
              startIcon={<SaveIcon />}
              onClick={() => saveContact(newEditItem, props.history)}
            >
              Save
              </Button>
          </div>
        </Grid>
        :
        <LinearProgress />
      }
    </>
  );
};

export default EditContact;