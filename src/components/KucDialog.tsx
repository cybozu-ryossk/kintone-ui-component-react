import { createComponent } from '@lit/react';
import { Dialog, type DialogProps } from 'kintone-ui-component';
import React, { Children, isValidElement, useEffect, useRef, type PropsWithChildren } from 'react';
import { createHtmlElement } from '../utils/element';
import { calcKucTagName } from '../utils/kuc';

export const KucDialogComponent = createComponent({
    react: React,
    tagName: calcKucTagName('dialog'),
    elementClass: Dialog,
    events: {
        onClose: 'close',
    },
});

export type KucDialogProps = PropsWithChildren<Omit<DialogProps, 'content' | 'footer' | 'header'>> & {
    open?: boolean;
    onClose?: (event: Event) => void;
};

// Headerサブコンポーネント
function KucDialogHeader({ children }: PropsWithChildren) {
    return <div>{children}</div>;
}

// Contentサブコンポーネント
function KucDialogContent({ children }: PropsWithChildren) {
    return <div>{children}</div>;
}

// Footerサブコンポーネント
function KucDialogFooter({ children }: PropsWithChildren) {
    return <div>{children}</div>;
}

// 型ガード関数
function isReactElementWithChildren(child: React.ReactNode): child is React.ReactElement<PropsWithChildren> {
    return isValidElement(child) && typeof child.type === 'function';
}

function KucDialog({ open, children, ...props }: KucDialogProps) {
    const dialogRef = useRef<Dialog | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);
    const footerRef = useRef<HTMLDivElement | null>(null);
    const headerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (open) {
            dialogRef.current?.open();
        } else {
            dialogRef.current?.close();
        }
    }, [open]);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (dialog) {
            let contentChildren: React.ReactNode = null;
            let footerChildren: React.ReactNode = null;
            let headerChildren: React.ReactNode = null;

            Children.forEach(children, (child) => {
                if (isReactElementWithChildren(child)) {
                    if (child.type === KucDialogFooter) {
                        footerChildren = child.props.children;
                    } else if (child.type === KucDialogContent) {
                        contentChildren = child.props.children;
                    } else if (child.type === KucDialogHeader) {
                        headerChildren = child.props.children;
                    } else {
                        contentChildren = child;
                    }
                } else {
                    contentChildren = child;
                }
            });

            // headerを設定
            if (headerChildren) {
                dialog.header = createHtmlElement(headerRef, headerChildren);
            }

            // contentを設定
            if (contentChildren) {
                dialog.content = createHtmlElement(contentRef, contentChildren);
            }

            // footerを設定
            if (footerChildren) {
                dialog.footer = createHtmlElement(footerRef, footerChildren);
            }
        }
    }, [children]);

    return <KucDialogComponent {...props} ref={dialogRef} />;
}

// サブコンポーネントをKucDialogにアタッチ
KucDialog.Header = KucDialogHeader;
KucDialog.Content = KucDialogContent;
KucDialog.Footer = KucDialogFooter;

export default KucDialog;
