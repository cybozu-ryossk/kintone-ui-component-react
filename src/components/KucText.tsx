import React from 'react';

import type { EventName } from '@lit/react';
import { createComponent } from '@lit/react';
import {
    Text,
    type TextChangeEventDetail,
    type TextFocusEventDetail,
    type TextInputEventDetail,
    type TextProps,
} from 'kintone-ui-component';

import { calcKucTagName } from '../utils/kuc';

type KucTextChangeEvent = CustomEvent<TextChangeEventDetail>;
type KucTextFocusEvent = CustomEvent<TextFocusEventDetail>;
type KucTextInputEvent = CustomEvent<TextInputEventDetail>;

export const KucTextComponent = createComponent({
    react: React,
    tagName: calcKucTagName('text'),
    elementClass: Text,
    events: {
        onChange: 'change' as EventName<KucTextChangeEvent>,
        onFocus: 'focus' as EventName<KucTextFocusEvent>,
        onInput: 'input' as EventName<KucTextInputEvent>,
    },
});

export type KucTextProps = TextProps & {
    onChange?: (event: KucTextChangeEvent) => void;
    onFocus?: (event: KucTextFocusEvent) => void;
    onInput?: (event: KucTextInputEvent) => void;
};

export default function KucText(props: KucTextProps) {
    return (
        <KucTextComponent
            {...props}
            value={''}
            onChange={props.onChange}
            onFocus={props.onFocus}
            onInput={props.onInput}
        />
    );
}
