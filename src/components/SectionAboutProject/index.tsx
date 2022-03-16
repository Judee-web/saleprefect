import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'

const SectionAboutProject = () => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Image>
          <source
            srcSet={require('@images/project.png?webp')}
            type="image/webp"
          />
          <source srcSet={require('@images/project.png')} type="image/png" />
          <img
            src={require('@images/project.png')}
            loading="lazy"
            alt="Tela do ecommerce com uma imagem do CMS por trás"
          />
        </S.Image>
        <div>
          <Heading>I was also a nobody</Heading>
          <S.Text>
            <p>
            Sometime around 2017, I was just a nobody struggling to survive with my family.
            </p>

            <p>
           I searched for jobs. I had no certificate because I was not given admission to the university.


            </p>

            <p>
              I need money to take care of my family. I applied to work as a teacher but I rejected because I had no qualification.
              I remember it was raining that day. The principal gave me a stern look so I had leave under the rain. I was wet from the rain.
              I was hurt, hungry and without money in my pocket.{' '}
              <strong>I was broken</strong>
            </p>
            <p>
            I struggled as I never gave up. As if my situation would have permitted it.           </p>
            <p>
            I surfed the internet day in day out for all legit ways to earn online as I was good at math.
            I thought I would see an online Job. Even still the little money I had spent on data seemed like a wasted effort.
            </p>
            <p>
           I was lucky one day to see a free masterclass advert on facebook. I was skeptical yet I needed to change my story.
           I asked questions about it. I have heard of internet scams so I didn't want to become a victim of such internet fraud.
            </p>
        <p>
          I found out they were going to teach student something called digital skills. I asked. What is a digital skill?
          I found out that digital skills was what I needed to change my financial story for good. I loved the opportuninty but I was still skeptical.
          so I enrolled with half my mind.
        </p>
        <p>
          I started the free masterclass. To my shocking surprise it was nothing as I thought. I thought they were going to scam us of all our money so I was prepared for anything they would throw at us.
        </p>
        <p>
          Yes because I was broke did not mean I would trust anyone easily. the class went on and the value given was massive.
          I applied what I learnt in the real world. That's how I made my first bucket of income legitly. You might want to ask how I 
          earned such an income <strong>?</strong>
        </p>
        <p><strong> I earned my first income by selling other people's products for them</strong></p>

        <p>I have decided to help as many that will give me the chance to impact with this skill I have learnt for free</p>
        <p>That is why I am giving out my free training. <strong>All you need to get started is your smartphone and internet connection</strong></p>

        <p><strong>Click on the Join now button to reserve your space as this opportunity will last just a couple of hours.</strong></p>

          </S.Text>
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
)

export default SectionAboutProject
