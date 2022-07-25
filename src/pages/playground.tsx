import { Column, Container, Text } from 'components/toolkit'
import CounterCommands from 'features/counter/components/counter-commands'
import CounterContextConsumer from 'features/counter/components/counter-consumer'
import CounterDisplay from 'features/counter/components/counter-display'
import CounterContextProvider from 'features/counter/components/counter-provider'
import CustomButton from 'features/counter/components/custom-button'
import { NextPage } from 'next'

const PlaygroundRoute: NextPage = () => {
  return (
    <div className="h-screen w-screen bg-gray-50">
      <Container className="py-4">
        <h1>Playground</h1>
        <CounterContextProvider>
          <Column className="max-w-sm">
            <CounterDisplay />
            <CounterCommands />
          </Column>
        </CounterContextProvider>

        <h2 className="mt-10">By consumer</h2>
        <CounterContextProvider>
          <Column className="max-w-sm">
            <CounterContextConsumer>
              {({ count, increase, decrease }) => (
                <>
                  <Text className="text-success text-lg font-bold">
                    {count}
                  </Text>
                  <CustomButton onClick={increase}>Add 1</CustomButton>
                  <CustomButton onClick={decrease}>remove 1</CustomButton>
                </>
              )}
            </CounterContextConsumer>
          </Column>
        </CounterContextProvider>
        <CounterContextConsumer>
          {({ count, increase }) => (
            <>
              <Text className="text-success text-lg font-bold">{count}</Text>
              <CustomButton onClick={increase}>Does it works?</CustomButton>
              <CounterCommands />
            </>
          )}
        </CounterContextConsumer>
      </Container>
    </div>
  )
}

export default PlaygroundRoute
