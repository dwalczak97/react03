
const Contact = ({name, number, id, deleteUser}) =>{
    return (
        <div>
          
<p>{name}</p>
<p>{number}</p>

<button onClick={()=>deleteUser(id)}>Delete</button>

        </div>
    )
};

export default Contact;