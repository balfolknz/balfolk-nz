"use client"

import {AnimatePresence, motion} from "framer-motion";

export const PageWrapper = ({children}: any) => {
    return (
        <>
            <AnimatePresence>
                <motion.div
                    initial={{opacity: 0, y: 15}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: 15}}
                    transition={{delay: 0.25}}
                    key="page"
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </>
    )
}