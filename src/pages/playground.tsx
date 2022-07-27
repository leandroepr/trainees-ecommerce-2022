import { Container } from 'components/toolkit'
import ReducerCounter from 'features/counter/components/reducer-counter'
import { NextPage } from 'next'

const PlaygroundRoute: NextPage = () => {
  return (
    <div className="h-screen w-screen bg-gray-50">
      <Container className="py-4">
        <h1>Playground</h1>
        {/* <CounterContextProvider>
          <Column className="max-w-sm">
            <CounterDisplay />
            <CounterCommands />
          </Column>
        </CounterContextProvider> */}

        <ReducerCounter />
      </Container>
    </div>
  )
}

export default PlaygroundRoute
