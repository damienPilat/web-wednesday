import {useRef, useEffect, useCallback} from 'react';

export default function useDebounceFunc<T extends (...args: any[]) => void>(
    callback: T,
    delay: number
) {
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const callbackRef = useRef(callback);

    useEffect(() => {
        callbackRef.current = callback()
    }, [callback()])

    const debounceFn = useCallback((...args: Parameters<T>) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }

        timeoutRef.current = setTimeout(() => {
            callbackRef.current(...args)
        }, delay);
    }, [delay])

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, []);

    return debounceFn;
}
