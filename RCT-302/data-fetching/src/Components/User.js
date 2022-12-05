const User = ({user}) => {
    return(
        <div className="user">
            <h4 className="userTitle">Name: {user.name}</h4>
            <span>Address: {`${user.address.suite}, ${user.address.street}, ${user.address.city}`}</span><br/>
            <span>E-mail: {user.email}</span><br/>
            <span>Website: {user.website}</span>
        </div>
    )
}

export default User;