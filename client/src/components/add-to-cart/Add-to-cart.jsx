import './Add-to-cart.scss';

function AddCart({
  oneTimePrice,
  subscriptionPrice,
  purchaseType,
  handleAddToCart,
}) {
  const handleDisplay = () => {
    if (purchaseType === 'subscribe & save') {
      return (
        <button>
          Add to Cart - <span className="light">{oneTimePrice}</span>
          {subscriptionPrice}
        </button>
      );
    } else {
      return (
        <button onClick={handleAddToCart}>Add to Cart - {oneTimePrice}</button>
      );
    }
  };

  return <section className="cart-button">{handleDisplay()}</section>;
}

export default AddCart;
