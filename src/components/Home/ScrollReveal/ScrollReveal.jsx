import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function ScrollReveal({
    elementType,
    children,
    variants,
    customClass
}) {
    const control = useAnimation();
    const [ref, inView] = useInView();
    const MotionElement = motion[elementType]

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    return (
        <MotionElement
            ref={ref}
            className={customClass}
            variants={variants}
            initial="hidden"
            animate={control}
        >
            {children}
        </MotionElement>
    )
}

export default ScrollReveal;