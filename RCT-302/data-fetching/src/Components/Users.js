import User from "./User"

const Users = ({users}) => {
    let data = users.map(user=>{
        return(
            <User user={user} key={user.id}/>
        )
    })
    return(
        <div className="usersContainer">
            {data}
        </div>
    )
}

export default Users;