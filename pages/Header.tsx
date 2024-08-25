import { TonConnectButton } from "@tonconnect/ui-react";

const Header = () => {
  return (
    <div className="relative z-0">
      <div className="px-5 py-3 flex items-center relative z-[1]">
        <div className="flex items-center space-x-3 flex-1 w-0">
          <img
            src="/imgs/logo.png"
            className="w-[39px] h-[39px]"
            alt="AvatarImg"
          ></img>
        </div>
        <TonConnectButton />
      </div>
    </div>
  );
};

export default Header;
