import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@vinicius-ignite-design-system/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/fernandes-vinicius.png',
    alt: 'Vinícius Fernandes',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  // parameters: {
  //   backgrounds: {
  //     default: 'light',
  //   },
  // },
  args: {
    src: undefined,
  },
}
