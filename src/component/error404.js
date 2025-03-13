function Error404() {
  return (
    <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16 bg-gray-900 w-screen h-screen">
      <div className="xl:pt-24 w-full xl:w-1/2 flex pb-12 lg:pb-0">
        <div>
          <div className="flex">
            <div className="flex flex-col">
              <h1 className="my-2 text-white font-bold text-2xl">
                Looks like you&apos;ve found the doorway to the great nothing
              </h1>
              <p className="my-2 mb-10 text-white">
                Sorry about that! Please visit our hompage to get where you need to go.
              </p>
              <a
                href="/"
                className="sm:w-full lg:w-auto border rounded-md p-4 text-center bg-indigo-600 text-white hover:bg-indigo-700"
              >
                Take me there!
              </a>
            </div>
          </div>
          <div>
            <img
              src="https://i.ibb.co/G9DC8S0/404-2.png"
              className="w-full opacity-5 z-0"
              alt="404"
            />
          </div>
        </div>
      </div>
      <div>
        <img src="https://i.ibb.co/ck1SGFJ/Group.png" alt="graphic" />
      </div>
    </div>
  );
}
export default Error404;
