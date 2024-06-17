import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function ScrollReveal({
    children,
    variants,
    customClass
}) {
    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    return (
        <motion.div
            ref={ref}
            className={customClass}
            variants={variants}
            initial="hidden"
            animate={control}
        >
            {children}
        </motion.div>
    )
}

export default ScrollReveal;