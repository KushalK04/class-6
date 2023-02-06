import { useState } from "react"
import Dashboard from "./Dashboard";


export default function Survey() {

    const [name, setName] = useState('');
    const [isActiveOne, setIsActiveOne] = useState(true);
    const [isActiveTwo, setIsActiveTwo] = useState(false);  
    
    const passName = (event) => {
        if(event.key === "Enter") {
            console.log("Enter")
            setIsActiveOne(false);
            setIsActiveTwo(true);
        }
    }
    
    return (
        <div>
            <div style={{display: isActiveOne ? 'block' : 'none'}}>
                <h1>What is your name?</h1>
                <input
                   value={name}
                   onChange={event => setName(event.target.value)}
                   placeholder="Enter name"
                   onKeyDown={passName}
                   type="text"
                />
            </div>
            <div style={{display: isActiveTwo ? 'block' : 'none'}}>
                <Dashboard passName={name}/>
            </div>
        </div>
    )
}