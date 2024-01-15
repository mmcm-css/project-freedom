
const FloatingButton = () => {
    return (
        <>
            <button className="
                fixed 
                z-90 
                bottom-10 
                right-8 
                bg-[#3B424E]
                w-10
                rounded-full 
                drop-shadow-lg-flex 
                justify-center
                items-center 
                text-white text-4xl 
                hover:bg-blue-700
                hover:drop-shadow-2xl 
                hover:animate-bounce 
                duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={"1.5"} stroke="currentColor" className=" w-10 h-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>

            </button>
        </>
    )
}

export default FloatingButton;