import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipProps, Box, Button } from '@vinicius-ignite-design-system/react'

export default {
  title: 'Overlay/Tooltip',
  component: Tooltip,
  args: {
    text: 'Este é um tooltip',
    children: <Button>Passe o mouse sobre mim</Button>
  },
  decorators: [
    (Story) => {
      return (
        <Box css={{ padding: '$20' }}>
          {Story()}
        </Box>
      )
    },
  ],
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
