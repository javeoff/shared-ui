import { FC, ReactNode, useEffect, useState } from 'react';
import { CSSTransition, TransitionStatus } from 'react-transition-group';
import styled from 'styled-components';

export interface IProps {
    isOpen: boolean;
    children: ReactNode;
}

export const Transition: FC<IProps> = ({ isOpen, children }) => {
    const [savedChildren, setSavedChildren] = useState(children);

    useEffect(() => {
        if (children) {
            setSavedChildren(children);
        }
    }, [children]);

    return (
        <CSSTransition classNames='transition' in={isOpen} timeout={300} unmountOnExit={true}>
            {(state) => (
                <SWrapper transitionStatus={state}>
                    {savedChildren}
                </SWrapper>
            )
            }
        </CSSTransition>
    )
}

const SWrapper = styled.div<{transitionStatus: TransitionStatus}>`
  &.transition {
    &-enter {
			position: fixed;
			bottom: -100%;
		z-index: 99;
    }
    &-enter-active {
      transition: bottom 300ms;
			bottom: 0;
    }
    &-exit {
			position: static;
    }
    &-exit-active {
			position: fixed;
      transition: bottom 300ms;
      bottom: -100%;
    }
  }
`

