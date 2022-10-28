import { Box } from '@chakra-ui/react'
import React from 'react'
import { StatData } from '../data/StatData'
import { TableData } from '../data/TableData'
import { Map } from '../Map'

export const Layout = () => {
  return (
    <Box bgColor="#EDF2F6" h="92vh" w="85vw">
      <Box display="flex">
        <Box w="700px" m="10px" h="40vh">
          <TableData />
        </Box>
        <Box w="500px" m="10px" h="40vh">
          <Map />
        </Box>
      </Box>
      <Box w="700px" m="10px" h="20vh">
        <StatData />
      </Box>
    </Box>
  )
}
