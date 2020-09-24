
import React from 'react';

import { Car } from '../models/Car';
import { nanToString } from '../utils';

export type CarViewRowProps = {
    car: Car,
    onEditCar: (carId: number) => void,
    onDeleteCar: (carId: number) => void,
};

export function CarViewRow(props: CarViewRowProps) {

    return (
        <tr>
            <td>{props.car.id}</td>
            <td>{props.car.firstName}</td>
            <td>{props.car.lastName}</td>
            <td>{props.car.address}</td>
            <td>{props.car.city}</td>
            <td>{nanToString(props.car.birthday)}</td>
            <td>{props.car.email}</td>
            <td>{nanToString(props.car.phone)}</td>
            <td>
                <button type="button"
                        onClick={() => props.onEditCar(props.car.id)}>Edit</button>
                <button type="button"
                        onClick={() => props.onDeleteCar(props.car.id)}>Delete</button>
            </td>
        </tr>
    );

}
