// แสดงรายการสินค้า
import plus from "../image/plus.svg";
import minus from "../image/minus.svg";
import deleteicon from "../image/delete-icn.svg";
import { MyCartContext } from "../management/Context";

const CartItem = ({ id, name, image_url, price, quantity }) => {
  const { removeItem, toggleQuantity, formatNumber } = MyCartContext();
  return (
    <div className="item">
      <div className="product_image">
        <img src={image_url} alt="" />
      </div>
      <div className="description">
        <span>
          <b>{name}</b>
        </span>
        <span>Price {formatNumber(price)} bath</span>
      </div>
      <div className="quantity">
        <button
          className="plus-btn"
          onClick={() => toggleQuantity(id, "increment")}
        >
          <img src={plus} alt="" />
        </button>
        <input type="text" value={quantity} disabled />
        <button
          className="minus-btn"
          onClick={() => toggleQuantity(id, "decrement")}
        >
          <img src={minus} alt="" />
        </button>
      </div>
      <div className="total-price">{formatNumber(quantity * price)}</div>
      <div className="remove" onClick={() => removeItem(id)}>
        <img src={deleteicon} alt="" />
      </div>
    </div>
  );
};

export default CartItem;
