import React from 'react';

/**
 * TechCartLogo Component
 * * A reusable SVG logo component for the "TechHub" brand.
 * * @param {string} variant - Controls the color theme. 
 * Use 'light' for light backgrounds (logo will be blue).
 * Use 'dark' for dark backgrounds (logo will be white).
 * @param {number} size    - Width and height of the logo in pixels.
 * @param {string} className - Any additional CSS classes (e.g., for margins).
 */
const TechCartLogo = ({ 
  variant = "light", 
  size = 40, 
  className = "" 
}) => {
  
  // 1. CONFIGURATION: Define the color palettes for each variant
  const themeColors = {
    // For Light Backgrounds: The logo uses Brand Blues
    light: {
      cartLines: "#2563EB", // Primary Blue
      circuits: "#0EA5E9",  // Lighter Cyan/Blue for details
      dots: "#1E40AF"       // Dark Blue for wheels
    },
    // For Dark Backgrounds: The logo uses White/Light Grays
    dark: {
      cartLines: "#FFFFFF", // Pure White
      circuits: "#E2E8F0",  // Very Light Gray (for slight contrast)
      dots: "#F8FAFC"       // Almost White
    }
  };

  // Select the colors based on the prop passed, defaulting to 'light' if invalid
  const colors = themeColors[variant] || themeColors.light;

  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 64 64" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="TechHub Logo" // Accessibility label
    >
      {/* --- PART 1: The Main Cart Shape --- */}
      <path 
        d="M6 10H14L18.5 38H48.5L54 18H16" 
        stroke={colors.cartLines} 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* --- PART 2: The Wheels --- */}
      <circle cx="20" cy="50" r="4" fill={colors.dots} />
      <circle cx="46" cy="50" r="4" fill={colors.dots} />

      {/* --- PART 3: The Circuit Lines (The "Tech" part) --- */}
      {/* Vertical line inside cart */}
      <path 
        d="M24 24H30V30" 
        stroke={colors.circuits} 
        strokeWidth="3" 
        strokeLinecap="round" 
      />
      {/* Horizontal zigzag inside cart */}
      <path 
        d="M36 32V26H42" 
        stroke={colors.circuits} 
        strokeWidth="3" 
        strokeLinecap="round" 
      />
      
      {/* --- PART 4: Circuit Nodes (The Dots on the lines) --- */}
      <circle cx="30" cy="30" r="2.5" fill={colors.circuits} />
      <circle cx="36" cy="26" r="2.5" fill={colors.circuits} />

      {/* --- PART 5: The Growth Arrow (Rising out of the cart) --- */}
      <path 
        d="M48 10L56 2" 
        stroke={colors.circuits} 
        strokeWidth="3" 
        strokeLinecap="round" 
      />
      {/* Arrowhead */}
      <path 
        d="M56 2V8M56 2H50" 
        stroke={colors.circuits} 
        strokeWidth="3" 
        strokeLinecap="round" 
      />
    </svg>
  );
};

export default TechCartLogo;