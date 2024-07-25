"use client";

import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { ProductFetchResponse } from "../types/ProductFetchResponse";
import { useFilter } from "./use-filter.";
import { mountQuey } from "@/utils/grapql-filter";
import { useDeferredValue } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;;

if (!API_URL) {
  throw new Error("NEXT_PUBLIC_API_URL is not defined");
}

const feather = (query: string): AxiosPromise<ProductFetchResponse> => {
    return axios.post(
        API_URL, { query }) 
}

export function useProduct(){

    const { type, priority, seacher} = useFilter();
    const  searchDeferred = useDeferredValue(seacher);

    const query = mountQuey(type, priority);

    const { data } = useQuery({
        queryFn: () => feather(query),
        queryKey: ['products', type, priority]
    })

    const products = data?.data?.data?.allProducts
    const filterProduct = products?.filter(products => products.name.toLowerCase().includes(searchDeferred.toLowerCase()));
    
    return {
        data: filterProduct
    }
}