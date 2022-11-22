type addressType = {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
        lat: string,
        lng: string
    }
}

type companyType = {
    name: string,
    catchPhrase: string,
    bs: string
}

type userType = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: addressType,
    phone: string,
    website: string,
    company: companyType
}

export const fetchUserData = (id: string): Promise<userType> => {
    return fetch(
        `https://jsonplaceholder.typicode.com/user/${id}`
    ).then((response) => response.json());
}