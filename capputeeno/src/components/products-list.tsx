import { useProduct } from "@/hooks/useProducts"
import { ProductCard } from "@/components/product-cart"

interface ProductListProps{

}

export function ProductList(props: ProductListProps){

    const { data } = useProduct();
    console.log(data)

    return (
            <div>
                {data?.map((product) => (
                    <ProductCard
                    key={product.id}
                    image={product.image_url}
                    title={product.name}
                    price={product.price_in_cents}
                    />
                ))}
            </div>
    )
}
