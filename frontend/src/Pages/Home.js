import React, { useEffect } from "react";
import {
  LogicAddTowArray,
  LogicSpliceString,
  bubbleSort,
} from "../Logics/FileLogic";
import Algolia from "./algolia/Algolia";
import AlgoliaSameGoogle from "./algolia/AlgoliaSameGoogle";

const Home = () => {
  //!Cắt chuỗi [123,456,789]
  const handleSpliceString = () => {
    var myString = "123456789";
    console.log(LogicSpliceString(myString));
  };
  //! Thêm 2 mảng vào mảng có dạng
  //   [
  //     {
  //       id: 1,
  //       value: "reactJs",
  //     },
  //     {
  //       id: 2,
  //       value: "nodeJs",
  //     },

  //     {
  //       id: 3,
  //       value: "Vue",
  //     },
  //     {
  //       id: 4,
  //       value: "Angular",
  //     },
  //   ];
  const handleTowArray = () => {
    var a = [1, 2, 3, 4];
    var b = ["reactJs", "nodeJs", "Vue", "Angular"];
    console.log(LogicAddTowArray(a, b));
  };
  const handlePrivateHacker = () => {
    const a = 7;
    const b = 8;
    const keySystem = 30;
    const KeyA = a + keySystem;
    const KeyB = b + keySystem;
    const KeyGeneralA = a + KeyB;
    console.log(KeyGeneralA);
    const KeyGeneralB = b + KeyA;
    console.log(KeyGeneralB);
    console.log(KeyGeneralA === KeyGeneralB);
  };

  //!bubbleSort

  const handleBubbleSort = () => {
    var a = [1, 6, 9, 2, 4, 3];
    console.log(bubbleSort(a));
  };
  useEffect(() => {
    //?Study 1
    // handleSpliceString();
    //?Study 2
    // handleTowArray();
    //?Study 3
    // handlePrivateHacker();
    // handleBubbleSort();
  }, []);
  return <div>
    <Algolia />
    {/* <AlgoliaSameGoogle /> */}
  </div>;
};

export default Home;
