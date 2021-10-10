import { useState } from "react";

const users = [
    {name: "Sarah", age: 20},
    {name: "Alex", age: 20},
    {name: "Mark", age: 20}
]

const UserSearch: React.FC = () => {
    const [name,setName] = useState("");
    const [user,setUser] = useState<{name: string,age: number} | undefined>();

    const onClick = () => {
        const foundUser = users.find((user) => {
            return user.name === name;
        })
        console.log(foundUser);
        setUser(foundUser);
    }

    return <div>
        User Search
        <input value={name} onChange={(e) => setName(name)}/>
        <button onClick={onClick}>Find User</button>
        <div>
            {user ? <div><p>{user.name}</p><p>{user.age}</p></div> : <p>User Not Found</p>}
        </div>
    </div>
}

export default UserSearch;