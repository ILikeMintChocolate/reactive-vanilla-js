import {
  button_style,
  buttonWrapper_style,
  heading_style,
  wrapper_style,
} from '@example/core/useEffect/ex1.css.ts'
import { button, div, h1 } from '@rvjs/core/dom'
import { dynamic, useEffect, useState } from '@rvjs/core/reactive'

const Counter = () => {
  const [getCount, setCount] = useState(0)

  useEffect(() => {
    console.log(`count 값 변경 => ${getCount()}`)
  }, [getCount])

  return div({
    classes: [wrapper_style],
    children: [
      h1({
        classes: [heading_style],
        textContent: dynamic(() => `Count: ${getCount()}`),
      }),
      div({
        classes: [buttonWrapper_style],
        children: [
          button({
            textContent: '-1',
            classes: [button_style],
            onclick: () => setCount(getCount() - 1),
          }),
          button({
            textContent: '+1',
            classes: [button_style],
            onclick: () => setCount(getCount() + 1),
          }),
        ],
      }),
    ],
  })
}

export default Counter
