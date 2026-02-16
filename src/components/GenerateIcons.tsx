// Helper component to generate PWA icons
// This creates simple SVG icons that can be converted to PNG for the PWA manifest

export function IconSVG({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <rect width="512" height="512" fill="#000000" />
      <g transform="translate(256, 256)">
        {/* Rocket icon */}
        <path
          d="M-50,-150 L0,-200 L50,-150 L40,-100 L60,-80 L60,-40 L40,-20 L20,-40 L20,-60 L0,-40 L-20,-60 L-20,-40 L-40,-20 L-60,-40 L-60,-80 L-40,-100 Z"
          fill="#ffffff"
          stroke="#ffffff"
          strokeWidth="4"
        />
        {/* Flame */}
        <path
          d="M-30,0 L0,80 L30,0 L20,20 L0,40 L-20,20 Z"
          fill="#ff6b00"
        />
        {/* Window */}
        <circle cx="0" cy="-120" r="15" fill="#000000" />
      </g>
      <text
        x="256"
        y="420"
        fontFamily="Arial, sans-serif"
        fontSize="48"
        fontWeight="bold"
        fill="#ffffff"
        textAnchor="middle"
      >
        THRUST
      </text>
    </svg>
  );
}

// Instructions for generating actual PNG files:
// 1. Use an online SVG to PNG converter
// 2. Generate 192x192 and 512x512 versions
// 3. Save as /public/icon-192.png and /public/icon-512.png
// Or use this component to render the icon in the browser and save as PNG

export default IconSVG;
