import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { TbHomeFilled, TbBrandBinance } from "react-icons/tb";
import { BsDatabaseFillGear } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";
const Footer = () => {
  const router = useRouter();
  const user = useSelector((x: any) => x.TaskReducer.user);
  const userFromQuery = router.query.user?.toString() || "";

  return (
    // user ?
    <div className="flex justify-center">
      <div className="grid grid-cols-5 justify-center mt-auto bg-white py-[7px] px-[9px] gap-[6px] w-full font-medium text-[12px]">
        <Link href={`/?user=${user}`}>
          <div
            className={
              "flex flex-col justify-center space-y-2 text-xs h-[64px] text-center rounded-lg items-center " +
              (router.pathname === "/"
                ? "bg-main  text-white"
                : "text-[#A4A4A4]")
            }
          >
            <TbHomeFilled className="w-6 h-6" />
            <div className="text-center">Home</div>
          </div>
        </Link>
        <Link href={"/mine"}>
          <div
            className={
              "flex flex-col justify-center space-y-2 text-xs h-[64px] text-center rounded-lg items-center " +
              (router.pathname === "/mine"
                ? "bg-main  text-white"
                : "text-[#A4A4A4]")
            }
          >
            <BsDatabaseFillGear className="w-6 h-6" />
            <div>Earn</div>
          </div>
        </Link>
        <Link href={"/friend"}>
          <div
            className={
              "flex flex-col justify-center space-y-2 text-xs h-[64px] text-center rounded-lg items-center " +
              (router.pathname === "/friend"
                ? "bg-main  text-white"
                : "text-[#A4A4A4]")
            }
          >
            <img src="/imgs/friend.gif" className="w-8 h-6" />
            <div>Friends</div>
          </div>
        </Link>
        <Link href={"/members"}>
          <div
            className={
              "flex flex-col justify-center space-y-2 text-xs h-[64px] text-center rounded-lg items-center " +
              (router.pathname === "/earn"
                ? "bg-main  text-white"
                : "text-[#A4A4A4]")
            }
          >
            <GiTrophyCup className="w-6 h-6" />
            <div>Leaders</div>
          </div>
        </Link>
        <Link href={"/airdrop"}>
          <div
            className={
              "flex flex-col justify-center space-y-2 text-xs h-[64px] text-center rounded-lg items-center " +
              (router.pathname === "/airdrop"
                ? "bg-main  text-white"
                : "text-[#A4A4A4]")
            }
          >
            <TbBrandBinance className="w-6 h-6" />
            <div>Exchange</div>
          </div>
        </Link>
      </div>
    </div>
    // : null
  );
};

export default Footer;
