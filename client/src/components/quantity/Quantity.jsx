import './Quantity.scss';

function Quantity({ quantity, setQuantity, description, handleQtyChange }) {
  return (
    <section className="quantity-container">
      <section className="quantity-title-container">
        <section className="title">3. Quantity:</section>
        <section className="buttons">
          <input
            type="checkbox"
            value={1}
            checked={quantity === 1}
            name="quantity"
          />
          <label
            htmlFor={1}
            onClick={(e) => {
              handleQtyChange(1);
            }}
          >
            1
          </label>
          <input
            type="checkbox"
            value={2}
            checked={quantity === 2}
            name="quantity"
          />
          <label
            htmlFor={2}
            onClick={(e) => {
              handleQtyChange(2);
            }}
          >
            2
          </label>
          <input
            type="checkbox"
            value={3}
            checked={quantity === 3}
            name="quantity"
          />
          <label
            htmlFor={3}
            onClick={(e) => {
              handleQtyChange(3);
            }}
          >
            3
          </label>
        </section>
      </section>
      <p>{description}</p>
    </section>
  );
}

export default Quantity;
