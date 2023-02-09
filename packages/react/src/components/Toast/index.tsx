import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { X } from 'phosphor-react'

import { CloseButton, Content, Description, Title } from './styles'

export interface ToastProps {
  open: boolean
  title: string
  description?: string
}

export function Toast({ open = false, title, description }: ToastProps) {
  return (
    <AlertDialog.Root open={open}>
      <AlertDialog.Portal>
        <Content>
          <AlertDialog.Action asChild>
            <CloseButton>
              <X size={20} />
            </CloseButton>
          </AlertDialog.Action>

          <Title>{title}</Title>

          {description && <Description>{description}</Description>}
        </Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}

Toast.displayName = 'Toast'
