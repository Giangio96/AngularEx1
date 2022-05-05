import { Genere, Ruoli } from "./Enum";
import { Impiegato } from "./Impiegato";

export class User implements Impiegato {
    id: number;
    name: string;
    surname: string;
    age: number;
    dateOfBirth: Date;
    address: {
        city: string,
        street: string,
        postalCode: string
    };
    role: Ruoli;
    username: string;
    profilePhotoUrl: string;
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
	];
    gender: Genere

    
    constructor(id: number, name: string, surname: string, age: number, dateOfBirth: Date, 
        role: Ruoli, username: string, profilePhotoUrl: string, address: any,companies: any, gender: Genere)
    {
        this.id = id
        this.name = name
        this.surname = surname
        this.age = age
        this.dateOfBirth = dateOfBirth
        this.role = role
        this.username = username
        this.profilePhotoUrl = profilePhotoUrl
        this.companies = companies
        this.address = address
        this.gender = gender
    }
}
