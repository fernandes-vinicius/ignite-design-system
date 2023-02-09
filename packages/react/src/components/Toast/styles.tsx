import * as AlertDialog from '@radix-ui/react-alert-dialog'

import { keyframes, styled } from '../../styles'

const contentShow = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(100%)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  },
})

const contentClose = keyframes({
  from: {
    opacity: 1,
    transform: 'translateX(0)',
  },
  to: {
    opacity: 0,
    transform: 'translateX(100%)',
  },
})

export const Content = styled(AlertDialog.Content, {
  position: 'fixed',
  bottom: '$8',
  right: '$8',

  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  gap: '$1',

  width: 360,
  padding: '$3 $5',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '$sm',

  '&:focus': {
    outline: 'none',
  },

  '&[data-state="open"]': {
    animation: `${contentShow} 200ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  '&[data-state="closed"]': {
    animation: `${contentClose} 200ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
})

export const Title = styled(AlertDialog.Title, {
  margin: '0',
  marginRight: '$8',

  fontFamily: '$default',
  fontWeight: '$bold',
  fontSize: '$xl',
  lineHeight: '$base',
  color: '$white',
})

export const Description = styled(AlertDialog.Description, {
  margin: 0,

  fontFamily: '$default',
  fontSize: '$sm',
  lineHeight: '$base',
  color: '$gray200',
})

export const CloseButton = styled('button', {
  all: 'unset',
  cursor: 'pointer',
  lineHeight: 0,

  position: 'absolute',
  top: '$4',
  right: '$4',

  svg: {
    color: '$gray200',

    '&:hover': {
      color: '$gray100',
    },
  },
})
