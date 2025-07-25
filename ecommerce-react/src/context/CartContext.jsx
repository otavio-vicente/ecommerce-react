import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id);
      if (itemExists) {
        // Se já existe, aumenta a quantidade
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Se não existe, adiciona com quantidade 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  }

  function updateQuantity(productId, quantity) {
  setCartItems((prevItems) =>
    prevItems.map((item) =>
      item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
    )
  );
}


  function removeFromCart(productId) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  }

  function clearCart() {
    setCartItems([]);
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

// Hook para usar o contexto mais fácil
export function useCart() {
  return useContext(CartContext);
}
