import { Genere, Ruoli } from "./Enum"

export interface Impiegato {
	id: number,
    name: string,
    surname: string,
    age: number,
    dateOfBirth: Date,
    address: {
        city: string,
        street: string,
        postalCode: string
    },
    role: Ruoli,
    username: string,
    profilePhotoUrl: string,
    companies: [
		{
            id: number,
            name: string,
            description: string,
            location: {
                city: string,
                street: string,
                postalCode: string
            }
        },
        {
            id: number,
            name: string,
            description: string,
            location: {
                city: string,
                street: string,
                postalCode: string
            }
        }
	],
    gender: Genere
}

