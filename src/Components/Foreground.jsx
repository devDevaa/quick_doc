import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {

    const ref = useRef(null);

    const data = [
        {
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
            filesize: "0.9mbs",
            close: false,
            tagDetails: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "red"
            },
        },

        {
            desc: "Amet consectetur adipisicing, lorem ipsum dolor sit.",
            filesize: "12.5mbs",
            close: true,
            tagDetails: {
                isOpen: false,
                tagTitle: "Download Now",
                tagColor: "green"
            },
        },
    ];
    
  return (
    <>
        <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full p-4 flex gap-5 flex-wrap">
            {data.map((item, index) => (
                <Card data={item} reference={ref}/>
            ))}
        </div>
    </>
  )
}

export default Foreground