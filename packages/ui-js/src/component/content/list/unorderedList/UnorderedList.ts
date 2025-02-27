import { unorderedList_style } from '@content/list/unorderedList/UnorderedList.css.ts'
import {
  UnorderedListProps,
  unorderedListPropsType,
} from '@content/list/unorderedList/UnorderedList.props.ts'
import { dynamic, prop, ul } from '@rvjs/core'
import { checkProps } from '@rvjs/is'

const unorderedList = (props: UnorderedListProps) => {
  const { children, type = prop(() => 'square') } =
    checkProps<UnorderedListProps>(props, unorderedListPropsType)

  return ul({
    classes: [unorderedList_style],
    style: {
      listStyleType: dynamic(() => type()),
    },
    children,
  })
}

export default unorderedList
