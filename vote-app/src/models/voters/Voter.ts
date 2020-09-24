export type Voter = {
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

export type VoterKeys = 'id' | 'firstName' | 'lastName' | 'address' | 'city' | 'birthday' | 'email' | 'phone';
export type NewVoter = Omit<Voter, 'id'>;
