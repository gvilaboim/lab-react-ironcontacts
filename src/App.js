import logo from './logo.svg';
import './App.css';
import { useState ,useEffect } from 'react'
import Contacts  from './contacts.json'
import ContactsCard from './components/ContactsCard'
function App() {
  let only5= Contacts.slice(0,5) ;
  const [contacts , setContacts ] = useState(only5);
  console.log(contacts)
//🏆

function Add() {
  if(Contacts.length > 0) {
  let random = Math.floor(Math.random() * (Contacts.length - only5.length + 1)) + only5.length
  console.log(Contacts.length)
  let newContact = Contacts.splice(random, 1)[0];
  let updatedContacts = [...contacts, newContact];
  setContacts(updatedContacts);
}
}

function sortByName() {
  const sorted = contacts.sort((a, b) => a.name.localeCompare(b.name));
  setContacts([...sorted]);
}

function sortByPopularity() {
  const sortedByPopularity = contacts.sort((a, b) => b.popularity - a.popularity);
  setContacts([...sortedByPopularity]);
}

function deleteContact(id) {
  const filteredContacts = contacts.filter((contact) => contact.id !== id);
  setContacts([...filteredContacts]);
}


  return (
<div className="App">
<button onClick={Add}> Add New Contact</button>
<button onClick={sortByPopularity}> Sort by Popularity</button>
<button onClick={sortByName}> Sort by Name</button>


<table>
  <thead>
    <tr>
      <th>Picture</th>
      <th>Name</th>
      <th>Popularity</th>
      <th>Won Oscar</th>
      <th>Won Emmy</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
     {contacts.map(Element =>  <ContactsCard contact={Element}  deleteContact = {deleteContact} />)}
        </tbody>
</table>

    </div>
  );
}

export default App;
