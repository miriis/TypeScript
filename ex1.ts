// Definire, attraverso interfaces e enumerations, il seguente oggetto
enum Role {staff, student, manager, admin};
enum Gender {male, female, other};

const obj:userInterface = {
	id: 3487,
    name: 'Mario',
    surname: 'Rossi',
    age: 30,
    dateOfBirth: new Date (14/12/1995),
    address: {
        city: 'Roma',
        street: 'Via roma 10',
        postalCode: 0o100,
    },
    role: Role.staff, // Ruoli possibili: 'staff', 'student', 'manager', 'admin'
    username: 'MarioRossi80',
    profilePhotoUrl: 'https://bit.ly/3yRngEP',
    companies: [
		{
            id: 148979,
            name: 'Develhope',
            description: 'La migliore',
            location: {
                city: 'Palermo',
                street: 'Via Libertà 58',
                postalCode: 90139
            }
        },
        {
            id: 123123,
            name: 'Apple',
            description: 'E insomma...',
            location: {
                city: 'Cupertino',
                street: 'One Apple Park Way',
                postalCode: 95014
            }
        }
	],
    gender: Gender.male // Generi possibili: 'male', 'female', 'other'
}

interface userInterface {
    id: number;
    name: string;
    surname: string;
    age: number;
    dateOfBirth: Date;
    address: Address;
    role: Role;
    username: string | number;
    profilePhotoUrl: string;
    companies: Companies[];
    gender: Gender;
}

interface Address {
    city: string;
    street: string | number;
    postalCode: number;
}

interface Companies {
    id: number,
    name: string;
    description: string;
    location: Address;
}

// Creare una classe che implementi l'interfaccia dell'esercizio precedente ed esponga un metodo che restituisca il fullName

class User implements userInterface {
    id: number;
    name: string;
    surname: string;
    age: number;
    dateOfBirth: Date;
    address: Address;
    role: Role;
    username: string | number;
    profilePhotoUrl: string;
    companies: Companies[];
    gender: Gender;

    // metodo 1
    /* get fullName():string {
        return `$(this.name) $(this.surname)`;
    } */

    // metodo 2
    constructor (name: string, surname: string) {
        this.name= name;
        this.surname= surname;
    }
    fullName() {
        return `$(this.name) $(this.surname)`;
    }
}