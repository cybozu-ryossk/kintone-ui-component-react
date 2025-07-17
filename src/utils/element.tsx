import { createRoot } from 'react-dom/client';

export const createHtmlElement = (
    ref: React.RefObject<HTMLDivElement | null>,
    element: React.ReactNode,
): HTMLDivElement => {
    const div = document.createElement('div');
    const root = createRoot(div);
    root.render(<div ref={ref}>{element}</div>);
    return div;
};
