import RouterApp from '../../routes'

import { CounterProvider } from '../../contexts/CounterProvider'
import { TitleColorProvider } from '../../contexts/TitleColorProvider'

function App() {

  return (
    <>
      <CounterProvider>
        <TitleColorProvider>
          <RouterApp />
        </TitleColorProvider>
      </CounterProvider>
    </>
  )
}

export default App
