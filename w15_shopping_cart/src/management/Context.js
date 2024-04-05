// สร้าง context api =>ให้บริการข้อมูลแก่ coponent ใน app
import { createContext, useContext, useReducer } from "react";
import CartData from "../data/CartData";
import reducer from "./reducer";

const initState = {
  cart: CartData,
  total: 0,
  amount: 0,
};

const CartContext = createContext();

export const MyCartContext = () => {
  return useContext(CartContext);
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const removeItem = (id) => {
    console.log("idtodelete = ", id);
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  return (
    <CartContext.Provider value={{ ...state, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
