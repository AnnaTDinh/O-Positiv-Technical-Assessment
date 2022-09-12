import './Option.scss';

function Option({ option, setOption }) {
  return (
    <section className="option-container">
      <section className="title">1. Select Option:</section>
      <section className="options" onChange={(e) => setOption(e.target.value)}>
        <section className="options-choice">
          <section className="bold">
            <input
              type="radio"
              value="gummies"
              name="option"
              checked={option === 'gummies'}
            />{' '}
            Gummies
          </section>
          <p>Stawberries</p>
        </section>

        <section className="options-choice">
          <section className="bold">
            <input
              type="radio"
              value="capsule"
              checked={option === 'capsule'}
              name="option"
            />{' '}
            Capsule
          </section>
          <p>Sugar-Free</p>
        </section>
      </section>
    </section>
  );
}

export default Option;
