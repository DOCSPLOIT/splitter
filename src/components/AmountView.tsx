import { useContext } from "react"
import { AmountContext } from "../contexts/AmountContext"
import { FormikContext } from "../contexts/FormikContext";

export default function AmountView() {
    const amountCtx = useContext(AmountContext);
    const formikCtx = useContext(FormikContext);

    return <div className="col-md-5 d-flex flex-column mt-3 mt-md-0  px-4 py-5 bg-secondary ">
        <div className="d-flex justify-content-between">
            <div className="">
                <p className="text-white my-0">Tip Amount</p>
                <small className="text-muted" >/ person</small>
            </div>
            <h2 className="amount-text" >${amountCtx.tipAmount === 0 ? '0.00' : amountCtx.tipAmount}</h2>
        </div>
        <div className="d-flex justify-content-between">
            <div className="">
                <p className="text-white my-0">Total Amount</p>
                <small className="text-muted" >/ person</small>
            </div>
            <h2 className="amount-text" >${amountCtx.totalAmount === 0 ? '0.00' : amountCtx.totalAmount}</h2>
        </div>
        <button
            onClick={() => {
                amountCtx.setAmounts(0, 0)
                formikCtx.formik.resetForm();
                formikCtx.formik.setFieldValue('tip', null)

            }}
            disabled={amountCtx.tipAmount === 0 && amountCtx.totalAmount === 0}
            className="btn btn-cyan w-100 mt-5 mt-md-auto" >RESET</button>
        <style>
            {
                `
                    .bg-secondary{
                        border-radius:1.5rem ;
                    }
                    .amount-text{
                        font-weight:700;
                        color:var(--primary)
                    }
                `
            }
        </style>
    </div>
}