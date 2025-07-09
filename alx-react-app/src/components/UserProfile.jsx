function USerProfile(props) {
    return (
        props.name && props.age && props.bio ? (
            <UserProfile name={props.name} age={props.age} bio={props.bio} />
        ) : (
            <p>Please provide valid user information.</p>
        )
    )
}

 const UserProfile = (props) => {
   return (
     <div>
       <h2>{props.name}</h2>
       <p>Age: {props.age}</p>
       <p>Bio: {props.bio}</p>
     </div>
   );
 };

export default USerProfile;