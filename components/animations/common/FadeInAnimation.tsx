"use client"

import {AnimationControls, motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {useEffect} from "react";

const animationEffect = {
    visible: {
        opacity: 1,
        transition: {
            duration: 0.75,
        },
    },
    hidden: {
        opacity: 0.2,
    }
};

const FadeInAnimation = ({children}: any) => {

    const control:AnimationControls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            control.start("visible");
        }
        // else {
        //     control.start("hidden");
        // }
    }, [control, inView]);

    return (
        <motion.div
            className="fadeInAnimationBox"
            ref={ref}
            variants={animationEffect}
            initial="hidden"
            animate={control}
        >
            {children}
        </motion.div>
    );
};

export default FadeInAnimation