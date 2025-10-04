
const Contact = ({props, deleteUser}) =>{
    return (
        <div>
          
<p>{props.name}</p>
<p>{props.number}</p>

<button onClick={deleteUser}>Delete</button>

        </div>
    )
};

export default Contact;