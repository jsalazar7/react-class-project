
import React from 'react';

import { nanToString } from '../utils';
import { useForm } from '../hooks/useForm';
import { CarFormData } from '../models/CarTool';

export type CarFormProps = {
    buttonText: string,
    onSubmitCar: (carForm: CarFormData) => void,
};

export function CarForm(props: CarFormProps) {

    const [ carForm, change, resetCarForm ] = useForm ({
        firstName: '', lastName: '', address: '', city: '', birthday: 0, email: '', phone: 0,
    });

    const submitCar = () => {

        props.onSubmitCar({
            ...carForm,
        });

        resetCarForm();
    };

    return (
        <form>
            <ul>
            <li>
                <label>
                    First Name
                    <input type="text" name="firstName"
                           value={carForm.firstName} onChange={change} />
                </label>
            </li>
            <li>
                <label>
                    Last Name
                    <input type="text" name="lastName"
                           value={carForm.lastName} onChange={change} />
                </label>
            </li>
            <li>
                <label>
                    Address
                    <input type="text" name="address"
                           value={carForm.address} onChange={change} />
                </label>
            </li>
            <li>
                <label>
                    City
                    <input type="text" name="city"
                           value={carForm.city} onChange={change} />
                </label>
            </li>
            <li>
                <label>
                    Birthday
                    <input type="number" name="birthday"
                           value={nanToString(carForm.birthday)} onChange={change} />
                </label>
            </li>
            <li>
                <label>
                    Email
                    <input type="text" name="email"
                           value={carForm.email} onChange={change} />
                </label>
            </li>
            <li>
                <label>
                    Phone
                    <input type="number" name="phone"
                           value={nanToString(carForm.phone)} onChange={change} />
                </label>
            </li>
            <button type="button" onClick={submitCar}>{props.buttonText}</button>
            </ul>
        </form>
    );
}
