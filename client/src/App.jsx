import './App.scss';
import AddCart from './components/add-to-cart/Add-to-cart.jsx';
import FrequentlyBought from './components/frequently-bought/Frequently-bought.jsx';
import Option from './components/option/Option.jsx';
import PurchaseType from './components/purchase-type/Purchase-type.jsx';
import Quantity from './components/quantity/Quantity.jsx';
import { useState, useRef } from 'react';

function App() {
  const options = {
    1: {
      subscriptionPrice: 26.99,
      oneTimePrice: 31.99,
      description: '1 bottle ships every 1 month',
    },
    2: {
      subscriptionPrice: 24.99,
      oneTimePrice: 26.99,
      description: '2 bottles ships every 2 months',
    },
    3: {
      subscriptionPrice: 24,
      oneTimePrice: 26,
      description:
        "Congrats, you've selected our best value! 3 bottles ship every 3 months",
    },
  };

  const [option, setOption] = useState('FLO - PMS Gummy Vitamins');
  const [purchaseType, setPurchaseType] = useState('Subscription');
  const [quantity, setQuantity] = useState(1);
  const [frequentlyBoughtWith, setFrequentlyBoughtWith] = useState(false);
  const [oneTimePrice, setOneTimePrice] = useState('$31.99');
  const [subscriptionPrice, setSubscriptionPrice] = useState('$26.99');
  const [description, setDescription] = useState(
    '1 bottle ships every 1 month'
  );
  const carts = useRef([]);

  const handleQtyChange = (num) => {
    setQuantity(num);
    setOneTimePrice('$' + options[num].oneTimePrice);
    setSubscriptionPrice('$' + options[num].subscriptionPrice);
    setDescription(options[num].description);
  };

  const handleAddToCart = () => {
    if (frequentlyBoughtWith) {
      let fItem = {
        itemName: 'DISCO Multivitamin',
        type: 'One Time',
        count: 1,
      };
      if (
        carts.current.findIndex(
          (cartItem) => cartItem.itemName === 'DISCO Multivitamin'
        ) === -1
      ) {
        carts.current = [...carts.current, fItem];
      } else {
        carts.current = carts.current.map((cartItem) => {
          if (cartItem.itemName === 'DISCO Multivitamin') {
            return { ...cartItem, count: fItem.count + 1 };
          } else {
            return cartItem;
          }
        });
      }
    }

    let item = {
      itemName: option,
      type: purchaseType,
      count: quantity,
    };

    if (
      carts.current.findIndex(
        (cartItem) =>
          cartItem.itemName === item.itemName && cartItem.type === item.type
      ) === -1
    ) {
      carts.current = [...carts.current, item];
    } else {
      carts.current = carts.current.map((cartItem) => {
        if (
          cartItem.itemName === item.itemName &&
          cartItem.type === item.type
        ) {
          return { ...cartItem, count: cartItem.count + item.count };
        } else {
          return cartItem;
        }
      });
    }
    alert(
      carts.current
        .map((cartItem) => Object.values(cartItem).join(' | '))
        .join('\n')
    );
  };

  return (
    <section className="app">
      <section className="app-selection">
        <Option option={option} setOption={setOption} />
        <PurchaseType
          purchaseType={purchaseType}
          setPurchaseType={setPurchaseType}
          oneTimePrice={oneTimePrice}
          subscriptionPrice={subscriptionPrice}
        />
        <Quantity
          quantity={quantity}
          setQuantity={setQuantity}
          description={description}
          handleQtyChange={handleQtyChange}
        />
        <FrequentlyBought
          frequentlyBoughtWith={frequentlyBoughtWith}
          setFrequentlyBoughtWith={setFrequentlyBoughtWith}
        />
      </section>
      <AddCart
        oneTimePrice={oneTimePrice}
        subscriptionPrice={subscriptionPrice}
        purchaseType={purchaseType}
        handleAddToCart={handleAddToCart}
      />
    </section>
  );
}

export default App;
