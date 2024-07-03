import { useCart } from '../contexts/CartContext';

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className='main1'>
      <h1>Ваша корзина</h1>
      <ul>
        <div className='main-product'> 
        {cart.map((item) => (
          <li key={item.id}>
          
            {item.title} - ${item.price} x {item.quantity} <br></br>
            <button className='delete' onClick={() => removeFromCart(item.id)}>Удалить</button>
          </li>
        ))}</div>
      </ul>
      {cart.length === 0 && <p>Ваша корзина пуста</p>}
    </div>
  );
};

export default CartPage;
