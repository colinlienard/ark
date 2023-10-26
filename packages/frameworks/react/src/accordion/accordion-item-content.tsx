import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { ark, type HTMLArkProps } from '../factory'
import { Presence, splitPresenceProps, type PresenceProps } from '../presence'
import type { Assign } from '../types'
import { useAccordionContext } from './accordion-context'
import { useAccordionItemContext } from './accordion-item-context'

export interface AccordionItemContentProps
  extends Assign<HTMLArkProps<'div'>, Omit<PresenceProps, 'children' | 'fallback'>> {}

export const AccordionItemContent = forwardRef<HTMLDivElement, AccordionItemContentProps>(
  function AccordionItemContent(props, ref) {
    const [presenceProps, localProps] = splitPresenceProps(props)
    const api = useAccordionContext()
    const item = useAccordionItemContext()

    return (
      <Presence
        present={item.isOpen}
        {...presenceProps}
        fallback={<div {...api.getItemContentProps(item)} />}
      >
        <AccordionInnerContent ref={ref} {...localProps} />
      </Presence>
    )
  },
)

const AccordionInnerContent = forwardRef<HTMLDivElement, HTMLArkProps<'div'>>(
  function AccordionInnerContent(props, ref) {
    const api = useAccordionContext()
    const accordionItem = useAccordionItemContext()
    const mergedProps = mergeProps(api.getItemContentProps(accordionItem), props)

    return <ark.div {...mergedProps} ref={ref} />
  },
)
