import './App.scss';
import AddCart from './components/add-to-cart/Add-to-cart.jsx';
import FrequentlyBought from './components/frequently-bought/Frequently-bought.jsx';
import Option from './components/option/Option.jsx';
import PurchaseType from './components/purchase-type/Purchase-type.jsx';
import Quantity from './components/quantity/Quantity.jsx';
import { useState } from 'react';

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

  const [option, setOption] = useState('gummies');
  const [purchaseType, setPurchaseType] = useState('subscribe & save');
  const [quantity, setQuantity] = useState(1);
  const [frequentlyBoughtWith, setFrequentlyBoughtWith] = useState(false);
  const [oneTimePrice, setOneTimePrice] = useState('$31.99');
  const [subscriptionPrice, setSubscriptionPrice] = useState('$26.99');
  const [description, setDescription] = useState(
    '1 bottle ships every 1 month'
  );

  const handleQtyChange = (num) => {
    setQuantity(num);
    setOneTimePrice('$' + options[num].oneTimePrice);
    setSubscriptionPrice('$' + options[num].subscriptionPrice);
    setDescription(options[num].description);
  };

  const handleAddToCart = () => {};

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
      />
    </section>
  );
}

export default App;
