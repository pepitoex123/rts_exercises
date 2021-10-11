import React,{Component} from "react";


interface User {
    name: string;
    age: number;
}

interface UserSearchProps {
    users: {
        name: string;
        age: number;
    }[]
}

interface UserSearchState {
    name: string;
    user: User | undefined;
}

class UserSearch extends Component<UserSearchProps>{
    state: UserSearchState = {
        name: "",
        user: undefined
    };

    onClick = () => {
        const foundUser = this.props.users.find((user) => {
            return user.name === this.state.name
        })
        this.setState({user: foundUser});
    }

    render(){
        return(
            <div>
                User Search
                <input value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}/>
                <button onClick={this.onClick}>Find User</button>
                <div>
                    {this.state.user ? <div><p>{this.state.user.name}</p><p>{this.state.user.age}</p></div> : <p>User Not Found</p>}
                </div>
            </div>
        )
    }
}

export default UserSearch;