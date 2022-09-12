import './Frequently-bought.scss';

function FrequentlyBought({ frequentlyBoughtWith, setFrequentlyBoughtWith }) {
  return (
    <section className="frequent">
      <section className="title">4. Frequently Purchased With:</section>
      <section className="frequent-row">
        <section>
          <input
            name="frequentlyBoughtWith"
            type="checkbox"
            checked={frequentlyBoughtWith}
            onChange={() => setFrequentlyBoughtWith(!frequentlyBoughtWith)}
          />{' '}
        </section>
        <section>
          <img
            className="disco"
            src="https://cdn.shopify.com/s/files/1/0013/1068/7335/files/OPProducts_DISCO-1000x1000.png?v=1654901746"
            alt="disco product"
          ></img>
        </section>
        <section className="disco-text">
          DISCO Multivitamin
          <section className="disco-price">$26.99</section>
          <section className="under">Learn More</section>
        </section>
      </section>
    </section>
  );
}

export default FrequentlyBought;
