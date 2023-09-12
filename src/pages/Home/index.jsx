import { useCounterContext } from '../../hooks/useCounterContext';
import { useTitleColorContext } from '../../hooks/useTitleColorContext';
import { decrementCounter, incrementCounter } from '../../contexts/CounterProvider/actions';
import { colorPurple, colorRed } from '../../contexts/TitleColorProvider/actions'
import './styles.css';

function Home() {
  // const counterContext = useContext(CounterContext);
  const counterContext = useCounterContext();
  const titleColorContext = useTitleColorContext();

  const { counterState, counterDispatch } = counterContext;
  const { titleColorState, titleColorDispatch } = titleColorContext;

  return (
    <div className="container-home">
      <h2 style={{color: titleColorState.color}}>HOME</h2>
      <strong>Counter: {counterState.counter}</strong>
      <article>
        <button className='btn-counter' onClick={() => incrementCounter(counterDispatch)}>+</button>
        <button className='btn-counter' onClick={() => decrementCounter(counterDispatch)}>-</button>
      </article>
      <article>
        <button className='btn-color' onClick={() => colorPurple(titleColorDispatch)}>purple</button>
        <button className='btn-color' onClick={() => colorRed(titleColorDispatch)}>red</button>
      </article>
    </div>
  )
}

export default Home;
