import { useCallback, useEffect, useRef } from 'react';
import { IModalContext } from '../types/IModalContext';
import { produce } from 'immer';
import { IModalData } from '../types/IModalData';
import { useUpdate } from '../../../../../../common/hooks/useUpdate';

interface IResult {
	createModal: (name: string) => number;
	removeModal: (idx: number) => void;
	openModal: (idx: number) => void;
	closeModal: (idx: number) => void;
}

export const useModalContext = (): IModalContext => {
	const modalsRef = useRef<IModalData[]>([]);
	const update = useUpdate();

	const createModal = useCallback((name: string) => {
		const newIdx = modalsRef.current.length - 1;
		modalsRef.current.push({
			isActive: false,
			name,
		});

		update();
		return newIdx;
	}, []);

	const removeModal = useCallback((idx: number) => {
		modalsRef.current = modalsRef.current.filter(
			(_, modalIdx) => modalIdx !== idx,
		);
		update();
	}, [])

	const openModal = useCallback((idx: number) => {
		modalsRef.current = produce(modalsRef.current, (modalsDraft) => {
			const modalDraft = modalsDraft[idx];

			if (!modalDraft) {
				return modalsDraft;
			}

			modalDraft.isActive = true;
			return modalsDraft;
		});
		update();
	}, []);

	const closeModal = useCallback((idx: number) => {
		modalsRef.current = produce(modalsRef.current, (modalsDraft) => {
			const modalDraft = modalsDraft[idx];

			if (!modalDraft) {
				return modalsDraft;
			}

			modalDraft.isActive = false;
			return modalsDraft;
		});
		update();
	}, []);

	return {
		modals: modalsRef.current,
		createModal,
		removeModal,
		openModal,
		closeModal,
	};
};
