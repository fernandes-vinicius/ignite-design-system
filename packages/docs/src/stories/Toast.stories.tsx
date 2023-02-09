import type { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastProps } from '@vinicius-ignite-design-system/react'

export default {
  title: 'Overlay/Toast',
  component: Toast,
  args: {
    open: true,
    title: 'Olá, eu sou um toast!',
    description: 'Sou utilizado para mostrar mensagens de alerta na tela'
  },
  argTypes: {
    open: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
