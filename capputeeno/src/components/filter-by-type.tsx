import { useFilter } from "@/hooks/use-filter.";
import styled from "styled-components";
import { FilterType }  from "../types/filter-type";


interface FilterItemProps {
  select: boolean 
}

const FilterList = styled.ul`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 40px;
   list-style: none;
`;

const Filteritem = styled.li<FilterItemProps>` 
  font-weight: ${props => props.select ? '600' : '4000'};
  font-size: 16x;
  line-height: 22px;
  text-transform: uppercase;
  tex-align: center;
  color: var(--text-dark);
  cursor: pointer;
  border-bottom: ${props => props.select ? '4px solid var(--orange-low)' : 'none'};
  `;



export function FilterByType() {
  const {type, setType} = useFilter();

  const handleChangetype = (value: FilterType) => {
    setType(value);
  }
  return (
    <FilterList>
        
        <Filteritem 
          select={type === FilterType.ALL} 
          onClick={() => handleChangetype(FilterType.ALL)}
          >
            todos os produtos
        </Filteritem>

        <Filteritem 
          select={type === FilterType.SHIRT} 
          onClick={() => handleChangetype(FilterType.SHIRT)}
          >
            Camisetas
          </Filteritem>

        <Filteritem 
          select={type === FilterType.MUG} 
          onClick={() => handleChangetype(FilterType.MUG)}
          >
            Canecas
          </Filteritem>

    </FilterList>
  );}