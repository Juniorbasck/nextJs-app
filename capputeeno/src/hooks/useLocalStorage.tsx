import { useState } from "react";

export function useLocalStorage<T>(item: string){

    const [value, setVAlue] = useState(JSON.parse(localStorage.getItem('item') ?? ''));  

    const updateLocalStorage = (newValue: T) => {
        
        setVAlue(newValue);
        localStorage.setItem(item, JSON.stringify(newValue));
    }

    return {
        value, 
        updateLocalStorage
    }

}