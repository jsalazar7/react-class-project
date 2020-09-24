import React from 'react';

import { Car } from '../models/Car';
import { CarsSort } from '../models/CarTool';

import { CarEditRow } from './CarEditRow';
import { CarViewRow } from './CarViewRow';


export type CarTableProps = {
    cars: Car[],
    editCarId: number,
    carsSort: CarsSort,
    onEditCar: (carId: number) => void,
    onDeleteCar: (carId: number) => void,
    onSaveCar: (car: Car) => void,
    onCancelCar: () => void,
    onSortCars: (col: keyof Car) => void,
};

type ColHeaderProps = {
    carsSort: CarsSort,
    col: keyof Car,
    caption: string,
    onClick: (col: keyof Car) => void,
}

function ColHeader(props: ColHeaderProps) {
    return (
        <th onClick={() => props.onClick(props.col)}>
            {props.caption}
            {props.carsSort.col === props.col && <span>({props.carsSort.dir})</span>}
        </th>
    );
}

// can be reused anywhere
// presentational component - ui-only, no knowledge of the application itself
export function CarTable({
                             cars, editCarId, carsSort,
                             onEditCar: editCar,
                             onDeleteCar: deleteCar,
                             onSaveCar: saveCar,
                             onCancelCar: cancelCar,
                             onSortCars: sortCars,
                         }: CarTableProps) {

    return (
        <table>
            <thead>
            <tr>
                <ColHeader carsSort={carsSort} col="id" caption="Id" onClick={sortCars} />
                <ColHeader carsSort={carsSort} col="firstName" caption="First Name" onClick={sortCars} />
                <ColHeader carsSort={carsSort} col="lastName" caption="Last Name" onClick={sortCars} />
                <ColHeader carsSort={carsSort} col="address" caption="Address" onClick={sortCars} />
                <ColHeader carsSort={carsSort} col="city" caption="City" onClick={sortCars} />
                <ColHeader carsSort={carsSort} col="birthday" caption="Birthday" onClick={sortCars} />
                <ColHeader carsSort={carsSort} col="email" caption="Email" onClick={sortCars} />
                <ColHeader carsSort={carsSort} col="phone" caption="Phone" onClick={sortCars} />
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {cars.map(car => car.id === editCarId
                ? <CarEditRow key={car.id} car={car} onSaveCar={saveCar} onCancelCar={cancelCar} />
                : <CarViewRow key={car.id} car={car} onEditCar={editCar} onDeleteCar={deleteCar} />)}
            </tbody>
        </table>
    );

}
