import { createComponent } from '@lit/react';
import { Attachment, type AttachmentChangeEventDetail, type AttachmentProps } from 'kintone-ui-component';
import React from 'react';
import { calcKucTagName } from '../utils/kuc';

export const KucAttachmentComponent = createComponent({
    react: React,
    tagName: calcKucTagName('attachment'),
    elementClass: Attachment,
    events: {
        onChange: 'change',
    },
});

export type KucAttachmentProps = AttachmentProps & {
    onChange?: (event: CustomEvent<AttachmentChangeEventDetail>) => void;
};

export default function KucAttachment(props: KucAttachmentProps) {
    return (
        <KucAttachmentComponent
            {...props}
            onChange={(e: Event) => {
                props.onChange?.(e as CustomEvent<AttachmentChangeEventDetail>);
            }}
        />
    );
}
