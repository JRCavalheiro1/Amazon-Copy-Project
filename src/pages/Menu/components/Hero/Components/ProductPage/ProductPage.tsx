import { Container } from "./style"
import { useLocation } from "react-router-dom";
import { ProductImage } from "./components/ProductImage/ProductImage";
import { ProductInfo } from "./components/ProductInfo/ProductInfo";
import { ProductShopping } from "./components/ProductShopping/ProductShopping";
import { ProductImageModal } from "./components/ProductImageModal/ProductImageModal";
import { useState } from "react";
import { CartModal } from "../../../CartModal/CartModal";
import { Overlay } from "../../../../../../shared/components/Overlay/Overlay";

import { createSlice, configureStore } from "@reduxjs/toolkit";

const couterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        incremented: state => {
            state.value += 1;      
        },
        decremented: state => {
            state.value -= 1;
        }
    }
})

export const {incremented, decremented} = couterSlice.actions;

const store = configureStore({
    reducer: couterSlice.reducer
})


export const ProductPage = () => {
    const location = useLocation();
    const productData = location.state;
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const addItemToCart = () => {
        store.dispatch(incremented());

        console.log(store.getState());
        
    }

    return (
        <Container>
            <div className="product-page">
                <ProductImage productImageData={productData}/>
                <ProductInfo productInfoData={productData}/>
                <ProductShopping producShoppingData={productData}
                    onClick={addItemToCart}
                />
                <CartModal isOpen={modalIsOpen} productData={productData}/> 
                {modalIsOpen && <Overlay onClick={()=> setModalIsOpen(!modalIsOpen)}/>}
            </div>
        </Container>
    )
}