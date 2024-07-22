"use client";

import styled from "styled-components";
import { FilterByType } from "./filter-by-type"
import { FilterByPriority } from "./filter-by-priority";


interface FilterBar {

}

const FilterContainer =  styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    margin-left: 180px;
    justify-content: space-between;
`;

export function FilterBar(props: FilterBar) {
    return(
        <FilterContainer>
            <FilterByType/>
            <FilterByPriority/>
        </FilterContainer> 
    )
}