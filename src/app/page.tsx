// Component
import Header from "@/components/Header";
import React from "react";
import {WALLET_HEADER_TITLE} from '@/lib/constants/constants'
import WalletBody from "@/components/WalletBody";
export default async function Home() {
  return (
    <main className="flex flex-col gap-4 p-4 w-screen" >
      <Header title={WALLET_HEADER_TITLE.TITLE} icon={WALLET_HEADER_TITLE.ICON} />
        <hr className="w-full"/>

        {/*  Wallet Body  */}
        <WalletBody/>
    </main>
  );
}
