import { useCounterContext } from '../../hooks/useCounterContext';
import { useTitleColorContext } from '../../hooks/useTitleColorContext';
import './styles.css';

function About() {
  const counterContext = useCounterContext();
  const titleColorContext = useTitleColorContext();

  const { counterState } = counterContext;
  const { titleColorState } = titleColorContext;


  return (
    <div className="container-about">
      <h2 style={{color: titleColorState.color}}>ABOUT</h2>
      <strong>Counter: {counterState.counter}</strong>
    </div>
  )
}

export default About;
