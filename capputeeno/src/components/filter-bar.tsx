"use client";

import styled from "styled-components";
import { FilterByType } from "./filter-by-type"


interface FilterBar {

}

const FilterContainer =  styled.div`
    display: flex;
    width: 100%;
    aliagn-items: start;
    margin-left: 180px;
`;

export function FilterBar(props: FilterBar) {
    return(
        <FilterContainer>
            <FilterByType/>
        </FilterContainer> 
    )
}