import React, { FC } from 'react';
import { useRef } from 'react';
import { Transition } from 'react-transition-group';

interface FadeProps {
  in: boolean;
  timeout?: number;
  children: React.ReactNode;
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

type TransitionKeys = 'entering' | 'entered' | 'exiting' | 'exited';

export const Fade: FC<FadeProps> = (props) => {
  const nodeRef = useRef(null);
  return (
    <Transition nodeRef={nodeRef} in={props.in} timeout={duration || 300}>
      {/* {openCatalog ? <CategoryList /> : <></>} */}

      {(state) => {
        console.log(state);
        return (
          <div
            style={{
              transition: `opacity ${duration || 300}ms ease-in-out`,
              ...transitionStyles[state as TransitionKeys],
            }}
          >
            {props.children}
          </div>
        );
      }}
    </Transition>
  );
};
