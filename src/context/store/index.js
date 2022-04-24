import React, {useReducer} from 'react';
import { Loader } from '../reducers';

export const Store = React.createContext();

const dispatch = {};

export function StoreProvider(props) {
    // All Reducers

    const [mapLoaderState, dispatchLoaderAction] = useReducer(Loader, dispatch);

    //  Value of all Reducers

    const loaderValue = {mapLoaderState, dispatchLoaderAction};

    //  Combine All Values

    const value ={
        ...loaderValue
    };

    // Store

    return (
    <Store.Provider value={value}>
        {props.children}
    </Store.Provider>
    )
}