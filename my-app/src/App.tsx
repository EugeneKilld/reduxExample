import React, {useState} from 'react';
import './App.css';
import { Button } from "@consta/uikit/Button";
import {addUserAction} from "./store/userReducer";
import {fetchUserData} from "./api";
import {useAppDispatch, useAppSelector} from "./hooks/hooks";

function App() {
    const [counter, setCounter] = useState(0)
    const users = useAppSelector(state => state)
    const dispatch = useAppDispatch()

    console.log(users)

    const onClick = () => {
        setCounter(counter + 1)
        fetchUserData(counter+1).then(response => dispatch(addUserAction(response)))
    }

    return (
        <div className="center">
            <Button label="добавить пользователя" onClick={onClick}/>
            <div>{counter}</div>
            {users.map(user => (
                <div>
                    {user.name}
                </div>
            ))}
        </div>
    )
}

export default App;
