import ReactDOM from "react-dom";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";

const App = () => {
    return (<div>
        <h3>Example of Guest List</h3>
        <GuestList/>
        <h3>Example of User Search</h3>
        <UserSearch/>
    </div>)
}

ReactDOM.render(<App/>,document.querySelector("#root"))