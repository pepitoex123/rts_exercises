import ReactDOM from "react-dom";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";
import EventComponent from "./events/EventComponent";

const App = () => {
    return (<div>
        <h3>Example of Guest List</h3>
        <GuestList/>
        <h3>Example of User Search</h3>
        <UserSearch/>
        <h3>Example of Event</h3>
        <EventComponent/>
    </div>)
}

ReactDOM.render(<App/>,document.querySelector("#root"))