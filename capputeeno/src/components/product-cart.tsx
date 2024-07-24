import { formatPrice } from "@/utils/format-price"
import styled from "styled-components"

interface ProductCard{

    image: string 
    title: string
    price: number
}


const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    background-color: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(10px);
    border-radius: 0px 0px 4px 4px;

    width: 256px;


    img{
        width: 256px;
        height: 300px;
    }

    h3{
        font-weight: 30px;
        font-size: 16px;
        line-height: 150%;
        color: var(--text-dark2)

    }

    p{
        font-weight: 600;
        font-size: 14px;
        line-height: 150%;
        color: var(--shapes-dark)
    }

    div{
        display: flex;
        align-items: start;
        justify-content: center;
        flex-direction: column;
        padding: 8px 0;

       > div{
            width: 228px;
            height: 1px;
            top: 340px;
            margin: 8px 0px;
            padding: 0px;
            background: var(--shapes);
        }
    
    }

`

export function ProductCard(props: ProductCard){

    const price = formatPrice(props.price);

    return (
        <Card>   
            <img src={props.image}/>
             <div>
                <h3>{props.title}</h3>  
                <div></div>
                <p>{price}</p>
            </div>
        </Card>
    )  
}