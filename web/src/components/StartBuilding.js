import React from 'react'
import styled from 'styled-components/macro'
import PageContainer from 'components/PageContainer'
import LandingStartBuilding from 'images/landing-start-building.png'

import { colors } from 'ui'
import {
  Flex,
  Text,
  BackgroundCard,
  H1,
  Button,
  Card,
  Image,
  Box,
  H2,
  H3,
  AbsoluteLink,
  Link,
  Bold,
} from 'ui/common'
import { isMobile } from 'ui/media'

const FilledButton = styled(Button)`
  font-family: Avenir;
  color: white;
  font-size: 16px;
  font-weight: 500;
  text-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
  width: 220px;
  height: 46px;
  border-radius: 2px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.15);
  cursor: pointer;
  background-color: #454366;
  transition: all 0.25s;

  &:hover {
    background-color: #302d61;
  }

  &:active {
    background-color: #302d61;
  }

  &:focus {
    outline: none;
  }
`

const OutlineButton = styled(Button)`
  font-family: Avenir;
  color: #f7f8ff;
  font-size: 16px;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0);
  width: 182px;
  height: 46px;
  border-radius: 2px;
  border: solid 1px ${props => props.borderColor};
  cursor: pointer;
  transition: all 0.25s;

  &:hover {
    background-color: #302d61;
    border: none;
  }

  &:active {
    background-color: #302d61;
    border: none;
  }

  &:focus {
    outline: none;
  }
`

export default ({ style = {}, ...props }) => {
  const _isMobile = isMobile()
  return (
    <PageContainer>
      <Flex
        pt={['45px', '65px']}
        pb={['0px', '35px']}
        px={['0px', '20px', '80px']}
        color="white"
        style={{
          maxWidth: 'calc(100vw - 40px)',
          width: 'auto',
          borderRadius: '10px',
          boxShadow: '0 5px 20px rgba(0, 0, 0, 0.15)',
          background: 'linear-gradient(to left, #6083ff, #8266ff)',
          ...style,
        }}
        {...props}
        flexDirection={['column', 'row']}
      >
        <Flex
          style={{ width: '620px', maxWidth: 'calc(100vw - 40px)' }}
          flexDirection="column"
          alignItems={['center', 'flex-start']}
        >
          <Text
            fontWeight="600"
            fontSize={['24px', '24px', '32px']}
            textAlign={['center', 'left']}
            lineHeight={[1.5, 1]}
          >
            Want to {_isMobile && <br />} start building?
          </Text>
          <Flex my="10px" />
          <Text
            fontSize={['16px', '16px', '20px']}
            lineHeight={1.63}
            textAlign={['center', 'left']}
          >
            Integrating your product right {_isMobile && <br />} away with Band
            Protocol SDK
          </Text>
          <Flex mt="40px" flexDirection={['column-reverse', 'row']}>
            <a
              href="https://developer.bandprotocol.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <OutlineButton
                borderColor="white"
                style={{
                  width: '220px',
                }}
              >
                Documentation
              </OutlineButton>
            </a>
            <Flex mx={['0px', '10px']} my={['10px', '0px']} />
            <a
              href="https://data.bandprotocol.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FilledButton
                style={{
                  width: '220px',
                }}
              >
                Developer Portal
              </FilledButton>
            </a>
          </Flex>
        </Flex>
        <Box flex="0 0 266px" ml="auto" mt={['40px', '0px']}>
          <Image src={LandingStartBuilding} />
        </Box>
      </Flex>
    </PageContainer>
  )
}
