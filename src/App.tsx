import { useForm, SubmitHandler } from "react-hook-form";
import CustomFrom from "./components/CustomFrom";
import CustomInput from "./components/CustomInput";
import copyImage from "./assets/copy.png";
import { useEffect, useState } from "react";
import usePasswordGenerator from "./hooks/passwordGenerator";
import Alert from "./components/Alert";

interface FromInput {
  password?: string;
  alphabet?: boolean;
  number?: boolean;
  specialCharacter?: boolean;
  length: number; // length should be required
}

function App() {

  const [finalpassword, setPassword] = useState<string>("");
  const [range, setRange] = useState<string>("8");
  const [popup, setPopup] = useState<boolean>(false);
  const [data, setData] = useState<FromInput>({ length: 8 });

  const password = usePasswordGenerator(data);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FromInput>();

  useEffect(() => {
    if (password) {
      setPassword(password);
    }
  }, [password]);

  const onSubmit: SubmitHandler<FromInput> = (data) => {
    const updatedData = { ...data, length: Number(data?.length) };
    setData(updatedData);
  };

  const handelPopup = (): void => {
    setTimeout(() => {
      setPopup((e) => !e);
    }, 2000);
  };

  const copyFn: React.MouseEventHandler = () => {
    handelPopup();
    setPopup((e) => !e);
    navigator.clipboard.writeText(finalpassword);
  };

  return (
    <>
      <section className="max-w-screen-2xl bg-black relative">
        <div className="relative w-full h-screen flex flex-col gap-2 md:md-layout">
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
                is an open-source project where you can generate secure
                passwords. I assure you that your password is not stored in any
                database. The process is entirely client-side, meaning if you
                refresh the webpage, the password you generate will be lost. So,
                <span className="text-red-500 capitalize ml-1 font-bold font-secondary sm:font-extrabold sm:text-xl">
                  please be careful! 💀
                </span>
              </p>
            </div>
          </div>

          <div className="right h-[70%] w-full  relative  p-5 flex items-center justify-center md:w-[50%] md:h-full md:px-12">
            <div className="overflow-hidden w-full relative bg-secondary-300  rounded-md p-5">
              <CustomFrom
                className="w-full relative"
                handelSubmit={handleSubmit(onSubmit)}
              >
                {/* // ! custom Input with errors */}
                <div className="relative">
                  <CustomInput
                    placeHolder=""
                    register={register}
                    className="w-full h-9 rounded-xl pl-2 outline-none font-secondary text-lg"
                    name="password"
                    type="text"
                    errors={errors.password}
                    value={finalpassword}
                  />

                  <img
                    src={copyImage}
                    className="copy absolute h-5 right-2 top-1/2 -translate-y-1/2 inline cursor-pointer"
                    onClick={copyFn}
                    typeof="button"
                  />
                </div>

                {/* //TODO: update in future  */}
                {/* <p className="font-secondary my-3">
                  <span>Types of Password:</span> strong{" "}
                </p> */}

                <div className="relative w-full flex items-center gap-2 mt-2">
                  <CustomInput
                    placeHolder=""
                    register={register}
                    className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-blue-600 checked:border-blue-600"
                    name="alphabet"
                    type="checkbox"
                  />
                  <p className="font-secondary font-bold text-white-500">
                    Password contains Alphabets!
                  </p>
                </div>

                <div className="relative w-full flex items-center gap-2 mt-2 ">
                  <CustomInput
                    placeHolder=""
                    register={register}
                    className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-blue-600 checked:border-blue-600"
                    name="number"
                    type="checkbox"
                  />
                  <p className="font-secondary font-bold text-white-500">
                    Password contains Numbers!
                  </p>
                </div>

                <div className="relative w-full flex items-center gap-2 mt-2">
                  <CustomInput
                    placeHolder=""
                    register={register}
                    className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-blue-600 checked:border-blue-600"
                    name="specialCharacter"
                    type="checkbox"
                  />
                  <p className="font-secondary font-bold text-white-500">
                    Password contains SpecialCharacter!
                  </p>
                </div>

                <input
                  type="range"
                  {...register("length")}
                  className="w-full h-4 mt-2"
                  min={5}
                  max={50}
                  defaultValue={8}
                  onChange={(e) => setRange(e.target.value)}
                />
                <p className="font-secondary my-1 font-lg text-center text-white-500">
                  {range}
                </p>
                <button className="w-full mt-3 h-9 bg-secondary rounded-lg capitalize text-md font-secondary">
                  Generate Password
                </button>
              </CustomFrom>
            </div>
          </div>
        </div>
        {popup && <Alert password={finalpassword} />}
      </section>
    </>
  );
}

export default App;
