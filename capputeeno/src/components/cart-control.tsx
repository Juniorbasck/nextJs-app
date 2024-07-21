import { CartIcon } from './cart-icon';
import { useLocalStorage } from '../hooks/useLocalStorage';
import styled from 'styled-components';

const CartCount = styled.span`
    width: 17px;
    height: 17px;
    left: 1263px;
    top: 43px;   
    background-color: var(--delete-color);
    color: white;
    position: absolute; 
    right: -10px;
    top: 50%;
`

const Container = styled.div`
    position: relative;
`

export function CartControl() {
    const { value } = useLocalStorage<any[]>('cart-items', []); 
    
    return(
        <Container>
            <CartIcon />
            {value.length && <CartCount>{value.length}</CartCount>}
            </Container>
    );
}
