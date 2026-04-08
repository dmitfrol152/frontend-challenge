import clsx from 'clsx';
import styles from './button-ui.module.scss';
import type { ButtonUiProps } from './types';

export function ButtonUi({
  type,
  size,
  variant,
  onClick,
  className,
  children,
}: ButtonUiProps) {
  const classNameCustom = clsx(
    styles.button,
    className,
    {
      s: styles.buttonSizeS,
      m: styles.buttonSizeM,
    }[size],
    variant && { main: styles.buttonVariantMain }[variant],
  );

  return (
    <button className={classNameCustom} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
