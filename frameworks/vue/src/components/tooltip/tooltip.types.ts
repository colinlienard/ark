import type * as tooltip from '@zag-js/tooltip'

export interface RootProps {
  /**
   * Custom label for the tooltip.
   */
  'aria-label'?: string
  /**
   * The close delay of the tooltip.
   */
  closeDelay?: number
  /**
   * Whether to close the tooltip when the Escape key is pressed.
   */
  closeOnEsc?: boolean
  /**
   * Whether to close the tooltip on pointerdown.
   */
  closeOnPointerDown?: boolean
  /**
   * The initial open state of the tooltip when it is first rendered.
   * Use when you do not need to control its open state.
   */
  defaultOpen?: boolean
  /**
   * Whether the tooltip is disabled
   */
  disabled?: boolean
  /**
   * The `id` of the tooltip.
   */
  id?: string
  /**
   * The ids of the elements in the tooltip. Useful for composition.
   */
  ids?: Partial<{ trigger: string; content: string; arrow: string; positioner: string }>
  /**
   * Whether the tooltip's content is interactive.
   * In this mode, the tooltip will remain open when user hovers over the content.
   * @see https://www.w3.org/TR/WCAG21/#content-on-hover-or-focus
   */
  interactive?: boolean
  /**
   * Whether the tooltip is open
   */
  open?: boolean
  /**
   * The open delay of the tooltip.
   */
  openDelay?: number
  /**
   * The user provided options used to position the popover content
   */
  positioning?: tooltip.PositioningOptions
}

export type RootEmits = {
  /**
   * Function called when the tooltip is opened.
   */
  openChange: [details: tooltip.OpenChangeDetails]
  /**
   * Function called when the tooltip is updated.
   */
  'update:open': [open: boolean]
}