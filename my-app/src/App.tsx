import React, {useState} from 'react';
import './App.css';
import { Button } from "@consta/uikit/Button";

function App() {
    const [counter, setCounter] = useState(1)

    const onClick = () => {
        setCounter(counter + 1);
    };

    return (
        <div className="center">
            <Button label="добавить пользователя" onClick={onClick}/>
            <div>{counter}</div>
        </div>
    )
}

export default App;
