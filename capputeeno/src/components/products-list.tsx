import { useProduct } from "@/hooks/useProducts"
import { ProductCard } from "@/components/product-cart"
import styled from "styled-components";


const ListContiner = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 256px);
    grid-gap: 32px;
    max-width: 100%;
    margin-top: 32px;
`   

export function ProductList(){

    const { data } = useProduct();
    console.log(data)

    return (
            <ListContiner>
                {data?.map((product) => (
                    <ProductCard
                    key={product.id}
                    image={product.image_url}   
                    title={product.name}
                    price={product.price_in_cents}
                    />
                ))}
            </ListContiner>
    )
}
