import React from 'react'

import Logo from 'components/Logo'
import Button from 'components/Button'
import * as S from './styles'

import { gaEvent } from 'utils/ga'
import Container from 'components/Container'

const onClick = () =>
  gaEvent({ action: 'click', category: 'cta', label: 'hero button' })

const SectionHero = () => (
  <S.Wrapper>
    <Container>
      {/* <Logo /> */}
      <S.Description>
          Glad You Made It!  </S.Description>
      <S.Content>
        <S.TextBlock>
          <S.Title>salesprefect</S.Title>
          <S.Description>
         Don't Miss This Lifetime Opportunity! Make Sure You Read All The Details Here To The Very End!
           </S.Description>
          
          <S.ButtonWrapper>
            <Button
              href="hhttps://wa.link/fsg4ik"
              onClick={onClick}
              wide
            >
              Join Now
            </Button>
          </S.ButtonWrapper>
          
        </S.TextBlock>

        <S.Image
          src="/img/output-onlinegiftools.gif"
          alt="Ilustração de um desenvolvedor em frente a um computador com várias linhas de código."
        />
      </S.Content>
    </Container>
  </S.Wrapper>
)

export default SectionHero
