import Link from 'next/link';

interface Props {
  link: string;
  className?: string;
  target?: string;
}

export const CustomLink = ({ link, className, target = '_self' }: Props) => {
  return (
    <Link
      href={link}
      className={`size-full cursor-pointer absolute bottom-0 right-0 z-1 ${className}`}
      target={target}
      rel="noopener noreferrer">
    </Link>
  );
};
