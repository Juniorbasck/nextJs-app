import { FilterType } from "@/types/filter-type";
import { PriorityTypes } from "@/types/priority-types";
import RenderResult from "next/dist/server/render-result";

export function getCategoty(type: FilterType){


    if(type === FilterType.MUG) return 'mugs';
    if(type === FilterType.SHIRT) return 't-shirts';
    return ""; 
}


export function getPriority(priority: PriorityTypes){
  
    if(priority === PriorityTypes.NEWS) return {field: 'created_at', order: 'ASC'};
    if(priority === PriorityTypes.MAJOR_PRINCE) return {field: 'price_in_cents', order: 'ASC'};
    if(priority === PriorityTypes.MINOR_PRINCE) return {field: 'price_in_cents', order: 'ASC'};
    
    return {field: 'sales', order: 'DSC'};
}


export const mountQuey = (type: FilterType,priority: PriorityTypes) => {
    if(type === FilterType.ALL && priority === PriorityTypes.POPULARITY) return `query {
                        allProducts(sortField: "sales", sortOrder: "DSC"){
                            id
                            name
                            price_in_cents
                            image_url
                            }
                        }        
             `

         const sortFilter = getPriority(priority);  
         const categoryFilter = getCategoty(type);  

        return  `
        query {
            allProducts(sortField: "${sortFilter.field}", sortOrder: "${sortFilter.order}", ${categoryFilter ? `filter: { category: "${categoryFilter}"}`: ''}) {
              id
              name
              price_in_cents
              image_url
              category
            }
          }
        `
        
}       