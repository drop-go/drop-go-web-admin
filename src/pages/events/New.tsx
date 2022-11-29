import React from 'react'
import { Box } from '@chakra-ui/react'
import { Template } from '../../components/Template'
import { New as NewEvent } from '../../components/events/New'

export const New = () => {
  return (
    <div>
      <Template>
        <NewEvent />
      </Template>
    </div>
  )
}
