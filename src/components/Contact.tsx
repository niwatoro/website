import { FC, ReactNode, useState } from "react";
import { MyTitle } from "./MyTitle";

export const Contact: FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  const sendEmail = async () => {
    const body = `名前：\n${name}\n\nメール：\n${email}\n\n内容：\n${content}`;
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ body }),
    });
    console.log(response);
  };

  return (
    <div className="w-full h-full md:flex text-white border-y-8 border-y-black gen text-xl">
      <div className="md:pb-28 pt-12 px-14 flex flex-col md:w-1/3">
        <MyTitle>Contact</MyTitle>
      </div>
      <div className="md:w-1/3 flex flex-col mt-12 px-10 md:px-0 justify-center">
        <form>
          <MuSubtitle>名前</MuSubtitle>
          <MyInput type="text" value={name} setValue={setName} />
          <MuSubtitle>メールアドレス</MuSubtitle>
          <MyInput type="email" value={email} setValue={setEmail} />
          <MuSubtitle>内容</MuSubtitle>
          <MyTextArea value={content} setValue={setContent} />
          <div className="flex justify-center mt-8">
            <MyButton onClick={sendEmail} />
          </div>
        </form>
      </div>
    </div>
  );
};

interface MyInputProps {
  value: string;
  setValue: (value: string) => void;
  type: "text" | "email";
}
const MyInput: FC<MyInputProps> = ({ type, value, setValue }) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return <input required type={type} className="w-full h-12 rounded-md p-2 outline-none text-black bg-white" onChange={onChange} />;
};

interface MyTextAreaProps {
  value: string;
  setValue: (value: string) => void;
}
const MyTextArea: FC<MyTextAreaProps> = ({ value, setValue }) => {
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };
  return <textarea required className="w-full h-40 p-2 rounded-md outline-none text-black bg-white" onChange={onChange} />;
};

interface MyButtonProps {
  onClick: () => void;
}
const MyButton: FC<MyButtonProps> = ({ onClick }) => {
  return (
    <button className="w-96 h-16 bg-red-500 text-white font-bold rounded-lg border-b-4 border-red-700 active:translate-y-1 active:border-b-2" onClick={onClick}>
      送信
    </button>
  );
};

interface MySubtitleProps {
  children: ReactNode;
}
const MuSubtitle: FC<MySubtitleProps> = ({ children }) => {
  return <div className="mt-5 mb-1 mx-1">{children}</div>;
};
