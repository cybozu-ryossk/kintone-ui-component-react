/// <reference types="vite/client" />

import { ButtonProps } from 'kintone-ui-component/lib/button';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'kuc-button-1-21-0': ButtonProps & {
                ref?: React.RefObject<HTMLElement>;
                onClick?: (event: Event) => void;
                content?: HTMLElement;
            };
        }
    }
}
