import Svg, { Polygon } from "react-native-svg";

type Props = {
  size?: number;
  color?: string;
  solid?: boolean;
};

const Play = (props: Props) => {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      fill={!props.solid ? "none" : props.color || "black"}
      stroke={props.color || "black"}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <Polygon points="6 3 20 12 6 21 6 3" />
    </Svg>
  );
};

export default Play;
