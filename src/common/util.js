
import * as _ from 'lodash'

export const COLORS = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'purple']

export function getVideoId (url) {
  let result = _.split(url, '/')
  return Number.parseInt(_.nth(result, -2))
}

export function getClientPositionOf (el) {
  let boundingClientRect = el.getBoundingClientRect()
  let x = boundingClientRect.left
  let y = boundingClientRect.top
  return [x, y]
}
