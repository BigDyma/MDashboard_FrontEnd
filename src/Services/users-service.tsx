import {IRegisterModel, IRegisterRequest} from '../Models/registerModel'

export const RegisterReqest = async(data: IRegisterRequest) => {

    const options:object = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        'Access-Control-Allow-Origin': '*',
        body: JSON.stringify(data)
    }

    const fetchResult = await fetch(`https://localhost:5001/Auth/register`, options);


    if (fetchResult.ok)
    {
        const data:object = await fetchResult.json();

        return data;
    }
    else
    {
        console.log(`Eroare: ${fetchResult}`, { variant: 'error' });
    }

}