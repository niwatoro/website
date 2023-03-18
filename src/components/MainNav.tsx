import { FC, ReactNode } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Logo } from "./Logo";

export const MainNav = () => {
  return (
    <div className="w-screen bg-white text-black border-y-8 border-y-black font-bold p-1 md:p-2 md:text-xl flex justify-end md:justify-between items-center fixed z-50 addsbp">
      <Logo />
      <div className="flex">
        <NavLink href="#top">TOP</NavLink>
        <NavLink href="#about">ABOUT</NavLink>
        <NavLink href="#feed">FEED</NavLink>
        <NavLink href="#works">WORKS</NavLink>
        <NavLink href="#news">NEWS</NavLink>
        <NavLink href="#contact">CONTACT</NavLink>
      </div>
    </div>
  );
};

interface NavLinkProps {
  href: string;
  children?: ReactNode;
}
const NavLink: FC<NavLinkProps> = ({ href, children }) => {
  return (
    <AnchorLink offset="80" className="text-sm md:text-base mx-1 md:mx-2 flex justify-center items-center pt-1 md:pt-2" href={href}>
      {children}
    </AnchorLink>
  );
};
