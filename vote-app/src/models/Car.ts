export type Car = {
    id: number,
    firstName: string,
    lastName: string,
    address: string,
    city: string,
    birthday: number,
    email: string,
    phone: number,
    // [ x:string ]: any,
}

export type CarKeys = 'id' | 'firstName' | 'lastName' | 'address' | 'city' | 'birthday' | 'email' | 'phone';
export type NewCar = Omit<Car, 'id'>;
