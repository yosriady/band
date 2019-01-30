import React from 'react'
import styled from 'styled-components'
import PageContainer from 'components/PageContainer'
import {
  Link,
  Bold,
  Image,
  Flex,
  Box,
  Button,
  AbsoluteLink,
  Text,
  Card,
  Highlight,
} from 'ui/common'
import media, { isMobile } from 'ui/media'

import LogoSrc from 'images/logo.svg'
import { colors } from 'ui'

const Nav = styled.nav`
  display: flex;
  height: 80px;
  align-items: center;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.07);
  position: sticky;
  top: 0;
  background: #ffffff;

  ${media.mobile} {
    height: 60px;
    padding: 0 8px;
  }
`

const ProfileImage = styled(Image).attrs({
  height: 40,
  width: 40,
})`
  cursor: pointer;
  border-radius: 50%;
  border: solid 2px #8868ff;
`

const TextClickable = styled(Text)`
  cursor: pointer;
`

const HighlightBNDOrUSD = ({ isBND, toggle }) => {
  return (
    <Flex mr={3}>
      {isBND ? (
        <Text mr={0} fontWeight="bold" color="#8868ff" fontSize="16px">
          BND
        </Text>
      ) : (
        <TextClickable color={colors.text.grey} onClick={toggle}>
          BND
        </TextClickable>
      )}
      <Text px={1} color={colors.text.grey}>
        /
      </Text>
      {isBND ? (
        <TextClickable color={colors.text.grey} onClick={toggle}>
          USD
        </TextClickable>
      ) : (
        <Text mr={0} fontWeight="bold" color="#8868ff" fontSize="16px">
          USD
        </Text>
      )}
    </Flex>
  )
}

export default ({ balance, isBND, toggleBalance, showLogin }) => (
  <Nav>
    <PageContainer fullWidth>
      <Flex alignItems="center">
        <Link dark to="/">
          <Image src={LogoSrc} width={16} ml={4} />
          <Bold ml={[0, 2]}>Band Protocol</Bold>
        </Link>
        <Flex ml="auto">
          {balance !== undefined ? (
            <Flex flexDirection="row" mr={4} alignItems="center">
              <Text mr={2} fontWeight="bold" color="#8868ff" fontSize="16px">
                My Balance:
              </Text>
              <Text mr={2} fontSize="16px" color={colors.text.grey}>
                {balance.pretty()}
              </Text>
              <HighlightBNDOrUSD isBND={isBND} toggle={toggleBalance} />
              <ProfileImage src={LogoSrc} />
            </Flex>
          ) : (
            <Button variant="primary" onClick={showLogin} mr={4}>
              Sign in
            </Button>
          )}
        </Flex>
      </Flex>
    </PageContainer>
  </Nav>
)
