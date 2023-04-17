import { useClickOutside } from '@shared/ui/common/hooks/useClickOutside';
import { FC, ReactElement, useCallback, useRef, useState } from 'react';

interface IChildrenProps {
  isActive: boolean;
  onClose: VoidFunction;
  onOpen: VoidFunction;
  toggle: VoidFunction;
}

interface IProps {
  isAutoClose?: boolean;
  content: ((props: IChildrenProps) => ReactElement) | ReactElement;
  children: ((props: IChildrenProps) => ReactElement) | ReactElement;
  eventName?: 'click' | 'mouseover';
}

export const Dropdown: FC<IProps> = ({
  isAutoClose = false,
  children,
  content,
  eventName = 'click',
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const callback = useCallback(() => {
    if (!isAutoClose || !isActive) {
      return;
    }

    setIsActive(false);
  }, [isActive])
  useClickOutside(ref, callback, eventName);

  const childrenProps: IChildrenProps = {
    isActive,
    onClose: () => setIsActive(false),
    onOpen: () => setIsActive(true),
    toggle: () => setIsActive((prev) => !prev),
  };

  const contentElement =
    typeof content === 'function' ? content(childrenProps) : content;
  const childrenElement =
    typeof children === 'function' ? children(childrenProps) : children;

  return (
    <div ref={ref}>
      {contentElement}
      {isActive && childrenElement}
    </div>
  );
};
