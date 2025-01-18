import classNames from 'classnames';
import { ReactNode } from 'react';

// FontVariant for the new categories and variants
type FontVariant =
  | 'D1'
  | 'D2'
  | 'D3'
  | 'D4' // Display
  | 'H1'
  | 'H2'
  | 'H3'
  | 'H4' // Headings
  | 'S1'
  | 'S2'
  | 'S3'
  | 'S4' // Subheadings
  | 'L1'
  | 'L2'
  | 'L3'
  | 'L4' // Labels
  | 'P1'
  | 'P2'
  | 'P3'
  | 'P4'; // Paragraphs

interface TypographyProps {
  id?: string;
  variant: FontVariant;
  className?: string;
  children:
    | string
    | string[]
    | JSX.Element
    | JSX.Element[]
    | number
    | undefined
    | null
    | (string | JSX.Element)[]
    | ReactNode;
}

const typographyClasses = {
  D1: 'text-[64pt] leading-[80pt] font-[700]',
  D2: 'text-[56pt] leading-[72pt] font-[700]',
  D3: 'text-[48pt] leading-[64pt] font-[700]',
  D4: 'text-[40pt] leading-[56pt] font-[700]',

  H1: 'text-[32pt] leading-[40pt] font-[600]',
  H2: 'text-[28pt] leading-[36pt] font-[600]',
  H3: 'text-[24pt] leading-[32pt] font-[600]',
  H4: 'text-[20pt] leading-[28pt] font-[600]',

  S1: 'text-[18pt] leading-[24pt] font-[600]',
  S2: 'text-[16pt] leading-[22pt] font-[600]',
  S3: 'text-[14pt] leading-[20pt] font-[600]',
  S4: 'text-[12pt] leading-[16pt] font-[600]',

  L1: 'text-[18pt] leading-[24pt] font-[500]',
  L2: 'text-[16pt] leading-[22pt] font-[500]',
  L3: 'text-[14pt] leading-[20pt] font-[500]',
  L4: 'text-[12pt] leading-[16pt] font-[500]',

  P1: 'text-[18pt] leading-[24pt] font-[400]',
  P2: 'text-[16pt] leading-[22pt] font-[400]',
  P3: 'text-[14pt] leading-[20pt] font-[400]',
  P4: 'text-[12pt] leading-[16pt] font-[400]',
};

export const Typography: React.FC<TypographyProps> = ({
  id,
  variant,
  className,
  children,
}) => {
  return (
    <p
      id={id}
      className={classNames(
        'font-inter',
        typographyClasses[variant],
        className
      )}
    >
      {children}
    </p>
  );
};
