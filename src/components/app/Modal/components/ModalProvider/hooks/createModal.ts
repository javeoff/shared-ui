import { useContext, useMemo, useEffect, createElement, Component } from 'react';
import { ModalContext } from '../ModalProvider';

export interface IModalProps<Component> {
  Modal: Component;
  close: VoidFunction;
  open: VoidFunction;
  isActive: boolean;
}

export const createModal = <Component>(
	Modal: Component
) => (name?: string): IModalProps<Component> => {
  const ctx = useContext(ModalContext);

  const modalIdx = useMemo(() => {
    if (!ctx?.modals) {
      throw new Error(`ModalProvider doesn't exists`);
    }

    const existsModalIdx = ctx.modals.findIndex((modal) => modal.name === name);

    if (name && existsModalIdx !== -1) {
      return existsModalIdx;
    }

    return ctx.createModal(name);
  }, []);

  const modalData = ctx.modals[modalIdx]!;

  return {
		Modal,
    close: () => ctx.closeModal(modalIdx),
    open: () => ctx.openModal(modalIdx),
    isActive: modalData?.isActive,
  };
};
