import { Dispatch, RefObject, useEffect } from 'react';
import { useProtectedRef } from './useProtectedRef';

type TListenerEvent = MouseEvent & {
  target: Element;
};

export const useClickOutside = (
  ref: RefObject<HTMLElement>,
  callback: Dispatch<MouseEvent>,
  eventName = 'click',
): void => {
  const protectedCallbackRef = useProtectedRef(callback);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (!ref?.current) {
        return;
      }

      if (
        protectedCallbackRef.current &&
        !ref.current.contains((event as TListenerEvent).target)
      ) {
        protectedCallbackRef.current(event);
      }
    }

    document.addEventListener(eventName, onClick);
    document.addEventListener('touchstart', onClick as unknown as Dispatch<TouchEvent>);

    return () => {
      document.removeEventListener(eventName, onClick);
      document.removeEventListener('touchstart', onClick as unknown as Dispatch<TouchEvent>);
    };
  }, [callback])
}
