import { createComponent, type EventName } from '@lit/react';
import { Attachment, type AttachmentChangeEventDetail, type AttachmentProps } from 'kintone-ui-component';
import React from 'react';
import { calcKucTagName } from '../utils/kuc';

type AttachmentChangeEvent = CustomEvent<AttachmentChangeEventDetail>;

export const KucAttachmentComponent = createComponent({
    react: React,
    tagName: calcKucTagName('attachment'),
    elementClass: Attachment,
    events: {
        onChange: 'change' as EventName<AttachmentChangeEvent>,
    },
});

export type KucAttachmentProps = AttachmentProps & {
    onChange?: (event: AttachmentChangeEvent) => void;
};

export default function KucAttachment(props: KucAttachmentProps) {
    return <KucAttachmentComponent {...props} onChange={props.onChange} />;
}
