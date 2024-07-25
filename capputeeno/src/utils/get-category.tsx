import { FilterType } from "@/types/filter-type";

export function getCategoty(type: FilterType){
    if(type === FilterType.MUG) return 'mugs';
    if(type === FilterType.SHIRT) return 't-shirts';
    return ""; 
}