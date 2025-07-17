import { createComponent } from '@lit/react';
import { Button, type ButtonProps } from 'kintone-ui-component/lib/button';
import React, { useEffect, useRef, type PropsWithChildren } from 'react';
import { createHtmlElement } from '../utils/element';
import { calcKucTagName } from '../utils/kuc';

const KucButtonComponent = createComponent({
    react: React,
    tagName: calcKucTagName('button'),
    elementClass: Button,
    events: {
        onClick: 'click',
    },
});

export type KucButtonProps = PropsWithChildren<Omit<ButtonProps, 'text' | 'content'>> & {
    onClick?: (event: Event) => void;
};

export default function KucButton({ children, ...props }: KucButtonProps) {
    const buttonRef = useRef<Button | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const button = buttonRef.current;
        if (button) {
            button.content = createHtmlElement(contentRef, children);
        }
    }, [contentRef, children]);

    return <KucButtonComponent {...props} ref={buttonRef} />;
}
