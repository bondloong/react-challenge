import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [contacts, setContact] = useState([
    { name: "John", phone: "888-999-222", email: "John@gmail" },
  ]);
  const [appointments, setAppointment] = useState([
    { title: "John", contact: "888-999-222", date: "John@gmail", time: "time" },
  ]);
  /*
  Define state variables for 
  contacts and appointments 
  */

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */
  const implementContact = (name, phone, email) => {
    setContact((predContacts) => [...predContacts, { name, phone, email }]);
  };

  const implementAppointments = (title, contact, date, time) => {
    console.log("hi");
    setAppointment((predAppointments) => [
      ...predAppointments,
      { title, contact, date, time },
    ]);
  };

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            {/* Add props to ContactsPage */}
            <ContactsPage contacts={contacts} addContact={implementContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage
              contacts={contacts}
              appointments={appointments}
              implementAppointments={implementAppointments}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
