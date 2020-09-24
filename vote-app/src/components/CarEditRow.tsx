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
       ...car
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
            <td><input type="text" name="first" value={carForm.firstName} onChange={change} /></td>
            <td><input type="text" name="last" value={carForm.lastName} onChange={change} /></td>
            <td><input type="text" name="address" value={carForm.address} onChange={change} /></td>
            <td><input type="text" name="city" value={carForm.city} onChange={change} /></td>
            <td><input type="number" name="birthday" value={carForm.birthday} onChange={change} /></td>
            <td><input type="text" name="email" value={carForm.email} onChange={change} /></td>
            <td><input type="number" name="phone" value={carForm.phone} onChange={change} /></td>
            <td>
                <button type="button"
                        onClick={(saveCar)}>Save</button>
                <button type="button"
                        onClick={onCancelCar}>Cancel</button>
            </td>
        </tr>
    );

}
