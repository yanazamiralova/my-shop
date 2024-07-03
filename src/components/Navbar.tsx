import Link from 'next/link';
import { useCart } from '../contexts/CartContext';
import Image from 'next/image';



const Navbar = () => {
  const { cart } = useCart();
  return (
    <nav>
      
      <div className="container">
        <div className='header'>
      <Link className='name' href="/"> FashionLive </Link>
      <Link className='nav_list' href="/"> Главная </Link>
      <Link className='nav_list' href="/create-product">Добавить товар</Link>
      <Link className='nav_list' href="/cart">Корзина({cart.length})</Link>
      <Link className='nav_list' href="/login">Вход</Link>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
