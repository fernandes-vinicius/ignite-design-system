// import { ComponentProps, ElementType } from 'react'
// import { fontSizes } from '@ignite-ui/tokens'
import { styled } from '../styles'
import { ComponentProps } from '../types'

export const Text = styled('p', {
  fontFamily: '$default',
  lineHeight: '$base',
  margin: 0,
  color: '$gray100',

  variants: {
    size: {
      xxs: { fontSize: '$xxs' },
      xs: { fontSize: '$xs' },
      sm: { fontSize: '$sm' },
      md: { fontSize: '$md' },
      lg: { fontSize: '$lg' },
      xl: { fontSize: '$xl' },
      '2xl': { fontSize: '$2xl' },
      '4xl': { fontSize: '$4xl' },
      '5xl': { fontSize: '$5xl' },
      '6xl': { fontSize: '$6xl' },
      '7xl': { fontSize: '$7xl' },
      '8xl': { fontSize: '$8xl' },
      '9xl': { fontSize: '$9xl' },
    },
  },

  // variants: {
  //   size: Object.keys(fontSizes).reduce<Record<string, { fontSize: string }>>(
  //     (acc, cur) => {
  //       acc[cur] = {
  //         fontSize: `$${cur}`,
  //       }
  //       return acc
  //     },
  //     {},
  //   ),
  // },

  defaultVariants: {
    size: 'md',
  },
})

export interface TextProps extends ComponentProps<typeof Text> {
  // as?: ElementType
}

Text.displayName = 'Text'
