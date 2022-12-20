import { Box, Center } from '@chakra-ui/react'
import React, { Suspense } from 'react'
import { ErrorBoundary } from '../ErrorBoundary'
import { UpdateForm } from './UpdateForm'
import { Text } from '@chakra-ui/react'

export const Update = () => {
  return (
    <Box bgColor="#EDF2F6" h="92vh" w="85vw">
      <Center w="100%" h="100%">
        <Box w="80vw" h="85vh" bg="white" m="auto">
          <ErrorBoundary fallback={<ErrorResult />}>
            <Suspense fallback={<Loading />}>
              <UpdateForm />
            </Suspense>
          </ErrorBoundary>
        </Box>
      </Center>
    </Box>
  )
}

// TODO: loading UI
const Loading = () => {
  return <></>
}

/**
 * TODO: Error UI
 * レイアウト調整する
 */
const ErrorResult = () => {
  return <Text>データ取得に失敗しました。時間を空けて再度お試しください。</Text>
}
