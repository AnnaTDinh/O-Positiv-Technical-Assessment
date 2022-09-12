import './Purchase-type.scss';

function PurchaseType({
  purchaseType,
  setPurchaseType,
  oneTimePrice,
  subscriptionPrice,
}) {
  return (
    <section className="purchase-type-container">
      <section className="title">2. Purchase Type:</section>
      <section className="purchase-type">
        <section className="purchase-type-option bold">
          <section>
            <input
              type="radio"
              value="subscribe & save"
              checked={purchaseType === 'subscribe & save'}
              name="purchaseType"
              onChange={(e) => setPurchaseType(e.target.value)}
            />{' '}
            Subscribe & Save
          </section>
          <p>Easy to cancel, anytime</p>
          <p className="red">Free Shipping Always</p>
        </section>
        <section>
          <section className="bold end">{subscriptionPrice}</section>{' '}
          <p>/BOTTLE</p>
        </section>
      </section>
      <section className="purchase-type">
        <section className="purchase-type-option bold">
          <section>
            <input
              type="radio"
              value="one time"
              checked={purchaseType === 'one time'}
              name="purchaseType"
              onChange={(e) => setPurchaseType(e.target.value)}
            />{' '}
            One Time
          </section>
          <p>One Time Purchase</p>
        </section>
        <section>
          <section className="bold end">{oneTimePrice}</section> <p>/BOTTLE</p>
        </section>
      </section>
    </section>
  );
}

export default PurchaseType;
