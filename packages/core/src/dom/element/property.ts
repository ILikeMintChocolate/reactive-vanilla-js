import { subscribeStateContext } from '@context/executionContext.ts'
import { Children } from '@dom/type.ts'
import { Element } from '@element/elementBlock.ts'
import { isDynamic } from '@hook/dynamic.ts'
import { RefObject } from '@hook/useRef.ts'
import { AddTypeToValues } from '@type/util.ts'
import { Properties } from 'csstype'

export const setProperty = (
  elementBlock: Element,
  key: string,
  value: unknown,
) => {
  if (isDynamic(value)) {
    subscribeStateContext.set({
      block: elementBlock,
      type: 'domProperty',
      property: key,
      value,
    })
    setProperty(elementBlock, key, value())
    subscribeStateContext.set(null)
  } else {
    if (customProperties.hasOwnProperty(key)) {
      // @ts-ignore
      customProperties[key](elementBlock, value)
    } else if (elementBlock.element.hasAttribute(key)) {
      elementBlock.element.setAttribute(key, value as string)
    } else {
      // @ts-ignore
      elementBlock.element[key] = value
    }
  }
}

export type ExtendedHTMLElement<T extends keyof HTMLElementTagNameMap> =
  HTMLElementTagNameMap[T] & CustomProperties

export interface CustomProperties {
  ref: RefObject<HTMLElement>
  children: Children
  style: AddTypeToValues<Properties, any>
  animation: AnimationProps
  className: string
}

interface AnimationProps {
  keyframes: Keyframe[] | PropertyIndexedKeyframes | null
  options?: number | KeyframeAnimationOptions
}

const customProperties = {
  ref: (parent: Element, refObject: RefObject<HTMLElement>) => {
    refObject.current = parent.element
  },
  children: (parent: Element, children: Children) => {
    parent.appendChildren(children)
  },
  style: (parent: Element, style: AddTypeToValues<Properties, any>) => {
    for (const property in style) {
      // @ts-ignore
      if (isDynamic(style[property])) {
        subscribeStateContext.set({
          block: parent,
          type: 'styleProperty',
          property: property,
          // @ts-ignore
          value: style[property],
        })
        // @ts-ignore
        parent.element.style[property] = style[property]()
        subscribeStateContext.set(null)
      } else {
        // @ts-ignore
        parent.element.style[property] = style[property]
      }
    }
  },
  animation: (parent: Element, animation: AnimationProps) => {
    parent.element.animate(animation.keyframes, animation.options)
  },
  className: (parent: Element, className: string) => {
    parent.element.className = className
  },
}

export const setStyleProperty = (
  elementBlock: Element,
  property: string,
  value: unknown,
) => {
  if (isDynamic(value)) {
    // @ts-ignore
    elementBlock.element.style[property] = value()
  } else {
    // @ts-ignore
    elementBlock.element.style[property] = value
  }
}
