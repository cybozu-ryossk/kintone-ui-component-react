import { createComponent } from '@lit/react';
import {
    Text,
    type TextChangeEventDetail,
    type TextFocusEventDetail,
    type TextInputEventDetail,
    type TextProps,
} from 'kintone-ui-component';
import React from 'react';
import { calcKucTagName } from '../utils/kuc';

export const KucTextComponent = createComponent({
    react: React,
    tagName: calcKucTagName('text'),
    elementClass: Text,
    events: {
        onChange: 'change',
        onFocus: 'focus',
        onInput: 'input',
    },
});

export type KucTextProps = TextProps & {
    onChange?: (event: CustomEvent<TextChangeEventDetail>) => void;
    onFocus?: (event: CustomEvent<TextFocusEventDetail>) => void;
    onInput?: (event: CustomEvent<TextInputEventDetail>) => void;
};

export default function KucText(props: KucTextProps) {
    return (
        <KucTextComponent
            {...props}
            value={''}
            onChange={(e: Event) => {
                props.onChange?.(e as CustomEvent<TextChangeEventDetail>);
            }}
            onFocus={(e: Event) => {
                props.onFocus?.(e as CustomEvent<TextFocusEventDetail>);
            }}
            onInput={(e: Event) => {
                props.onInput?.(e as CustomEvent<TextInputEventDetail>);
            }}
        />
    );
}
