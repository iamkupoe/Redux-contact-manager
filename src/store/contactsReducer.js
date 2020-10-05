import { v4 as uuid } from 'uuid';

const initialState = {
  contacts: [],  
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      const newContact = {
        id: uuid(),
        name: action.payload.name,
        email: action.payload.email,
        number: action.payload.number
      };
      return { ...state, contacts: [...state.contacts, newContact] };
    case "DELETE_CONTACT":
      const filteredContacts = state.contacts.filter(contact => contact.id !== action.payload);
      return {...state, contacts: filteredContacts}
    case "EDIT_CONTACT":
      const updatedContactsInfo = state.contacts.map(contact => {
        if (contact.id === action.contact_id) {
          return {...contact, ...action.updated_info}
        } else {
          return contact;
        }
      });
      return {...state, contacts: updatedContactsInfo}
      case "SET_ALL_CONTACTS":
        return {contacts: action.payload};
    default:
      return state;
  }
};

export default contactsReducer;