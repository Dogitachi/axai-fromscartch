import { useState, useEffect } from "react";
import { useSnackbar } from "notistack";
import axios from "../app/axios";
import { useSelector } from "react-redux";
import "./styles.css";

interface Item {
  tgid: string;
  mount: number;
}

function Friend() {
  const user = useSelector((x: any) => x.TaskReducer.user);
  const [items, setItems] = useState<Item[]>([]);
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://axai-be.onrender.com/users");
      console.log(res);
      if (res.data == undefined) setItems([]);
      else setItems(res.data);
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="flex flex-col px-5 pt-[23px] rounded-t-3xl border-t bg-black border-[#DFDCD5] flex-1 h-0 overflow-auto">
        <div className="font-bold text-[22px] text-main">
          {items.length} Leaders
        </div>
        {items.length === 0 ? (
          <>
            <div className="font-medium text-[14px] text-white mt-3 mb-[25px]">
              No Users
            </div>
          </>
        ) : (
          <div className="mb-[100px]">
            {items.map((item, index) => (
              <div key={index}>
                <div className="flex flex-row items-center mt-5 border border-[#DFDCD5] p-2 px-4 mx-4 rounded-lg">
                  <div className="text-white text-lg">{index + 1}</div>
                  <div className="ml-4 text-white">{item.tgid}</div>
                  <img
                    src="/imgs/logo.png"
                    alt="dollar"
                    className="w-4 h-4 ml-6"
                  ></img>
                  <div className="ml-2 text-white">{item.mount}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Friend;
