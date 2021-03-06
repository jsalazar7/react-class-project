import { useState, ChangeEvent} from 'react'; // Custom hooks

type HTMLFormControls = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

type UseForm = <T>(initialForm: T) =>
    ([ T,
        (e: ChangeEvent<HTMLFormControls>) => void,
        () => void,
        (intput: string) => void,
        <T>(input: string, val:T) => void ] );

function isInput(x: any): x is HTMLInputElement {
    return x instanceof HTMLInputElement;
}

export const useForm: UseForm = (initialForm) => {

    const [ form, setForm ] = useState({...initialForm});

    const change = (e: ChangeEvent<HTMLFormControls>) => {

        setForm({
            ...form,
            [ e.target.name ]: isInput(e.target) && e.target.type === 'number'
                ? e.target.valueAsNumber: e.target.value,
        });
    };

    const resetForm = () => setForm({ ...initialForm});

    const resetInputOnForm = (input: string) => setForm({
         ...form, 
         [ input ]: '',
    });
    const setInputOnForm = <T>(input: string, val:T) => setForm({ ...initialForm, [ input ]: val});

    return [ form, change, resetForm, resetInputOnForm, setInputOnForm ];

};
