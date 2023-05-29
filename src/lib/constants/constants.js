import React from "react";
// Icons
import { AiFillQuestionCircle, AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

export const WALLET_HEADER_TITLE = {
  TITLE : "My Wallet",
  ICON  : <AiFillQuestionCircle/>
};


export const WALLET_BODY = {
  TITLE: "Your Current Balance Is",
  SUB_TITLE : "SAR 900",
};

export const AMOUNT_INFO = {
  INFO : "The down payment for a bid is SAR 1,000",
  INCREASE_ICON : <AiFillPlusCircle size={"2rem"} fill="#00dca6"/>,
  DECREASE_ICON : <AiFillMinusCircle size={"2rem"} fill="#4a4a4a" twoToneColor="#eb2f96"/>
};
