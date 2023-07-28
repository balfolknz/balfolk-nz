"use client"

import {AnimatePresence, motion} from "framer-motion";

export const NavbarAnimation = ({isVisible, children}: any) => {
    return (
        <>
            <AnimatePresence>
                {(isVisible &&
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -20}}
                        transition={{delay: 0.25}}
                        key="navbarAnimation"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}