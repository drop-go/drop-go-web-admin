import React from 'react'
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
