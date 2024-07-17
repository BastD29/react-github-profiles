import { SVGProps } from "react";

export type SvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

const Svg: React.FC<SvgProps> = ({
  width,
  height,
  size,
  viewBox,
  children,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox || "0 0 24 24"}
      width={size || width || 24}
      height={size || height || 24}
      {...props}
    >
      {children}
    </svg>
  );
};

export default Svg;
