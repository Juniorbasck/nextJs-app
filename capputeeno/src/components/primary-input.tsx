import styled from "styled-components"
import {SearchIcon} from "@/components/search-icon"

export const PrimaryInput = styled.input`
    width: 352px;
    border-radius: 8px;
    padding: 10px 16px;
    babckground-color: var(--bg--secundary);
    font-family: inherit;       
    font-wight: 400;
    font-size: 14x;
    border: none;
    line-height: 22px;
    color: var(--text-dark);
`

const InputContainer = styled.div`
    position: relative;
    width: 352px;

    svg {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }
`

export function PrimaryInputWithSearchIcon(){
    return (
        <InputContainer>
            <PrimaryInput placeholder="Search"/>
            <SearchIcon/>
        </InputContainer>
    )
}