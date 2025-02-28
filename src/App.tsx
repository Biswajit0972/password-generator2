import { useForm, SubmitHandler } from "react-hook-form";
import CustomFrom from "./components/CustomFrom";
import CustomInput from "./components/CustomInput";
import copyImage from "./assets/copy.png";
import { useEffect, useState } from "react";
import usePasswordGenerator from "./hooks/passwordGenerator";
import Alert from "./components/Alert";
import Heading from "./components/Heading";

interface FromInput {
  password?: string;
  alphabet?: boolean;
  number?: boolean;
  specialCharacter?: boolean;
  length: number; // length should be required
}

function App() {

  // store password
  const [finalpassword, setPassword] = useState<string>("");
// for range of password
  const [range, setRange] = useState<string>("8");
  // alert functions
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
  }, [password,data]);

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
          <Heading/>
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
                    setPassword={setPassword}
                  />
               
                  <img
                    src={copyImage}
                    className="copy absolute h-5 right-2 top-1/2 -translate-y-7 inline cursor-pointer"
                    onClick={copyFn}
                    typeof="button"
                  />
                </div>

                {/* //TODO: update in future  */}
            
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
