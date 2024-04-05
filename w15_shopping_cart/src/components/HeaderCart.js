import { MyCartContext } from "../management/Context";

const HeaderCart = () => {
  const { amount } = MyCartContext();
  return (
    <button className="button">
      <span>CART</span>
      <span className="badge">({amount})</span>
    </button>
  );
};

export default HeaderCart;
