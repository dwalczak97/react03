import Contact from "./Contact.jsx"

const ContactList = ({users}) => {
return (
  <>
 {users.map(user => (
<Contact key={user.id}
         name={user.name}
         number={user.number}/>
        ))}

</>
);
};


export default ContactList ;
