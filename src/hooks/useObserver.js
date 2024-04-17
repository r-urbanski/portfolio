import { useEffect, useState } from 'react'

export const useObserver = (elementRef, options) => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const currentElement = elementRef.current

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) setIsVisible(true)
            })
        }, options)

        if (currentElement) observer.observe(currentElement)

        return () => {
            if (currentElement) observer.unobserve(currentElement)
        }
    }, [elementRef, options])

    return isVisible
}
