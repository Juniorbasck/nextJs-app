import { useContext } from "react";
import {FilterContext} from "../contexts/filter-contex";

export function useFilter(){
    return useContext(FilterContext)
} 