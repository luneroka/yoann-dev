const contourOffsets = [-108, -90, -72, -54, -36, -18, 0, 18, 36, 54, 72, 90, 108];

const contour =
  "M-120 220C-18 220 62 216 138 192C224 165 266 74 363 86C444 96 444 186 541 195C640 204 697 180 781 188C875 197 918 216 1004 207C1090 198 1141 179 1231 188C1310 197 1404 211 1560 196";

export default function TopographicBackground() {
  return (
    <svg
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] w-full overflow-visible text-primary opacity-[0.12] dark:opacity-[0.16]"
      viewBox="0 0 1440 360"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="topographic-fade" x1="0" x2="1440" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="currentColor" />
          <stop offset="0.34" stopColor="currentColor" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.18" />
        </linearGradient>
      </defs>
      <g stroke="url(#topographic-fade)" strokeWidth="1.15">
        {contourOffsets.map((offset) => (
          <path key={offset} d={contour} transform={`translate(0 ${offset})`} />
        ))}
      </g>
    </svg>
  );
}
