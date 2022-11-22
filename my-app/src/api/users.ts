import {userType} from "../types";

export const fetchUserData = (id: number): Promise<userType> => {
    return fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
    ).then((response) => response.json());
}