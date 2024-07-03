import { useQuery } from 'react-query';
import axios from 'axios';
import Link from 'next/link';

const fetchProducts = async () => {
  const { data } = await axios.get('https://fakestoreapi.com/products');
  return data;
};

const HomePage = () => {
  const { data, error, isLoading } = useQuery('products', fetchProducts);

  if (isLoading) return <div>Загрузка</div>;
  if (error) return <div>Error loading products</div>;

  return (      
    
    <div className='page'>
    <h1>Наши товары</h1>
    <div className='product'>
      <ul className="product-list">
        {data.map((product: any) => (
          <li key={product.id} className="product-card">
            <Link href={`/product/${product.id}`}>
              <img src={product.image} alt={product.title} className="product-image" />
              <h2 className="product-title">{product.title}</h2>
              <p className="product-price">{product.price} $ </p>
              <button className="product-button">Купить</button>
            </Link>
          </li>
        ))}
      </ul>
 
      
      </div>
    </div>
);
};

export default HomePage;
