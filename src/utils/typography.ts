/**
 * Typography utility classes and styles based on IBM Plex Sans design system
 * 
 * Design System Typography Specifications:
 * - H0 Title: IBM Plex Sans Medium 18/24
 * - H1 Title: IBM Plex Sans Medium 16/24
 * - H2 Title: IBM Plex Sans Medium 15/20
 * - H2 Text: IBM Plex Sans Regular 15/20
 * - H2 Subtext: IBM Plex Sans Light 15/20
 * - H3 Title: IBM Plex Sans Medium 14/16
 * - H3 Text: IBM Plex Sans Regular 14/16
 * - H4 Title: IBM Plex Sans Medium 13/16
 * - H4 Text: IBM Plex Sans Regular 13/16
 */

/**
 * Base typography classes for consistent font-family application
 * Use these as className strings in your components
 */
export const TYPOGRAPHY_CLASSES = {
  // Font family - IBM Plex Sans
  fontFamily: "font-['IBM_Plex_Sans',_sans-serif]",
  
  // H0 - 18px/24px
  h0Title: "font-['IBM_Plex_Sans',_sans-serif] text-[length:var(--text-h0-size)] leading-[var(--text-h0-line-height)] font-[number:var(--font-weight-medium)]",
  
  // H1 - 16px/24px
  h1Title: "font-['IBM_Plex_Sans',_sans-serif] text-[length:var(--text-h1-size)] leading-[var(--text-h1-line-height)] font-[number:var(--font-weight-medium)]",
  
  // H2 - 15px/20px
  h2Title: "font-['IBM_Plex_Sans',_sans-serif] text-[length:var(--text-h2-size)] leading-[var(--text-h2-line-height)] font-[number:var(--font-weight-medium)]",
  h2Text: "font-['IBM_Plex_Sans',_sans-serif] text-[length:var(--text-h2-size)] leading-[var(--text-h2-line-height)] font-[number:var(--font-weight-normal)]",
  h2Subtext: "font-['IBM_Plex_Sans',_sans-serif] text-[length:var(--text-h2-size)] leading-[var(--text-h2-line-height)] font-[number:var(--font-weight-light)]",
  
  // H3 - 14px/16px
  h3Title: "font-['IBM_Plex_Sans',_sans-serif] text-[length:var(--text-h3-size)] leading-[var(--text-h3-line-height)] font-[number:var(--font-weight-medium)]",
  h3Text: "font-['IBM_Plex_Sans',_sans-serif] text-[length:var(--text-h3-size)] leading-[var(--text-h3-line-height)] font-[number:var(--font-weight-normal)]",
  
  // H4 - 13px/16px
  h4Title: "font-['IBM_Plex_Sans',_sans-serif] text-[length:var(--text-h4-size)] leading-[var(--text-h4-line-height)] font-[number:var(--font-weight-medium)]",
  h4Text: "font-['IBM_Plex_Sans',_sans-serif] text-[length:var(--text-h4-size)] leading-[var(--text-h4-line-height)] font-[number:var(--font-weight-normal)]",
} as const;

/**
 * Typography styles as React CSSProperties objects
 * Use these for inline styles when you need to override or combine with other styles
 */
export const TYPOGRAPHY_STYLES = {
  // Font weights using CSS variables
  fontWeights: {
    medium: { fontWeight: 'var(--font-weight-medium)' } as React.CSSProperties, // 500
    normal: { fontWeight: 'var(--font-weight-normal)' } as React.CSSProperties, // 400
    light: { fontWeight: 'var(--font-weight-light)' } as React.CSSProperties,   // 300
  },
  
  // Complete typography styles (size + line-height + weight)
  h0Title: {
    fontSize: 'var(--text-h0-size)',
    lineHeight: 'var(--text-h0-line-height)',
    fontWeight: 'var(--font-weight-medium)',
  } as React.CSSProperties,
  
  h1Title: {
    fontSize: 'var(--text-h1-size)',
    lineHeight: 'var(--text-h1-line-height)',
    fontWeight: 'var(--font-weight-medium)',
  } as React.CSSProperties,
  
  h2Title: {
    fontSize: 'var(--text-h2-size)',
    lineHeight: 'var(--text-h2-line-height)',
    fontWeight: 'var(--font-weight-medium)',
  } as React.CSSProperties,
  
  h2Text: {
    fontSize: 'var(--text-h2-size)',
    lineHeight: 'var(--text-h2-line-height)',
    fontWeight: 'var(--font-weight-normal)',
  } as React.CSSProperties,
  
  h2Subtext: {
    fontSize: 'var(--text-h2-size)',
    lineHeight: 'var(--text-h2-line-height)',
    fontWeight: 'var(--font-weight-light)',
  } as React.CSSProperties,
  
  h3Title: {
    fontSize: 'var(--text-h3-size)',
    lineHeight: 'var(--text-h3-line-height)',
    fontWeight: 'var(--font-weight-medium)',
  } as React.CSSProperties,
  
  h3Text: {
    fontSize: 'var(--text-h3-size)',
    lineHeight: 'var(--text-h3-line-height)',
    fontWeight: 'var(--font-weight-normal)',
  } as React.CSSProperties,
  
  h4Title: {
    fontSize: 'var(--text-h4-size)',
    lineHeight: 'var(--text-h4-line-height)',
    fontWeight: 'var(--font-weight-medium)',
  } as React.CSSProperties,
  
  h4Text: {
    fontSize: 'var(--text-h4-size)',
    lineHeight: 'var(--text-h4-line-height)',
    fontWeight: 'var(--font-weight-normal)',
  } as React.CSSProperties,
} as const;

/**
 * Design system colors using CSS variables
 * Use these for consistent color application
 */
export const COLORS = {
  // Primary colors
  primary: 'var(--primary)',
  secondary: 'var(--text-secondary)',
  
  // State colors
  error: 'var(--error)',
  success: 'var(--success)',
  warning: 'var(--warning)', 
  
  // Border and background
  border: 'var(--border)',
  borderLight: 'var(--border-light)',
  bgDisabled: 'var(--bg-disabled)',
  bgWhite: 'var(--card)', // Assuming card is white/base background
  
  // Theme-aware colors
  textSecondary: 'var(--text-secondary)',
  foreground: 'var(--foreground)',
  background: 'var(--background)',
  muted: 'var(--muted)',
} as const;
