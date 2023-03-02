import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export const usePortalGroup = (
	isActive: boolean,
	groupId: string,
	content: ReactNode
) => {
	const [currentPortalState, setCurrentPortalState] =
		useState<HTMLDivElement | null>(null);

	useEffect(() => {
		const modalItemPortal = document.createElement('div')

		const observer = new MutationObserver(() => {
			const appModalGroupId = document.querySelector(`#${groupId}`)

			if (!appModalGroupId) {
				return;
			}

			appModalGroupId.appendChild(modalItemPortal)

			setCurrentPortalState(modalItemPortal);

			observer.disconnect();
		})

		observer.observe(document.body, { subtree: true, childList: true });

		return () => {
			modalItemPortal.remove();
			observer.disconnect();
		}
	}, [groupId])

	return (
		currentPortalState &&
		createPortal(
			isActive && content,
			currentPortalState,
		)
	)
}
