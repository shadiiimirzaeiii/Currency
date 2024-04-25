import { FC } from "react";
import styles from "./styles/Button.module.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  primary?: boolean;
  outline?: boolean;
  isDisabled?: boolean;
}

function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}


const Button: FC<Props> = ({
  children,
  primary,
  outline,
  isDisabled,
  ...attributes
}) => {
  const className = classNames(
    styles.base,
    primary && styles.primary,
    outline && styles.outline,
    isDisabled && styles.isDisabled
  );

  return (
    <>
      <button className={className} {...attributes}>
        {children}
      </button>
    </>
  );
};

export default Button;
