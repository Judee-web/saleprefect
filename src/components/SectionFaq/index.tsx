import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import faq from './content'
import * as S from './styles'

const SectionFaq = () => (
  <S.Wrapper>
    <S.Content>
      <Container>
        <Heading>FAQ</Heading>

        <S.Questions>
          {faq.map(({ question, answer }, index) => (
            <S.Question key={index}>
              <Heading lineBottom>{question}</Heading>
              <div dangerouslySetInnerHTML={{ __html: answer }} />
            </S.Question>
          ))}
        </S.Questions>

        <S.ExtraQuestion>
          <Heading lineBottom>Join the free masterclass Now!</Heading>
          <p>
           Click the link to get started{' '}
            <a
              href="hhttps://wa.link/fsg4ik"
              target="_blank"
              rel="noreferrer"
            >
             Free Masterclass
            </a>{' '}
            Join our community of students{' '}
            <a href="https://wa.link/a36wm5" target="_blank" rel="noreferrer">
              Join our whatsapp and telegram community of students.
            </a>
          </p>
        </S.ExtraQuestion>
      </Container>
    </S.Content>
  </S.Wrapper>
)

export default SectionFaq
