import React, { useContext} from 'react';
import { contactContext } from '../contexts/ContactContext';
import Navbar from '../Navbar/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { Fab } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const ContactDetails = () => {

    const {details, deleteContact, editContact} = useContext(contactContext);


    const useStyles = makeStyles({
        root: {
          maxWidth: 450
        },
    });

    const classes = useStyles();

    let AltImg = "https://icons.iconarchive.com/icons/graphicloads/100-flat-2/256/contacts-icon.png"

    return (
        <div>
            <Navbar/>
            <div style={{marginTop: '40px' ,display: 'flex', justifyContent: 'center'}}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt={AltImg}
                            height="250"
                            image={details.photo}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {details.name} {details.surname}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Email: {details.email} <br/> Address: {details.address} <br/> Number: {details.number}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Link to="/">
                            <Fab size="small" color="primary" onClick={() => deleteContact(details.id)}>
                                <DeleteIcon/>
                            </Fab>
                        </Link>
                        <Link to="/editContact">
                            <Fab size="small" color="primary"  onClick={() => editContact(details.id)}>
                                <EditIcon />
                            </Fab>
                        </Link>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
};

export default ContactDetails;