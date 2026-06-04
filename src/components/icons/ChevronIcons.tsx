export const ChevronRightIcon = ({ inverted = false }: { inverted?: boolean }) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ filter: inverted ? 'invert(1)' : 'none' }}>
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

export const ChevronLeftIcon = ({ inverted = false }: { inverted?: boolean }) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ filter: inverted ? 'invert(1)' : 'none' }}>
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);
