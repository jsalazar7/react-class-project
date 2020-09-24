import React from 'react';

import { Car } from '../models/Car';
import {useForm} from "../hooks/useForm";

type carData = {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    birthday: number;
    email: string;
    phone: number;
}


export type CarEditRowProps = {
    car: Car,
    onSaveCar: (car: Car) => void,
    onCancelCar: () => void,
};

export function CarEditRow({car, onSaveCar, onCancelCar}: CarEditRowProps) {

    const [ carForm, change ] = useForm ({
        firstName: '', lastName: '', address: '', city: '', birthday: 0, email: '', phone: 0,
    }); /* initial value used to initialize the state on the first render */

    const saveCar = () => {
        onSaveCar({
            ...carForm,
            id: car.id,
        });
    }
    return (
        <tr>
            <td>{car.id}</td>
            <td><input type="text" name="first" value={car.firstName} onChange={change} /></td>
            <td><input type="text" name="last" value={car.lastName} onChange={change} /></td>
            <td><input type="text" name="address" value={car.address} onChange={change} /></td>
            <td><input type="text" name="city" value={car.city} onChange={change} /></td>
            <td><input type="number" name="birthday" value={car.birthday} onChange={change} /></td>
            <td><input type="text" name="email" value={car.email} onChange={change} /></td>
            <td><input type="number" name="phone" value={car.phone} onChange={change} /></td>
            <td>
                <button type="button"
                        onClick={(saveCar)}>Save</button>
                <button type="button"
                        onClick={onCancelCar}>Cancel</button>
            </td>
        </tr>
    );

}
