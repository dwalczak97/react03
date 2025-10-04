 import { Formik } from 'formik'
// import * as yup from 'yup'
import './App.css'
import { useState } from "react"
import  ContactList  from './components/contactList.jsx'
import SearchBox from './components/searchBox.jsx'


const initialUsers= [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
];

function App() {
const [users, setUsers] = useState(initialUsers);
const [filter, setFilter] = useState("");

const deleteUser = (id) => {
setUsers((prev) => prev.filter((user) => user.id !== id));
};

const handleFilterChange = (e) => {
  setFilter(e.target.value)
}

const visibleUser = users.filter((user) =>
user.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
)

  return (
    <>
<div>
  <h1>Phonebook</h1>
  {/* <ContactForm /> */}
  <SearchBox handleFilterChange={handleFilterChange} value={filter}/>
  
  <ContactList users={visibleUser} deleteUser={deleteUser}/>
</div>

    </>
  )
}

export default App
