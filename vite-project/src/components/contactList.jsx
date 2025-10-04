import Contact from "./Contact.jsx"

const ContactList = ({users, deleteUser}) => {
return (
  <>
 {users.map(user => (
<Contact key={user.id}
        id={user.id}
        name={user.name}
        number={user.number}
        deleteUser={deleteUser}/>
        ))}

</>
);
};


export default ContactList ;
