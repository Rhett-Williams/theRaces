import * as React from "react"
import { TouchableOpacity } from 'react-native'
import Svg, { Path } from "react-native-svg"

type Props = {
  onPress?: () => void
}
function HorseCategoryIcon({onPress}: Props) {
  return (
    <TouchableOpacity disabled onPress={onPress}>
    <Svg
      id="Layer_1"
      x="0px"
      y="0px"
      viewBox="0 0 122.88 109.03"
    >
      <Path
        d="M21.2 72.04c4.63 1.68 11.49-2.09 22-14.74 3.98 1.47 7.1 4.73 8.46 11.72 2.58 13.31-1.52 21.83-7.22 33.54-1.06 2.17-2.12 4.32-3.15 6.48h81.29l-.25-.2c5.55-39.24-31.98-58.51-4.56-46.4-11.78-28.52-48.09-37.8-22.47-34.84C82.12 15.55 65.5 8.89 41.87 13.1 36.85 5.77 24.84-9.86 28.52 8.86L22.5 3.49l-.33 18.89C15.01 27.84 11.1 46.03 5.56 57.86.82 62.56-1 68.18.51 76.92c7.38 9.51 19.03 7.15 20.69-4.88z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </Svg>
    </TouchableOpacity>
  )
}

export default HorseCategoryIcon