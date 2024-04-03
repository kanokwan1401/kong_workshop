//coponent จัดการตะกร้าสินค้า
import CartItem from "./CartItem";
import CartData from "../data/CartData";

const Cart = () => {
  return (
    <div className="shopping-cart">
      <div className="title">
        <span className="logo">Bearbie.</span>
        <span>SHOPPING CART</span>
      </div>
      {CartData.map((data) => {
        return <CartItem key={data.id} {...data} />;
      })}
      <div className="footer">
        <span>Subtotal</span>
        <span>bath</span>
      </div>
    </div>
  );
};

export default Cart;
