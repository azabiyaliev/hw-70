import Layout from "./components/Layout/Layout.tsx";
import { Route, Routes } from "react-router";
import AddNewContact from "./AddNewContact/AddNewContact.tsx";

const App = () => {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" />
        <Route path="/new-contact" element={<AddNewContact />} />
      </Routes>
    </>
  );
};

export default App;
