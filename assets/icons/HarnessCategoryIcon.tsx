import * as React from "react"
import { TouchableOpacity } from 'react-native'
import Svg, { Path } from "react-native-svg"

type Props = {
  onPress?: () => void
}
function HarnessCategoryIcon({onPress}: Props) {
  return (
    <TouchableOpacity disabled onPress={onPress}>
          <Svg
      width={50}
      height={45.551731}
    >
      <Path
        d="M323.922 133.483c1.203 1.947 2.557 3.82 3.156 6.061 1.382.779 1.279 2.539 2.292 3.647.855 1.574 1.813 3.075 3.286 4.152-.681.67-.215 1.982.324 2.888.237 1.006-.968 1.9-1.987 1.94-1.53.513-1.325-1.693-.379-1.768-.776-.863-.003-2.203-.915-3.06-1.07-1.578-1.89-3.45-3.512-4.523-1.861-2.026-2.94-4.712-5.17-6.433-.896-.73-1.057-2.372-2.355-1.141-1.397.87-3.274.969-4.181 2.488-1.54 1.455-1.86 3.66-2.195 5.62-.756 1.454-1.028 3.734-3.019 3.926-1.38.54-1.97-.24-.958-1.353.705-1.084 1.092-2.295 1.542-3.473.797-.823 1.228-1.78 1.36-2.93.73-.873.226-1.983.817-2.897 1.145-2.055 3.505-3.034 4.886-4.912-1.125-.844-2.204-1.968-1.982-3.492.175-1.88-1.262-3.29-1.87-4.968-.827-1.675-1.607-3.365-1.725-5.258-.341-1.189-.023-2.787-.853-3.681-1.821-.484-3.752-.516-5.597-.152-.57.97-1.696.147-2.37-.28-1.33-.36-1.206-1.533-1.292-2.53.076-1.156 1.723-1.103 2.41-1.89 2.263-1.411 4.787-2.329 7.123-3.602-.157-.757-.276-2.533.347-2.683.175 1.928.767.61.93.084.702.737.396 2.129 1.533 2.504.5 1.11 1.001 2.477 1.986 3.158 1.068.395 2.815 1.011.723.372-2.001-.608.476.234 1.205.51-1.088-.29-3.004-.836-.9-.146 2.08.683-.204.017-1.07-.21.097.07 3.137 1.104 1.82.705-1.382-.423-2.363-.711-.431-.022 1.894.682 1.072.436-.353-.017-1.96-.632.706.297 1.346.543.832.31-2.263-.715-2.007-.599.515.206 3.275 1.18 2.111.813-.84-.258-3.21-1.034-1.154-.31 1.627.577 1.844.681.067.119-2.046-.651.467.22 1.237.509.335.147-3.194-.986-1.366-.34 1.845.65 1.335.536-.25.075-.728-.188 3.15 1.01 1.186.463-2.073-.567-.646-.131.585.249-1.668-.35-2.022-.388-.175.095-1.18-.22-1.722-.24.124.329-1.42-.392-1.616-.424.082.112-2.069-.47-.642-.051-.118.159-2.611-.479 1.314.287-.521.136-.66.016 2.159.515-.181.337 2.346.268-.929.128 1.041.284-1.6.113.585 1.498.91 2.15 1.224 1.888 3.722 1.264 5.615 1.705 1.577-.009 2.683 1.313 4.101 1.663 3.505.35 6.993-.542 10.4-1.224 2.378-.476 4.844-.183 7.16.271 1.75.343 3.473.195 5.193.828 2.27.834 3.623 2.917 4.717 4.9.031 1.005 1.713 2.068 1.692 1.132 1.49-.488 2.89.61 4.416.423 1.24-.136 2.754.027 3.795-.636.84-1.594 1.81-3.205 2.056-5.017-1.355.368-1.56-.455-1.619-1.163-.944-.726.772-1.024-.148-2.053-1.438-.618-1.804-.825-.33-1.3.8-1.65 2.933-2.224 4.512-1.343 1.29.63 1.339 2.271 1.29 3.537-1.115.751 1.126 1.384 1.32 2.309 1.493 1.888 2.563 4.134 2.6 6.577-.06.98.032 2.411-.672 3.073-.941.516-.314 1.902-.658 2.774.477 1.21-.03 2.27-1.344 2.469-1.096.26-1.024 2.119-2.429 1.37-.969-.027-2.683-.513-3.179-.249-4.425-1.175-8.478 2.315-12.607 5.811.272.107-1.715.42-2.136-.799-1.232-1.268-1.648-3.12-3.09-4.227-1.004-1.047-1.796-2.267-3.014-3.086-.395-.871-2.398-2.097-2.263-.307-.033 2.16 1.373 4.342 3.052 5.696.71 1.038-.83 1.827-1.393 2.59-1.36 1.401-2.202 3.215-3.338 4.794-.038 1.06-.162 2.402-1.401 2.605-1.154.972 1.164 1.4-.595 2.173-.5.63-2.498 1.496-2.223.068-.11-1.386.027-2.71.677-3.958 1.018-1.969 2.782-3.515 3.886-5.4.468-1.283-.465-2.513-1.146-3.543-2.172-2.445-4.132-5.055-6.049-7.694-.623.367-1.846 1.029-2.86 1.267-3.121.913-6.534.912-9.531 2.206z"
        transform="translate(-299.584 -101.555)"
        opacity={1}
        fill="#000"
        fillOpacity={1}
        fillRule="evenodd"
        stroke="none"
        strokeWidth="1px"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity={1}
      />
      <Path
        transform="translate(-299.584 -101.555) matrix(.71904 0 0 .71904 322.422 107.013)"
        d="M68.393 47.598a7.679 7.679 0 11-15.357 0 7.679 7.679 0 1115.357 0z"
        opacity={1}
        fill="#000"
        fillOpacity={1}
        fillRule="nonzero"
        stroke="#fff"
        strokeWidth={1}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        markerStart="none"
        markerMid="none"
        markerEnd="none"
        strokeMiterlimit={4}
        strokeDasharray="none"
        strokeDashoffset={0}
        strokeOpacity={1}
      />
      <Path
        transform="translate(-299.584 -101.555) matrix(.75437 0 0 .75437 320.31 105.299)"
        d="M68.393 47.598a7.679 7.679 0 11-15.357 0 7.679 7.679 0 1115.357 0z"
        opacity={1}
        fill="none"
        fillOpacity={1}
        fillRule="nonzero"
        stroke="#000"
        strokeWidth={1}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        markerStart="none"
        markerMid="none"
        markerEnd="none"
        strokeMiterlimit={4}
        strokeDasharray="none"
        strokeDashoffset={0}
        strokeOpacity={1}
      />
      <Path
        transform="translate(-299.584 -101.555) translate(300.753 99.679)"
        d="M68.393 47.598a7.679 7.679 0 11-15.357 0 7.679 7.679 0 1115.357 0z"
        opacity={1}
        fill="#000"
        fillOpacity={1}
        fillRule="nonzero"
        stroke="#fff"
        strokeWidth={1}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        markerStart="none"
        markerMid="none"
        markerEnd="none"
        strokeMiterlimit={4}
        strokeDasharray="none"
        strokeDashoffset={0}
        strokeOpacity={1}
      />
      <Path
        transform="translate(-299.584 -101.555) matrix(1.04913 0 0 1.04913 297.815 97.296)"
        d="M68.393 47.598a7.679 7.679 0 11-15.357 0 7.679 7.679 0 1115.357 0z"
        opacity={1}
        fill="none"
        fillOpacity={1}
        fillRule="nonzero"
        stroke="#000"
        strokeWidth={1}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        markerStart="none"
        markerMid="none"
        markerEnd="none"
        strokeMiterlimit={4}
        strokeDasharray="none"
        strokeDashoffset={0}
        strokeOpacity={1}
      />
      <Path
        transform="translate(-299.584 -101.555) translate(295.574 96.554)"
        d="M25.57 23.545l.126.947 3.409.126 2.336.568 7.829 3.22 2.778 1.137 3.85 2.146 8.46 3.22-.504.82c3.804 5.31 11.424 15.745 11.932 15.532.423-.177 1.83-6.996 2.652-10.417l1.2-1.326.568-.758.63-.252.98-.257 3.815.29c1.263.062.637.464 1.232-.486.473-.395 1.988-1.126 1.988-1.126l.037-2.13s-.207.442-1.8.805c-1.595.363-4.041.378-4.041.378l-1.705.695-1.01.505-.947-.379-1.957-.82-.38.378L35.293 24.43l-.315.757L66.544 37.12l-.253.568 2.968.947-.695.316-21.024-8.082-4.23-2.21-12.5-4.987-1.705-.316-3.536.19z"
        opacity={1}
        fill="#fff"
        fillOpacity={1}
        fillRule="evenodd"
        stroke="none"
        strokeWidth="1px"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity={1}
      />
      <Path
        transform="translate(-299.584 -101.555) translate(295.448 96.806)"
        d="M10.607 16.221a.947.947 0 11-1.894 0 .947.947 0 111.894 0z"
        opacity={1}
        fill="#fff"
        fillOpacity={1}
        fillRule="nonzero"
        stroke="none"
        strokeWidth={1}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        markerStart="none"
        markerMid="none"
        markerEnd="none"
        strokeMiterlimit={4}
        strokeDasharray="none"
        strokeDashoffset={0}
        strokeOpacity={1}
      />
      <Path
        d="M305.676 113.09c6.573 3.002 13.982 2.913 20.818 5.025 6.125 1.6 12.235 3.288 18.443 4.529 17.951 3.654 12.936 6.188 9.731 2.569"
        transform="translate(-299.584 -101.555)"
        fill="none"
        fillOpacity={0.75}
        fillRule="evenodd"
        stroke="#fff"
        strokeWidth="1px"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity={1}
      />
      <Path
        transform="translate(-299.584 -101.555) translate(295.574 96.554)"
        d="M56.964 38.179c-1.4-1.981.082-2.243 1.786-1.83l4.732 1.785-2.277 5.848s-3.133-3.87-4.24-5.803z"
        fill="#000"
        fillOpacity={1}
        fillRule="evenodd"
        stroke="none"
        strokeWidth="1px"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity={1}
      />
    </Svg>
    </TouchableOpacity>
  )
}

export default HarnessCategoryIcon