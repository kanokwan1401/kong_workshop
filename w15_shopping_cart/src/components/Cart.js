//coponent จัดการตะกร้าสินค้า
import CartItem from "./CartItem";
// import CartData from "../data/CartData";
import { MyCartContext } from "../management/Context";

const Cart = () => {
  const { cart, total } = MyCartContext();
  if (cart.length === 0) {
    return (
      <div className="shopping-cart">
        <div className="empty">EMPTY CART !</div>
      </div>
    );
  } else {
    return (
      <div className="shopping-cart">
        <div className="title">
          <span className="logo">Bearbie.co</span>
          <span>SHOPPING CART</span>
        </div>
        {cart.map((data) => {
          return <CartItem key={data.id} {...data} />;
        })}
        <div className="footer">
          <span>Subtotal</span>
          <span><b>{total}</b> bath</span>
        </div>
      </div>
    );
  }
};

export default Cart;
