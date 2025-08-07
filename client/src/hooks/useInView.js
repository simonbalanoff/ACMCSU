import { useIntersectionObserver } from "usehooks-ts";

export function useInView(options) {
    const { ref, entry } = useIntersectionObserver(options);
    return [ref, entry?.isIntersecting];
}
