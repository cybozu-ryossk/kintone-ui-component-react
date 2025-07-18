import { AttachmentChangeEventDetail } from 'kintone-ui-component';
import { AttachmentProps } from 'kintone-ui-component';
import { ButtonProps } from 'kintone-ui-component/lib/button';
import { DialogProps } from 'kintone-ui-component';
import { JSX } from 'react/jsx-runtime';
import { PropsWithChildren } from 'react';
import { TextChangeEventDetail } from 'kintone-ui-component';
import { TextFocusEventDetail } from 'kintone-ui-component';
import { TextInputEventDetail } from 'kintone-ui-component';
import { TextProps } from 'kintone-ui-component';

export declare function KucAttachment(props: KucAttachmentProps): JSX.Element;

export declare type KucAttachmentProps = AttachmentProps & {
    onChange?: (event: CustomEvent<AttachmentChangeEventDetail>) => void;
};

export declare function KucButton({ children, ...props }: KucButtonProps): JSX.Element;

export declare type KucButtonProps = PropsWithChildren<Omit<ButtonProps, 'text' | 'content'>> & {
    onClick?: (event: Event) => void;
};

export declare function KucDialog({ open, children, ...props }: KucDialogProps): JSX.Element;

export declare namespace KucDialog {
    var Header: typeof KucDialogHeader;
    var Content: typeof KucDialogContent;
    var Footer: typeof KucDialogFooter;
}

declare function KucDialogContent({ children }: PropsWithChildren): JSX.Element;

declare function KucDialogFooter({ children }: PropsWithChildren): JSX.Element;

declare function KucDialogHeader({ children }: PropsWithChildren): JSX.Element;

export declare type KucDialogProps = PropsWithChildren<Omit<DialogProps, 'content' | 'footer' | 'header'>> & {
    open?: boolean;
    onClose?: (event: Event) => void;
};

export declare function KucText(props: KucTextProps): JSX.Element;

export declare type KucTextProps = TextProps & {
    onChange?: (event: CustomEvent<TextChangeEventDetail>) => void;
    onFocus?: (event: CustomEvent<TextFocusEventDetail>) => void;
    onInput?: (event: CustomEvent<TextInputEventDetail>) => void;
};

export { }
