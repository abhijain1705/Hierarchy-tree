type Props = {
  zoomIn: (
    step?: number,
    animationTime?: number,
    animationType?:
      | "easeOut"
      | "linear"
      | "easeInQuad"
      | "easeOutQuad"
      | "easeInOutQuad"
      | "easeInCubic"
      | "easeOutCubic"
      | "easeInOutCubic"
      | "easeInQuart"
      | "easeOutQuart"
      | "easeInOutQuart"
      | "easeInQuint"
      | "easeOutQuint"
      | "easeInOutQuint"
  ) => void;
  zoomOut: (
    step?: number,
    animationTime?: number,
    animationType?:
      | "easeOut"
      | "linear"
      | "easeInQuad"
      | "easeOutQuad"
      | "easeInOutQuad"
      | "easeInCubic"
      | "easeOutCubic"
      | "easeInOutCubic"
      | "easeInQuart"
      | "easeOutQuart"
      | "easeInOutQuart"
      | "easeInQuint"
      | "easeOutQuint"
      | "easeInOutQuint"
  ) => void;
  reset: (
    animationTime?: number,
    animationType?:
      | "easeOut"
      | "linear"
      | "easeInQuad"
      | "easeOutQuad"
      | "easeInOutQuad"
      | "easeInCubic"
      | "easeOutCubic"
      | "easeInOutCubic"
      | "easeInQuart"
      | "easeOutQuart"
      | "easeInOutQuart"
      | "easeInQuint"
      | "easeOutQuint"
      | "easeInOutQuint"
  ) => void;
};

const Controls = ({ zoomIn, zoomOut, reset }: Props) => {
  return (
    <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
      <button
        data-tooltip-target="tooltip-default"
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white min-w-14 font-bold p-4 rounded-l"
        onClick={() => zoomIn()}
      >
        Zoom In +
      </button>
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 min-w-14 font-bold p-4 rounded-l"
        onClick={() => zoomOut()}
      >
        Zoom Out -
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white min-w-14 font-bold p-4 rounded-l"
        onClick={() => reset()}
      >
        Reset x
      </button>
    </div>
  );
};
export default Controls;
