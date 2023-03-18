import { FC, ReactNode } from "react";

interface MyTitleProps {
  children: ReactNode;
}
export const MyTitle: FC<MyTitleProps> = ({ children }) => {
  return (
    <ul className="text-3xl list-disc addsbp">
      <li>{children}</li>
    </ul>
  );
};
