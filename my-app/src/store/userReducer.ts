import {userType} from "../types";
import {PayloadAction} from "@reduxjs/toolkit";

const ADD_USER = 'ADD_USER'
const DELETE_USER = 'DELETE_USER'

export const userReducer = (state: userType[] = [], action: PayloadAction<any>) => {
    switch(action.type) {
        case(ADD_USER):
            return [...state, action.payload]
        case(DELETE_USER):
            return state.filter(user => user.id !== action.payload)
        default:
            return state
    }
}

export const addUserAction = (payload: userType) => ({type: ADD_USER, payload})
export const deleteUserAction = (payload: number) => ({type: DELETE_USER, payload})