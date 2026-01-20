import Link from 'next/link';

interface Props {
  link: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
}

export const CustomLink = ({ link, children, className, target = '_blank' }: Props) => {
  return (
    <Link
      href={link}
      className={`size-full cursor-pointer absolute bottom-0 right-0 z-1 ${className}`}
      target={target}
      rel="noopener noreferrer">
      {children}
    </Link>
  );
};
