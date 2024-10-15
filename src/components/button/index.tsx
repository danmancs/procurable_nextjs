import { css } from 'css';
import Link from 'next/link';

interface IButton {
  variant?: 'projects' | 'marine' | 'default';
  primary?: boolean; // Add the primary prop as optional
  href?: string;
  children: React.ReactNode;
  modifier?: string;
}

const projectsGradient = css`
  background: linear-gradient(to right, #d5713b 0%, #443f3c 100%);
  color: white;
  border: none;
  &:hover {
    background: linear-gradient(to right, #443f3c 0%, #d5713b 100%);
  }
`;

const marineGradient = css`
  background: linear-gradient(to right, #00173b 0%, #d8d9e3 100%);
  color: white;
  border: none;
  &:hover {
    background: linear-gradient(to right, #d8d9e3 0%, #00173b 100%);
  }
`;

const primaryStyle = css`
  background: #0070f3;
  color: white;
  border: none;
  &:hover {
    background: #005bb5;
  }
`;

const defaultStyle = css`
  background: white;
  color: #4b5563;
  border: 1px solid #d1d5db;
  &:hover {
    background: #f3f4f6;
  }
`;

const Button = ({ variant = `default`, primary = false, href = `#`, children }: IButton) => {
  const baseStyle = `font-sans font-medium py-2 px-4
  rounded focus:outline-none w-64 h-20
  text-center flex items-center justify-center whitespace-normal break-words`;

  let variantStyle: string | ReturnType<typeof css> = ``;

  if (primary) {
    variantStyle = primaryStyle; // Apply primary style if primary is true
  } else if (variant === `projects`) {
    variantStyle = projectsGradient;
  } else if (variant === `marine`) {
    variantStyle = marineGradient;
  } else {
    variantStyle = defaultStyle;
  }

  return (
    <Link href={href} passHref>
      <button type="button" className={tw(baseStyle, variantStyle)}>
        {children}
      </button>
    </Link>
  );
};

export default Button;
