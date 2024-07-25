"use client";

import { setPriority } from "os";
import { FilterType } from "../types/filter-type";
import { createContext } from "react";
import { useState } from "react";
import { PriorityTypes } from "@/types/priority-types";

export const FilterContext = createContext({
    seacher: '',
    page: 0,
    type: FilterType.ALL, 
    priority: PriorityTypes.NEWS,
    setPriority: (value: PriorityTypes) => {}, 
    setSearcher: (searcher: string) => {},
    setPage: (page: number) => {},
    setType : (type: FilterType) => {}
})


interface ProviderPorps {
    children: React.ReactNode
}

export function FilterContextProvider({ children }: ProviderPorps) {
    const [seacher, setSearcher] = useState('');
    const [page, setPage] = useState(0);
    const [type, setType] = useState(FilterType.ALL);   
    const [priority, setPriority] = useState(PriorityTypes.POPULARITY);
        
    return (
        <FilterContext.Provider value={{
            seacher, 
            page, 
            type,
            priority, 
            setSearcher, 
            setPage, 
            setType,
            setPriority
            }}>
            {children}
        </FilterContext.Provider>
    )
}