import Layout from "./components/Layout/Layout.tsx";
import { Route, Routes } from "react-router";
import AddNewContact from "./containers/AddNewContact/AddNewContact.tsx";
import Contacts from './containers/Contacts/Contacts.tsx';

const App = () => {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<Contacts/>}/>
        <Route path="/contacts" element={<Contacts/>} />
        <Route path="/new-contact" element={<AddNewContact />} />
      </Routes>
    </>
  );
};

export default App;
