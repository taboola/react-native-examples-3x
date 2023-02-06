import { MutableRefObject, useCallback, useEffect, useRef, useState } from 'react';
import type {ClassicUnitRefType, TBLClassicPage} from '@taboola/react-native-plugin-3x';

export function useNodeRef(callback: (node: ClassicUnitRefType) => void): [((node: ClassicUnitRefType) => void), MutableRefObject<ClassicUnitRefType | null>] {
    const ref = useRef<ClassicUnitRefType | null>(null);
    const setRef = useCallback((node) => {
        if (ref.current) {
            // Make sure to clean up any events/references added to the last instance
        }

        if (node) {
            callback(node);
            // Check if a node is actually passed. Otherwise, node would be null.
            // You can now do what you need to, addEventListeners, measure, etc.
        }

        // Save a reference to the node

        ref.current = node;
    }, []);

    return [setRef, ref];
}


export function useGetPageId(page: TBLClassicPage):(string| null)[] {
    const [pageId, setPageId] = useState<string | null>(null);

    useEffect(() => {
        page.populatedWithNativePage().then((page) => setPageId(page.pageId));
    }, []);

    return [pageId];
}
