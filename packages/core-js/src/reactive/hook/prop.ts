import { isUsingState } from '@context/executionContext.ts'
import { useEffect } from '@hook/useEffect.ts'
import { GetState, useState } from '@hook/useState.ts'
import { RvjsFunction } from '@type/guard.ts'
import { RVJS_PROP_SYMBOL } from '@util/symbol.ts'

export type Prop<Value> = PropFn<Value> | GetState<Value>

export type PropFn<Value> = RvjsFunction<() => Value>

export const prop = <Value>(fn: () => Value) => {
  const propFn = fn as PropFn<Value>
  propFn.$$typeof = RVJS_PROP_SYMBOL
  isUsingState.clear()
  const propResult = propFn()
  const parentGetStates = [...isUsingState]
  isUsingState.clear()
  if (parentGetStates.length) {
    const [newState, setState] = useState(propResult)
    useEffect(() => {
      setState(propFn())
    }, parentGetStates)
    return newState
  }
  return propFn
}
