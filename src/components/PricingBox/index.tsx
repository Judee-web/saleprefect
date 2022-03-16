import React from 'react'

import Button from 'components/Button'
import { gaEvent } from 'utils/ga'

import * as S from './styles'

const onClick = () =>
  gaEvent({ action: 'click', category: 'buy', label: 'pricing box button' })

const PricingBox = () => (
  <S.Box>
    <S.Prices>
      <S.FullPrice>
        Original <span>N100,000</span> price
      </S.FullPrice>
      <S.DiscountPrice>FREE
        <span></span> 
      </S.DiscountPrice>
    </S.Prices>
    <S.BenefitsList>
      <S.BenefitsItem>
        Access <strong>to free training</strong>
      </S.BenefitsItem>

      <S.BenefitsItem>
        Access <strong>to free</strong> study materials
      </S.BenefitsItem>

      <S.BenefitsItem>
        Forever <strong>Access</strong> to my whatsapp space
      </S.BenefitsItem>

      <S.BenefitsItem>
        Access<strong> to </strong> my free study videos
      </S.BenefitsItem>
    </S.BenefitsList>

    <Button
      href="hhttps://wa.link/fsg4ik"
      onClick={onClick}
      withPrice
    >
      <p>Join Now!</p>
      <div>
        <S.ButtonFullPrice>N100,000</S.ButtonFullPrice>
        <S.ButtonDiscountPrice>FREE</S.ButtonDiscountPrice>
      </div>
    </Button>
  </S.Box>
)

export default PricingBox
