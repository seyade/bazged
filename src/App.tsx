import { useEffect, useMemo, useState } from 'react';

import './styles.css';

type Product = {
  name: string;
  price: number;
};

const products = [
  { name: 'Nintendo Switch', price: 299.95 },
  { name: 'Apple Macbook Pro', price: 2299.99 },
  { name: 'Vitamin D Bottle', price: 3.99 },
  { name: 'How To Invest', price: 10.99 },
  { name: 'PS5', price: 399.99 },
];

export default function App() {
  const [basketItems, setBasketItems] = useState([] as any[]);

  const addToBasket = (product: Product) => {
    setBasketItems([...basketItems, product]);
  };

  const removeFromBasket = (product: Product) => {
    setBasketItems(
      basketItems.filter(item => {
        return product.name !== item.name;
      })
    );
  };

  const totalPrice = useMemo(() => {
    return basketItems.reduce((previousValue, currentValue) => {
      return previousValue + currentValue.price;
    }, 0);
  }, [basketItems]);

  useEffect(() => {
    console.log('ITEMS:::', basketItems);
  }, [basketItems]);

  return (
    <div className="App">
      <h2>Basket</h2>
      <ul className="ProductList">
        {products.map(product => (
          <li key={product.name}>
            <span>
              {product.name} - £{product.price}{' '}
            </span>
            <button className="AddButton" onClick={() => addToBasket(product)}>
              Add
            </button>
            <button
              className="RemoveButton"
              onClick={() => removeFromBasket(product)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <p>Total: £{totalPrice.toFixed(2)}</p>
    </div>
  );
}
