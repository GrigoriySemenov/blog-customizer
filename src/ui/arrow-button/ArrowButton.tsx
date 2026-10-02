import { clsx } from 'clsx';
import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';

export type OnClick = () => void;

type ArrowButtonProps = {
  isOpen: boolean;
  onClick: OnClick;
};

export const ArrowButton = ({
  isOpen,
  onClick,
}: ArrowButtonProps): React.JSX.Element => {
  return (
    <button
      type="button"
      aria-label="Открыть/Закрыть форму параметров статьи"
      aria-expanded={isOpen}
      className={clsx(styles.container, { [styles.container_open]: isOpen })}
      onClick={onClick}
    >
      <img
        src={arrow}
        alt=""
        className={clsx(styles.arrow, { [styles.arrow_open]: isOpen })}
      />
    </button>
  );
};
