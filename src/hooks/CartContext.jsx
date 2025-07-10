import {useContext, createContext, useEffect, useState} from 'react';
import { set } from 'react-hook-form';

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([]);

    const cartQuantity = cartProducts.reduce((acc, product) => acc + product.quantity, 0);


    const putProductInCart = (product) => {
        const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id);

        let newProductInCart = [];

        if (cartIndex >= 0) {
  newProductInCart = [...cartProducts]; 
  newProductInCart[cartIndex] = {
    ...newProductInCart[cartIndex],
    quantity: newProductInCart[cartIndex].quantity + 1,
  };
  setCartProducts(newProductInCart);
} else {
  product.quantity = 1;
  newProductInCart = [...cartProducts, product];
  setCartProducts(newProductInCart);
}
        
        updateLocalStorage(newProductInCart);
    }

    

    const clearCart = () => {
        console.log('CLEARCART: Clearing cart');
        setCartProducts([]);
        updateLocalStorage([]);
    }

    const deleteProduct = (productId) => {
        
        const newCart = cartProducts.filter((prd) => prd.id !== productId);
        setCartProducts(newCart);
        updateLocalStorage(newCart);
    }

    const increaseProduct = (productId) => {
        const newCart = cartProducts.map(prd => {
            return prd.id === productId ? {...prd, quantity: prd.quantity + 1} : prd
        });
        setCartProducts(newCart);
        updateLocalStorage(newCart);
    }

    const decreaseProduct = (productId) => {
        const cartIndex = cartProducts.findIndex((prd) => prd.id === productId);
        if(cartProducts[cartIndex].quantity > 1) {
            const newCart = cartProducts.map(prd => {
                return prd.id === productId ? {...prd, quantity: prd.quantity - 1} : prd
            });
            setCartProducts(newCart);
            updateLocalStorage(newCart);
        }
        else {
            deleteProduct(productId);
        }
    }

    const updateLocalStorage = (products) => {
        console.log('UPDATELOCALSTORAGE: Saving', products);
        localStorage.setItem('devburger:cartInfo', JSON.stringify(products));

    }

    useEffect(() => {
        const clienteCartData = localStorage.getItem('devburger:cartInfo');
        if(clienteCartData) {
            setCartProducts( JSON.parse(clienteCartData));
            ;
        }
    }, []);





return(
    <CartContext.Provider value={{
        cartProducts,
        putProductInCart,
        clearCart,
        deleteProduct,
        increaseProduct,
        decreaseProduct,
        cartQuantity
    }}>
        {children}
    </CartContext.Provider>
);

};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a context');
    }
    return context;
}





