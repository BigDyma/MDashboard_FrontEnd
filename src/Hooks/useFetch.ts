import { stringify } from 'node:querystring';
import {useEffect, useState} from 'react';

export const useFetch:Object = (url:string) => {

    const [state, setState] = useState({data: "", loading: true});

    useEffect(() => {
        setState(state => ({
            data: state.data,
            loading: true
        }));
        fetch(url).then(x => x.text())
        .then(y => {
            setState({
                data: y, 
                loading: false
            });
        })
    }, [url, setState]);
    
    return state;
}
