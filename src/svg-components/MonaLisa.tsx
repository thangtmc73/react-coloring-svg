// This file is generated by svgr. So please don't edit it manually.
import React, { SVGProps } from "react";
const childrenWithProps = (
  children: string | JSX.Element | JSX.Element[],
  callback: (id: string) => void,
  colors: MapColor
): (string | JSX.Element)[] =>
  React.Children.map(children, (child) => {
    // Checking isValidElement is the safe way and avoids a
    // typescript error too.
    if (React.isValidElement(child)) {
      if (child.props.id) {
        return React.cloneElement(child, {
          onClick: () => {
            callback(child.props.id);
          },
          fill: colors[child.props.id] || "#ffff",
          children: childrenWithProps(child.props.children, callback, colors),
        });
      }
      return React.cloneElement(child, {
        children: childrenWithProps(child.props.children, callback, colors),
      });
    }
    return child;
  });
interface ComponentProps extends SVGProps<SVGSVGElement> {
  onItemClick: (name: string) => void;
  colors: MapColor;
}
const SvgMonaLisa = React.memo((props: ComponentProps) => {
  const { onItemClick, colors } = props;
  return (
    <>
      {childrenWithProps(
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
          xmlSpace="preserve"
          {...props}
        >
          <rect
            id="path1"
            style={{
              strokeWidth: 1,
              stroke: "black",
            }}
            x={50.088}
            fill="#ffff"
            width={411.823}
            height={512}
          />
          <rect
            id="path2"
            style={{
              strokeWidth: 1,
              stroke: "black",
            }}
            x={60.194}
            y={10.105}
            fill="#ffff"
            width={391.613}
            height={491.789}
          />
          <g>
            <polygon
              id="path3"
              style={{
                strokeWidth: 1,
                stroke: "black",
              }}
              fill="#ffff"
              className="groupColor1"
              points="451.806,10.105 451.806,22.007 414.147,59.666 402.246,47.753 439.893,10.105  "
            />
            <polygon
              id="path4"
              style={{
                strokeWidth: 1,
                stroke: "black",
              }}
              fill="#ffff"
              className="groupColor1"
              points="109.754,47.753 97.841,59.666 60.194,22.018 60.194,10.105 72.107,10.105  "
            />
            <polygon
              id="path5"
              style={{
                strokeWidth: 1,
                stroke: "black",
              }}
              fill="#ffff"
              className="groupColor1"
              points="109.754,464.247 72.107,501.895 60.194,501.895 60.194,489.982 97.841,452.345  "
            />
            <polygon
              id="path6"
              style={{
                strokeWidth: 1,
                stroke: "black",
              }}
              fill="#ffff"
              className="groupColor1"
              points="451.806,489.993 451.806,501.895 439.893,501.895 402.246,464.247 414.147,452.345  "
            />
            <rect
              id="path7"
              style={{
                strokeWidth: 1,
                stroke: "black",
              }}
              x={87.736}
              y={37.648}
              fill="#ffff"
              className="groupColor1"
              width={336.516}
              height={436.705}
            />
          </g>
          <rect
            id="path8"
            style={{
              strokeWidth: 1,
              stroke: "black",
            }}
            x={97.841}
            y={47.752}
            fill="#ffff"
            width={316.306}
            height={416.494}
          />
          <rect
            id="path9"
            style={{
              strokeWidth: 1,
              stroke: "black",
            }}
            x={97.841}
            y={162.56}
            fill="#ffff"
            width={316.306}
            height={301.687}
          />
          <path
            id="path10"
            style={{
              strokeWidth: 1,
              stroke: "black",
            }}
            fill="#ffff"
            d="M97.837,235.912c46.665,0,52.022,16.857,89.198,20.718l117.307-42.087 c1.42-0.033,2.872-0.054,4.368-0.054c52.721,0,52.721,21.514,105.442,21.514V464.25H97.84L97.837,235.912z"
          />
          <path
            id="path11"
            style={{
              strokeWidth: 1,
              stroke: "black",
            }}
            fill="#ffff"
            d="M369.37,335.484v101.782c0,9.971-2.987,19.256-8.129,26.981H222.596l-3.02-31.517 c0,0,59.127-39.949,52.985-45.721L369.37,335.484z"
          />
          <path
            id="path12"
            style={{
              strokeWidth: 1,
              stroke: "black",
            }}
            fill="#ffff"
            d="M234.205,205.117l-16.371,34.765c0,20.582-0.095,61.623-15.659,74.767 c-1.637,1.364-12.361,9.048-14.128,10.28c-1.863,1.293-3.642-25.319-5.35-23.86V180.711c0,12.61,19.91-7.588,28.178,0.68 C216.759,187.275,225.819,203.136,234.205,205.117z"
          />
          <path
            id="path13"
            style={{
              strokeWidth: 1,
              stroke: "black",
            }}
            fill="#ffff"
            d="M291.099,432.734h-49.811h-9.49h-17.165l22.812-36.763c14.97,0,28.968,5.8,39.42,15.635 C283.008,417.372,287.919,424.537,291.099,432.734z"
          />
          <path
            id="path14"
            style={{
              strokeWidth: 1,
              stroke: "black",
            }}
            fill="#ffff"
            className="groupColor1"
            d="M183.066,132.798c3.334-31.068,29.644-55.268,61.603-55.268c17.106,0,32.598,6.94,43.821,18.15 c11.21,11.222,18.15,26.715,18.15,43.821v101.758c0,17.319,14.045,31.365,31.364,31.365L274.017,362.1 C274.017,362.1,185.924,110.318,183.066,132.798z"
          />
          <g>
            <path
              id="path15"
              style={{
                strokeWidth: 1,
                stroke: "black",
              }}
              fill="#ffff"
              d="M274.017,353.4l-11.483-13.195l-0.012-0.012c-52.437,21.511-76.557,0.554-69.373-47.155 c14.2-11.993,23.038-29.218,24.473-47.783c0.143-1.78,0.213-3.571,0.213-5.374v-14.733c3.381,0.795,6.904,1.222,10.522,1.222 c25.22,0,45.659-20.44,45.659-45.659V353.4H274.017z"
            />
            <path
              id="path16"
              style={{
                strokeWidth: 1,
                stroke: "black",
              }}
              fill="#ffff"
              d="M274.017,138.611v42.101c0,25.22-20.44,45.659-45.659,45.659c-3.618,0-7.141-0.427-10.522-1.222 c-8.387-1.981-15.872-6.263-21.757-12.148c-8.268-8.268-13.382-19.681-13.382-32.29V139.5c0-2.064,0.094-4.105,0.296-6.109 c0.024-0.202,0.047-0.403,0.071-0.593c2.859-22.48,22.053-39.847,45.292-39.847c12.61,0,24.022,5.113,32.29,13.369 C268.903,114.589,274.017,126,274.017,138.611z"
            />
          </g>
          <path
            id="path17"
            style={{
              strokeWidth: 1,
              stroke: "black",
            }}
            fill="#ffff"
            d="M274.017,180.711v20.167c0,25.22-20.44,45.659-45.659,45.659c-3.618,0-7.141-0.427-10.522-1.222 c-0.071-0.012-0.143-0.036-0.213-0.06c0.143-1.78,0.213-3.571,0.213-5.374v-14.733c3.381,0.795,6.904,1.222,10.522,1.222 C253.577,226.371,274.017,205.932,274.017,180.711z"
          />
          <path
            id="path18"
            style={{
              strokeWidth: 1,
              stroke: "black",
            }}
            fill="#ffff"
            d="M182.698,301.071c1.708-1.46,3.487-2.835,5.35-4.129c1.767-1.234,3.464-2.539,5.101-3.903 c11.779,26.988,38.281,46.087,69.373,47.155l0.012,0.012l-53.24,78.44c-11.59,0-31.14-18.506-38.744-26.097 c-7.592-7.592-12.29-26.956-12.29-38.546c0-11.376,2.776-22.397,7.9-32.183C170.253,313.977,175.841,306.907,182.698,301.071z"
          />
          <path
            id="path19"
            style={{
              strokeWidth: 1,
              stroke: "black",
            }}
            fill="#ffff"
            d="M237.444,395.971l-28.941,47.189c-31.128,0-50.242-35.659-50.242-66.799v-22.361 c0,11.59,4.698,22.088,12.29,29.68c7.604,7.592,18.102,12.29,29.693,12.29H237.444z"
          />
          <path
            id="path20"
            style={{
              strokeWidth: 1,
              stroke: "black",
            }}
            fill="#ffff"
            d="M231.792,432.73l-4.199,31.517H170.06c-7.399-9.533-11.801-21.513-11.801-34.515v-53.367 c0,31.135,25.241,56.365,56.376,56.365L231.792,432.73L231.792,432.73z"
          />
          <path
            id="path21"
            style={{
              strokeWidth: 1,
              stroke: "black",
            }}
            fill="#ffff"
            d="M369.369,304v31.484l-92.505,76.123c-10.451-9.835-24.449-15.635-39.419-15.635h-37.201 l62.291-55.766l12.551-11.246l62.92-56.336c8.66,0,16.501,3.511,22.183,9.194C365.858,287.488,369.369,295.329,369.369,304z"
          />
          <g>
            <path
              id="path22"
              style={{
                strokeWidth: 1,
                stroke: "black",
              }}
              fill="#ffff"
              d="M210.575,164.021v16.691c0,2.289-1.863,4.152-4.152,4.152c-2.302,0-4.152-1.863-4.152-4.152v-16.691 c0-3.227-2.622-5.836-5.836-5.836h-13.736v-8.304h13.736C204.228,149.88,210.575,156.215,210.575,164.021z"
            />
            <path
              id="path23"
              style={{
                strokeWidth: 1,
                stroke: "black",
              }}
              fill="#ffff"
              d="M242,161.737h-12.453c-2.293,0-4.152-1.858-4.152-4.152c0-2.293,1.858-4.152,4.152-4.152H242 c2.293,0,4.152,1.858,4.152,4.152C246.152,159.878,244.294,161.737,242,161.737z"
            />
            <path
              id="path24"
              style={{
                strokeWidth: 1,
                stroke: "black",
              }}
              fill="#ffff"
              d="M219.97,206.501h-12.453c-2.293,0-4.152-1.858-4.152-4.152c0-2.293,1.858-4.152,4.152-4.152h12.453 c2.293,0,4.152,1.858,4.152,4.152C224.122,204.642,222.263,206.501,219.97,206.501z"
            />
          </g>
        </svg>,
        onItemClick,
        colors
      )}
    </>
  );
});
export default SvgMonaLisa;
