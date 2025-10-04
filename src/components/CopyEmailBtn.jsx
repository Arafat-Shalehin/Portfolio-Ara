import { useState } from "react";
import {AnimatePresence, motion} from "motion/react";

const CopyEmailBtn = () => {

    const [copied, setCopied] = useState(false);
    const email = "Your Email Address";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <motion.button 
        onClick={copyToClipboard} 
        className="relative px-1 py-4 text-sm text-center rounded-full
        font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden"
        whileHover={{y: -5}}
        whileTap={{scale: 1.05}}>
            <AnimatePresence mode="wait"></AnimatePresence>

            {copied ?
            (<motion.p 
            className="flex items-center justify-center gap-2"
            key="copied"
            initial={{opacity: 0, y: -10}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -10}}
            transition={{duration: 0.1, ease:"easeInOut"}}>
                <img 
                className="w-5"
                src="/assets/copy-done.svg" 
                alt="Copy done icon" />
                Email has Copied
            </motion.p>) :
            (<motion.p 
            className="flex items-center justify-center gap-2"
            key="copy"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.1}}>
                <img 
                className="w-5"
                src="/assets/copy.svg" 
                alt="Copy icon" />
                Copy Email Address
            </motion.p>)
            }
            <AnimatePresence mode="wait"></AnimatePresence>
        </motion.button>
    );
};

export default CopyEmailBtn;