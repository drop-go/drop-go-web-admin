import React, { Suspense } from 'react'
import { Template } from '../../components/Template'
import { Detail as EventDetail } from '../../components/events/Detail'
import { Box, Center } from '@chakra-ui/react'
import { ErrorBoundary } from '../../components/ErrorBoundary'

export const Detail = () => {
  return (
    <div>
      <Template>
        <Box bgColor="#EDF2F6" h="92vh" w="85vw">
          <Center w="100%" h="100%">
            <Box w="80vw" h="85vh" bg="white" m="auto">
              <ErrorBoundary fallback={<ErrorResult />}>
                <Suspense fallback={<Loading />}>
                  <EventDetail />
                </Suspense>
              </ErrorBoundary>
            </Box>
          </Center>
        </Box>
      </Template>
    </div>
  )
}

const Loading = () => {
  return <></>
}

const ErrorResult = () => {
  return <></>
}
