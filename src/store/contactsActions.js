export const addContact = (contact) => {
    return (dispatch, state, {getFirestore}) => {
        getFirestore()
        .collection('contacts')
        .add(contact)
        .then((doc) =>  { 
            dispatch({
                type: 'ADD_CONTACT',
                payload: contact,
            });

        });
    };
};

export const deleteContact = (contact_id) => {
    return {
        type: 'DELETE_CONTACT',
        payload: contact_id
    }
}

export const editContact = (contact_id, updated_info) => {
    return {
        type: 'EDIT_CONTACT',
        contact_id: contact_id,
        updated_info: updated_info
    }
}

