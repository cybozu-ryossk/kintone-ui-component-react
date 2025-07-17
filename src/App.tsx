import { useEffect, useState } from 'react';
import { KucAttachment, KucButton, KucDialog, KucText } from './components';

export default function App() {
    const [value, setValue] = useState('');
    const [open, setOpen] = useState(false);
    useEffect(() => {
        console.log(value);
    }, [value]);
    return (
        <div>
            <KucButton>Click me</KucButton>
            <KucButton type="submit" onClick={() => setOpen(true)}>
                Submit
            </KucButton>
            <KucButton type="alert">Alert</KucButton>
            <KucText onInput={(e) => setValue(e.detail.value ?? '')} />
            <KucAttachment onChange={(e) => console.log('Attachment changed:', e.detail)} />
            <KucDialog open={open} onClose={() => setOpen(false)}>
                <KucDialog.Header>Header</KucDialog.Header>
                <KucDialog.Content>Content</KucDialog.Content>
                <KucDialog.Footer>Button</KucDialog.Footer>
            </KucDialog>
        </div>
    );
}
