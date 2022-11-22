import {userType} from "../types";

export const fetchUserData = (id: string): Promise<userType> => {
    return fetch(
        `https://jsonplaceholder.typicode.com/user/${id}`
    ).then((response) => response.json());
}