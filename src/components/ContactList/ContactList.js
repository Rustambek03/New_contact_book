import React, {useContext, useEffect} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {contactContext} from "../contexts/ContactContext";
import { Link } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
import MenuIcon from "@material-ui/icons/Menu";
import Fab from '@material-ui/core/Fab';
import Avatar from '@material-ui/core/Avatar';




const ContactList = () => {
  const {
      contacts, 
      deleteContact, 
      getContactData,
      editContact,
      getDetailsContact
    } = useContext(contactContext)
  
  useEffect(() => {
    getContactData()
  }, [] )



  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(20),
        height: theme.spacing(20),
      },
    }
  }));


  const classes = useStyles()
  
  return (
    <Grid style={{width: "60%"}}>
      <Grid>
        <ul style={{display: "flex", flexWrap: "wrap", listStyleType: "none"}}>
          {contacts.map((item) => (
            <Box  style={{display: "flex", alignItems: 'flex-end'}} key={item.id}  className={classes.root}>
              <Paper elevation={3} >
                <div style={{ marginTop: '7px', display: "flex", justifyContent: "center"}}>
                  <Avatar alt={item.name} src={item.photo} />
                </div>
                  <li>
                    {item.name} <br/> {item.surname} <br/> {item.number} <br/>
                    <div style={{marginTop: '7px', display: "flex", justifyContent: "space-around"}}>
                      <Tooltip title="Delete">
                        <Fab size="small" color="primary" onClick={() => deleteContact(item.id)}>
                          <DeleteIcon />
                        </Fab>
                      </Tooltip>
                      <Tooltip title="Details">
                        <Link to="/contactDetails">
                          <Fab size="small" color="primary"  onClick={() => getDetailsContact(item.id)}>
                            <MenuIcon/>
                          </Fab>
                        </Link>
                      </Tooltip>
                      <Tooltip title="Edit">
                        <Link to="/editContact">
                          <Fab size="small" color="primary" onClick={() => editContact(item.id)}>
                            <EditIcon />
                          </Fab>
                        </Link>
                      </Tooltip>
                    </div>
                  </li>
              </Paper>
            </Box>
          ))} 
        </ul>
      </Grid>
    </Grid>
  ); 
}; 

export default ContactList;
