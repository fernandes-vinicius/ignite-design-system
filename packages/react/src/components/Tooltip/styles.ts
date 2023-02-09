import * as TooltipPrimitive from '@radix-ui/react-tooltip'

import { styled } from '../../styles'

export const TooltipContent = styled(TooltipPrimitive.Content, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  padding: '$3 $4',
  backgroundColor: '$gray900',
  borderRadius: '$sm',
  boxShadow: '4px 16px 24px rgba(0, 0, 0, 0.25)',

  fontFamily: '$default',
  fontWeight: '$medium',
  fontSize: '$sm',
  lineHeight: '$short',
  textAlign: 'center',
  letterSpacing: '-0.09px',
  color: '$gray100',

  cursor: 'default',
  userSelect: 'none',
})

export const TooltipArrow = styled(TooltipPrimitive.Arrow, {
  fill: '$gray900',
  width: '$4',
  height: '$2',
})
