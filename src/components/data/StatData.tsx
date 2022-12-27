import { StatLabel, Stat, StatGroup, StatNumber, StatHelpText, StatArrow } from '@chakra-ui/react'
import React from 'react'

export const StatData = () => {
  return (
    <StatGroup bgColor="white" h="100%" p="10px">
      <Stat m="5px">
        <StatLabel>今週のダウンロード数</StatLabel>
        <StatNumber>25件</StatNumber>
        <StatHelpText>
          <StatArrow type="increase" />
          10.1%
        </StatHelpText>
      </Stat>
      <Stat m="5px">
        <StatLabel>今週のインプレッション数</StatLabel>
        <StatNumber>78回</StatNumber>
        <StatHelpText>
          <StatArrow type="decrease" />
          -3.1%
        </StatHelpText>
      </Stat>
    </StatGroup>
  )
}
