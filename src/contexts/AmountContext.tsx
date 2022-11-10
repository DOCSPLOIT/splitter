import { createContext, useState } from "react";

export const AmountContext = createContext({ totalAmount: 0, tipAmount: 0, setAmounts: (totalAmount: any, tipAmount: any) => { } });

export default function AmountContextWrapper(props: any) {
    const [amount, setAmount] = useState({ totalAmount: 0, tipAmount: 0 })
    const setAmounts = (totalAmount: any, tipAmount: any) => {
        setAmount({ totalAmount, tipAmount })
    }
    return <AmountContext.Provider value={{ setAmounts, ...amount }} >{props.children} </AmountContext.Provider>
}