function Error404(){
    return(
        <div className='h-screen w-full bg-gray-900 flex flex-col justify-center items-center'>
                <h1 className='font-black text-gray-300 text-[100px] text-center'>
                    Error 404. Not Found!
                </h1>
                <h1 className='font-black text-gray-300 text-[100px] text-center'>
                    No Content found for that link.
                </h1>
            </div>
    )
}export default Error404;