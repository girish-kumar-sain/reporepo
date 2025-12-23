import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";
import { useNavigate } from "react-router-dom";

export default function CartItem() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div className="page">
      <h2>Shopping Cart</h2>

      {items.map(item => (
        <div key={item.id} className="card">
          <img src={item.img} />
          <h4>{item.name}</h4>
          <p>Unit Price: ${item.price}</p>
          <p>Total: ${item.price * item.quantity}</p>

          <button onClick={() =>
            dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
          }>+</button>

          <button onClick={() =>
            dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
          }>-</button>

          <button onClick={() => dispatch(removeItem(item.id))}>
            Delete
          </button>
        </div>
      ))}

      <h3>Grand Total: ${total}</h3>

      <button onClick={() => navigate("/products")}>Continue Shopping</button>
      <button>Checkout</button>
    </div>
  );
}

