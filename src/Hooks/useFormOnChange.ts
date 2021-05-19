import { stringify } from "node:querystring";
import {useState} from "react";
interface IForm {
    login: string,
    password: string,
    [key: string]: string
}
export const useFormOnChange = (initialValues:IForm) => {

    const [values, setValues] = useState(initialValues);

    return [
        values,
        (e:React.ChangeEvent<HTMLInputElement>) => {
            setValues({
                ...values, 
                [e.target.name]: e.target.value
            })
        }
    ]

}