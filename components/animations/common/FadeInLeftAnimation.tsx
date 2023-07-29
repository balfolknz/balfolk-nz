"use client"

import {AnimationControls, motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {useEffect} from "react";

const animationEffect = {
    visible: {
        x: 0,
        opacity: 1,
        // scale: 1,
        transition: {
            duration: 0.4,
        },
    },
    hidden: {
        x: -100,
        opacity: 0.2,
        // scale: 0,
    }
};

const FadeInLeftAnimation = ({children}: any) => {

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
            className="fadeInLeftAnimationBox"
            ref={ref}
            variants={animationEffect}
            initial="hidden"
            animate={control}
        >
            {children}
        </motion.div>
    );
};

export default FadeInLeftAnimation