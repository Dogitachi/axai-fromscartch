"use Client";

import Card from "@/app/components/common/card";

import axios from "axios";
import React, { Ref, forwardRef, useEffect, useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import { setDone } from "@/redux/reducers/TaskReducer";
import "./styles.css";

function Mine() {
  const snackbar = useSnackbar();
  const dispatch = useDispatch();
  const allTasks = useSelector((x: any) => x.TaskReducer.tasks);
  const mainTasks = allTasks?.filter((x: any) => x.extra === false);
  const user = useSelector((x: any) => x.TaskReducer.user);
  const done = useSelector((x: any) => x.TaskReducer.done);
  const handleImageLoad = () => {};
  const [arr, setArr] = useState<number[]>([]);
  const [winPoint, setWinPoint] = useState<number>();
  useEffect(() => {
    let tmp: number[] = [];
    for (let i = 0; i < 5; i++) {
      tmp.push(Math.ceil(Math.random() * 10) * 100);
    }
    setArr(tmp);
  }, []);

  const handleSpin = () => {
    const tmp = Math.floor(Math.random() * 5);
    setWinPoint(tmp);
    dispatch(setDone(1));
    setTimeout(() => {
      alert("sending");
      alert(arr[tmp]);
      const title = "get lotery point";
      const price = tmp ? arr[tmp] : 0;
      const handleBonus = () => {
        axios
          .post("https://axai-be.onrender.com/bonus", {
            user,
            title,
            price,
          })
          .then((response: any) => {
            console.log(response.data);
            if (response.data.stats == "success")
              snackbar.enqueueSnackbar(
                `You gain ${price} coins.  Your balance is ${response.data.mount}`,
                { autoHideDuration: 1000 }
              );
            else
              snackbar.enqueueSnackbar(
                "You need to wait 24 hours for next time",
                {
                  autoHideDuration: 1000,
                }
              );
          });
      };
      handleBonus();
    }, 5000);
  };
  return (
    <div className="flex-1 h-0">
      <div className="hhh py-7 mb-[90px] px-5 text-white rounded-t-3xl border-t bg-black border-[#DFDCD5] h-full overflow-auto">
        <div className="flex justify-center items-center text-2xl">Earns</div>
        <div className="flex justify-center items-center text-sm font-light mt-3">
          Follow simple steps to get more AxAi
        </div>
        <div className="mt-6">
          <div>Free Roulette</div>
          <div className="p-3">
            <div className="bg-[#1D1D1D] rounded-md p-2">
              <div
                className="w-full h-[7.5em] relative overflow-hidden grid grid-rows-5"
                style={{
                  maskImage: "linear-gradient(transparent, black, transparent)",
                }}
              >
                <div className="bg-black rounded-full row-start-3" />
                <div
                  className="w-full flex flex-col absolute left-0 transition-all ease-in-out duration-[3000ms]"
                  style={{
                    bottom:
                      winPoint !== undefined ? `${-(37 - 4) * 1.5}em` : "0",
                  }}
                >
                  {Array(10)
                    .fill(0)
                    .map((_, i) =>
                      arr.map((x, j) => (
                        <div
                          key={`${i}-${j}`}
                          className="flex justify-center items-center leading-normal"
                        >
                          {x} AxAi
                        </div>
                      ))
                    )}
                </div>
              </div>
              <button
                className="w-full bg-main rounded-2xl p-2 text-sm text-black flex justify-center items-center"
                onClick={handleSpin}
              >
                Spin
              </button>
            </div>
          </div>
        </div>
        <div>Tasks</div>
        {mainTasks.map((x: any, i: number) => (
          <Card
            key={i}
            title={x.title}
            description={x.description}
            price={x.price}
            link={x.link}
            img={x.image}
            onLoad={handleImageLoad}
          />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // Fetch or define your static props here
  return {
    props: {
      data: {}, // Example data
    },
  };
}

export default Mine;
