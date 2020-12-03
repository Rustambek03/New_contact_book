import React, {useReducer} from 'react';
import axios from "axios";

export const contactContext = React.createContext();

const INIT_STATE = {
    contacts: [],
    editToContact: null,
    details: {}
}

const reducer = (state=INIT_STATE, action) => {
    switch(action.type){
        case "GET_CONTACT_DATA": 
            return {...state, contacts: action.payload}
        case "EDIT_CONTACT": 
            return {...state, editToContact: action.payload}
        case "GET_DETAILS_CANTACT":
            return {...state, details: action.payload}
        default: return state
    }
} 

const ContactContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const addContact = async (newContact) => {
        await axios.post(`http://localhost:8000/Contacts`, newContact)

        getContactData()
    }

    const getContactData = async () => {
        let {data} = await axios(`http://localhost:8000/Contacts`)
        dispatch({
            type: "GET_CONTACT_DATA",
            payload: data
        })
    }

    const deleteContact = async (id) => {
        await axios.delete(`http://localhost:8000/Contacts/${id}`)
        getContactData()
    }

    const editContact = async (id, history) => {
        let { data } = await axios(`http://localhost:8000/Contacts/${id}`)
        dispatch({
            type: "EDIT_CONTACT",
            payload: data
        })
    }

    const saveContact = async (newContact, history) => {
        try{
            await axios.patch(`http://localhost:8000/Contacts/${newContact.id}`, newContact)
            console.log(history)
            history.push('/')
        }catch(error){
            history.push('/error')
        }
    }

    const cancelButton = (history) => {
        history.push('/')
    }


    const getDetailsContact = async (id) => {
        let {data} = await axios(`http://localhost:8000/Contacts/${id}`)
        dispatch({
            type: "GET_DETAILS_CANTACT",   
            payload: data
        })
    }


    return (
        <contactContext.Provider value={{
            contacts: state.contacts,
            editToContact: state.editToContact,
            details: state.details,
            addContact,
            getContactData,
            deleteContact,
            editContact,
            saveContact,
            cancelButton,
            getDetailsContact
        }}>
            {children}
        </contactContext.Provider>
    )
}

export default ContactContextProvider
