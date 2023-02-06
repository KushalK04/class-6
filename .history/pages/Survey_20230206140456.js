import { useState } from "react"


export default function Survey() {

    const [name, setName] = useState('');
    const [isActiveOne, setIsActiveOne] = useState(true);
    const [isActiveTwo, setIsActiveTwo] = useState(false);   
    
    return (
        <div>
            <div>
                <h1>What is your name?</h1>
                <input
                   value={name}
                   onChange={event => setName(event.target.value)}
                   placeholder="Enter name"
                   onKeyDown={passName}
                   type="text"
                />
            </div>
        </div>
    )
}