// backgroundUtils.ts

export const generateBackgroundSVG = (color: string): string => {
    return `
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 1024"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="background-svg"
      >
        <!-- White border rectangle -->
        <rect width="100%" height="100%" fill="${color}" />
      </svg>
    `;
  };
  