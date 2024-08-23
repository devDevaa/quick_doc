import React from 'react'
import { FaRegFileAlt } from "react-icons/fa"
import { GoDownload } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({data, reference}) {
  return (
    <>
        <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.1}} dragElastic={0.2}  dragTransition={{ bounceStiffness: 600, bounceDamping: 30 }} className='relative flex-shrink-0 w-60 h-72 bg-zinc-900/90 rounded-3xl text-white py-10 px-5 overflow-hidden'>
            <FaRegFileAlt />
            <p className='text-sm mt-5 leading-tight'>
                {data.desc}
            </p>
            <div className="footer absolute bottom-0 w-full left-0">
                <div className='flex justify-between items-center py-3 px-8 mb-2'>
                    <h5>{data.filesize}</h5>
                    {data.close ? <IoClose /> : <GoDownload />}
                </div>
                {
                    data.tagDetails.isOpen && (
                        <div className={`tag w-full py-3 bg-blue-600 flex items-center justify-center`}> 
                            <h3 className='text-sm '>{data.tagDetails.tagTitle}</h3>
                        </div>
                    )
                }
            </div>
        </motion.div>
    </>
  )
}

export default Card