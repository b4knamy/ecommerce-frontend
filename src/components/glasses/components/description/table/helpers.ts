import { RefObject } from 'react'
import { RelatedInfoType } from '../../../index.type'

export default function arrTdResolver(td: RelatedInfoType[]) {
  let valueToString = ""

  td.forEach((value) => {
    valueToString += `, ${value.name}`
  })

  return valueToString.slice(2)
}


export const hideOrShowTableHandler = (hideContainer: RefObject<HTMLTableElement | null>) => () => {
  if (hideContainer.current instanceof HTMLTableElement) {
    const value = hideContainer.current.style.display

    if (value === "none") {
      hideContainer.current.style.display = "flex"
      return
    }

    hideContainer.current.style.display = "none"
    return
  }
}
