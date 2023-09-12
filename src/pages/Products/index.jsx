import { useCounterContext } from '../../hooks/useCounterContext';
import { useTitleColorContext } from '../../hooks/useTitleColorContext';
import './styles.css';

function Products() {
  const counterContext = useCounterContext();
  const titleColorContext = useTitleColorContext();

  const { counterState } = counterContext;
  const { titleColorState } = titleColorContext;


  return (
    <div className="container-products">
      <h2 style={{color: titleColorState.color}}>PRODUCTS</h2>
      <strong>Counter: {counterState.counter}</strong>
    </div>
  )
}

export default Products;
