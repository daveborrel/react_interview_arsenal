import { useState } from "react";

export default function FunctionalComponent() {
    const [age, setAge] = useState(28)
    const [name, setName] = useState("Dave")

    function incrementAge() {
        setAge(age + 1)
    }

    return (
        <div>
            <h1>Hi! My name is {name}</h1>
            <button onClick={incrementAge}>Increase my age</button>
            <p>{age}</p>
        </div>
    )
}