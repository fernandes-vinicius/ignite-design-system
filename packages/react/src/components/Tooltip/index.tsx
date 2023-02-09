import type { ReactNode } from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'

import { TooltipArrow, TooltipContent } from './styles'

export interface TooltipProps {
  text: string
  children: ReactNode
}

export function Tooltip({ text, children }: TooltipProps) {
  return (
    <TooltipPrimitive.Provider delayDuration={100}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>

        <TooltipPrimitive.Portal>
          <TooltipContent sideOffset={5}>
            {text}
            <TooltipArrow />
          </TooltipContent>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
