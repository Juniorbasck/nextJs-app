"use client";

import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { ProductFetchResponse } from "../types/ProductFetchResponse";
import { useFilter } from "./use-filter.";
import { FilterType } from "@/types/filter-type";
import { getCategoty, getPriority } from "@/utils/grapql-filter";
import { PriorityTypes } from "@/types/priority-types";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;;

if (!API_URL) {
  throw new Error("NEXT_PUBLIC_API_URL is not defined");
}

const feather = (query: string): AxiosPromise<ProductFetchResponse> => {
    return axios.post(
        API_URL, { query }) 
}

const mountQuey = (type: FilterType,priority: PriorityTypes) => {
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

export function useProduct(){

    const { type, priority} = useFilter();
    const query = mountQuey(type, priority);

    const { data } = useQuery({
        queryFn: () => feather(query),
        queryKey: ['products', type, priority]
    })
    
    return {
        data: data?.data?.data?.allProducts
    }
}