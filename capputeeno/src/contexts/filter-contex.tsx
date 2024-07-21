"use client";

import { FilterType } from "../types/filter-type";
import { createContext } from "react";
import { useState } from "react";

export const FilterContext = createContext({
    seacher: '',
    page: 0,
    type: FilterType.ALL, 
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
        
        
    return (
        <FilterContext.Provider value={{seacher, page, type, setSearcher, setPage, setType}}>
            {children}
        </FilterContext.Provider>
    )
}