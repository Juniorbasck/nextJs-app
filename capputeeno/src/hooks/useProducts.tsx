"use client";

import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { ProductFetchResponse } from "../types/ProductFetchResponse";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;;

if (!API_URL) {
  throw new Error("NEXT_PUBLIC_API_URL is not defined");
}

const feather = (): AxiosPromise<ProductFetchResponse> => {
    return axios.post(
        API_URL,
        {
            query: `query {
                        allProducts{
                            id
                            name
                            price_in_cents
                            }
                        }        
             `
        }) 
}

export function useProduct(){
    const { data } = useQuery({
        queryFn: feather,
        queryKey: ['products']
    })
    
    return {
        data: data?.data?.data?.allProducts
    }
}