import React, {useState} from 'react';
import './App.css';
import { Button } from "@consta/uikit/Button";
import {addUserAction, deleteUserAction} from "./store/userReducer";
import {fetchUserData} from "./api";
import {useAppDispatch, useAppSelector} from "./hooks/hooks";

function App() {
    const [counter, setCounter] = useState(0)
    const users = useAppSelector(state => state)
    const dispatch = useAppDispatch()

    const onClick = () => {
        setCounter(counter + 1)
        fetchUserData(counter+1).then(response => dispatch(addUserAction(response)))
    }

    const removeUser = (id: number) => {
        dispatch(deleteUserAction(id))
    }

    return (
        <div className="center">
            <Button label="добавить пользователя" onClick={onClick}/>
            <div>{counter}</div>
            {users.map(user => (
                <div onClick={() => removeUser(user.id)}>
                    {user.name}
                </div>
            ))}
        </div>
    )
}

export default App;
