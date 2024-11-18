import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { contactsList, fetchContacts } from './contactsSlice.ts';
import { useEffect } from 'react';
import { Container } from '@mui/material';


const Contacts = () => {

  const dispatch = useAppDispatch();
  const contactShow = useAppSelector(contactsList);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = Object.keys(contactShow).map((contactKey) => {
    return {
      ...contactShow[contactKey],
      id: contactKey
    };
  });

  return (
    <Container maxWidth="xl">
      <div className="w-50 mx-auto">
        {contacts.map((contact) => (
          <div key={contact.id} className="border border-gray-200 shadow-sm mb-2 d-flex">
            <img style={{maxWidth: 200, maxHeight: 200}} src={contact.photoUrl} alt={contact.name} />
            <h1 className="mx-auto">{contact.name}</h1>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Contacts;