
import * as _ from 'lodash'

export const COLORS = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'purple']

export function getVideoId (url) {
  let result = _.split(url, '/')
  return _.nth(result, -2)
}
