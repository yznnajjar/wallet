import { AMOUNT_INFO, WALLET_BODY } from "@/lib/constants/constants";

const WalletBody = (): JSX.Element => {
    return (
        <section className="flex flex-col self-center mt-8 text-center">
            <b className="text-responsive uppercase text-green-600">{WALLET_BODY.TITLE}</b>
            <div className="mt-4 text-green-600 text-2xl font-extrabold">{WALLET_BODY.SUB_TITLE}</div>

            {/*  Increase Or Decrease Amount  */}
            <div className="text-responsive my-8"> {AMOUNT_INFO.INFO} </div>

            <div className="flex justify-around h-fit">
                <b className=" flex flex-col items-center mb-1 pb-1">{AMOUNT_INFO.INCREASE_ICON} <strong className="text-responsive text-green-600">Top Up</strong> </b>
                <strong className="flex flex-col items-center mb-1 pb-1">{AMOUNT_INFO.DECREASE_ICON} <span className="text-responsive">Withdraw</span> </strong>
            </div>
        </section>
    )
};

export default WalletBody;
