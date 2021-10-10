import {ChildAsFC} from "./Child";

const Parent = () => {
    return <ChildAsFC color={"brown"} onClick={() => console.log("Howdy")}>
        Howdy
    </ChildAsFC>
}

export default Parent;