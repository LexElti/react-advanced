import { useCallback, useRef } from 'react';

export function useThrottle(callback: (...args: any[]) => void, delay: number) {
    const timeoutRef = useRef<NodeJS.Timeout>();

    return useCallback((...args: any[]) => {
        clearTimeout(timeoutRef.current as NodeJS.Timeout);

        timeoutRef.current = setTimeout(() => {
            timeoutRef.current = undefined;
            callback(...args);
        }, delay);

        // if (!throttleRef.current) {
        //     callback(...args);
        //     throttleRef.current = true;

        //     setTimeout(() => {
        //         throttleRef.current = false;
        //     }, delay);
        // }
    }, [callback, delay]);
}
