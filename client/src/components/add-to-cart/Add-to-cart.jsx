import './Add-to-cart.scss';

function AddCart({
  oneTimePrice,
  subscriptionPrice,
  purchaseType,
  handleAddToCart,
}) {
  const handleDisplay = () => {
    if (purchaseType === 'Subscription') {
      return (
        <button>
          ADD TO CART - <span className="light">{oneTimePrice}</span>
          {subscriptionPrice}
        </button>
      );
    } else {
      return (
        <button onClick={handleAddToCart}>ADD TO CART - {oneTimePrice}</button>
      );
    }
  };

  return <section className="cart-button">{handleDisplay()}</section>;
}

export default AddCart;
