import React from 'react';
import AddContact from '../AddContact/AddContact';
import ContactList from '../ContactList/ContactList';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <div  style={{display: "flex"}}>
                <AddContact/>
                <ContactList/>
            </div>
        </div>
    );
};

export default Home;