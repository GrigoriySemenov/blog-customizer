import { useEffect } from 'react';

import type { OptionType } from 'src/constants/articleProps';

type UseEnterSubmit = {
  onChange?: (option: OptionType) => void;
  option: OptionType;
  optionRef: React.RefObject<HTMLDivElement | null>;
};

export const useEnterSubmit = ({
  onChange,
  option,
  optionRef,
}: UseEnterSubmit): void => {
  useEffect(() => {
    const optionHtml = optionRef.current;

    if (!optionHtml) return;

    const handleEnterKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        onChange?.(option);
      }
    };

    optionHtml.addEventListener('keydown', handleEnterKeyDown);

    return (): void => {
      optionHtml.removeEventListener('keydown', handleEnterKeyDown);
    };
  }, [onChange, option, optionRef]);
};
