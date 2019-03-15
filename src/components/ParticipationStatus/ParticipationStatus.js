import React from 'react'
import { Flex, Text } from 'ui/common'
import ProgressBar from 'components/ProgressBar'
import Oval from 'components/Oval'
import { colors } from 'ui'

export default ({
  percentParticipant,
  percentReject,
  minParticipation,
  supportRequiredPct,
}) => {
  return (
    <Flex flexDirection="column" mt="30px" mb="40px">
      <Flex flexDirection="row" justifyContent="center">
        <Flex width={1 / 2}>
          <Flex flexDirection="column" justifyContent="flex-end" mr="5px">
            <Text pb="5px" fontWeight="500">
              Participation
            </Text>
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="flex-end"
            mr="20px"
            pb="3px"
          >
            <Oval
              color="white"
              bg={colors.purple.normal}
              size={20}
              fontWeight="regular"
              t="?"
            />
          </Flex>
          <ProgressBar
            percent={percentParticipant}
            isResult={false}
            minimum={minParticipation}
          />
        </Flex>
        <Flex width={1 / 2} justifyContent="flex-end">
          <Flex flexDirection="column" justifyContent="flex-end" mr="5px">
            <Text pb="5px" fontWeight="500">
              Result
            </Text>
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="flex-end"
            mr="20px"
            pb="3px"
          >
            <Oval
              color="white"
              bg={colors.purple.normal}
              size={20}
              fontWeight="regular"
              t="?"
            />
          </Flex>
          <ProgressBar
            percent={percentReject}
            isResult={true}
            minimum={supportRequiredPct}
          />
        </Flex>
      </Flex>
      <Flex flexDirection="row" mt="30px">
        <Flex width={1 / 2}>
          <Text fontWeight="500">Status</Text> : Minimum participation
          {percentParticipant < minParticipation ? ' unreached' : ' reached'}
        </Flex>
        <Flex width={1 / 2} justifyContent="flex-end">
          <Text fontWeight="500">Status</Text>
          {percentReject < supportRequiredPct ? ': support' : ': rejected'}
        </Flex>
      </Flex>
    </Flex>
  )
}
