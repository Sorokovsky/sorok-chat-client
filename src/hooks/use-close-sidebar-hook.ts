import { useEffect, type RefObject } from 'react';

export const useCloseSidebar = (close: () => void, content: RefObject<HTMLElement | null>, closerSelector: string) => {
    const clickHandler = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        const sidebarClasses: string = content.current?.className
            .replace(/^/g, ".")
            .replaceAll(" ", ".") || "";
        const isInContent: boolean = target?.closest(sidebarClasses) !== null;
        const clikableElement = target.closest("a,button");
        const isLinkOrButton: boolean = clikableElement !== null;        
        const isCloser: boolean = target.closest(closerSelector) !== null;        
        if ((isInContent === false || isLinkOrButton) && isCloser === false) {
            close();
        }
    };
    useEffect(() => {
        document.body.addEventListener('click', clickHandler);
        return () => document.body.removeEventListener('click', clickHandler);
    }, [content]);
}