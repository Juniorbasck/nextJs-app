"use client";

import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { ProductFetchResponse } from "../types/ProductFetchResponse";
import { useFilter } from "./use-filter.";
import { FilterType } from "@/types/filter-type";
import { getCategoty } from "@/utils/get-category";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;;

if (!API_URL) {
  throw new Error("NEXT_PUBLIC_API_URL is not defined");
}

const feather = (query: string): AxiosPromise<ProductFetchResponse> => {
    return axios.post(
        API_URL, { query }) 
}

const mountQuey = (type: FilterType) => {
    if(type === FilterType.ALL) return `query {
                        allProducts{
                            id
                            name
                            price_in_cents
                            image_url
                            }
                        }        
             `
        return `
        query{
            allProducts(filter: {category: "${getCategoty(type)}"}){
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

    const { type } = useFilter();
    const query = mountQuey(type);

    const { data } = useQuery({
        queryFn: () => feather(query),
        queryKey: ['products', type]
    })
    
    return {
        data: data?.data?.data?.allProducts
    }
}