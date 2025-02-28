const Heading = () => {
  return (
    <div className="left h-[30%] w-full  relative text-center py-2  md:md-left-center">
      <div className="overflow-hidden w-full relative px-3">
        <h1 className="text-white-500 text-2xl font-bold font-secondary sm:sm-heading">
          {" "}
          Free
          <span className="px-3 border-2 text-xl rounded-full border-secondary bg-secondary-300 mx-1 sm:bg-transparent sm:border-none sm:text-3xl ">
            Password
          </span>
          Generator{" "}
        </h1>
        <p className=" text-slate-400 mt-3 text-md font-semibold sm:sm-p">
          <span className="font-extrabold text-secondary opacity-100">
            🚀 Free Password Generator 🚀
          </span>
          is an open-source project where you can generate secure passwords. I
          assure you that your password is not stored in any database. The
          process is entirely client-side, meaning if you refresh the webpage,
          the password you generate will be lost. So,
          <span className="text-red-500 capitalize ml-1 font-bold font-secondary sm:font-extrabold sm:text-xl">
            please be careful! 💀
          </span>
        </p>
      </div>
    </div>
  );
};

export default Heading;
