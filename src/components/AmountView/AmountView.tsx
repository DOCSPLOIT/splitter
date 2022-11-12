import { useContext } from "react"
import { AmountContext } from "../../contexts/AmountContext"
import { FormikContext } from "../../contexts/FormikContext";
import style from './AmountView.module.css'
export default function AmountView() {
    const amountCtx = useContext(AmountContext);
    const formikCtx = useContext(FormikContext);

    return <div className={"col-md-6 d-flex flex-column  px-4 py-5 bg-secondary " + style['bg-secondary']}>
        <div className="d-flex justify-content-between">
            <div className="">
                <p className="text-white my-0">Tip Amount</p>
                <small className="text-muted" >/ person</small>
            </div>
            <p className={style["amount-text"] + ' h2'} >${amountCtx.tipAmount === 0 ? '0.00' : amountCtx.tipAmount}</p>
        </div>
        <div className="d-flex justify-content-between">
            <div className="">
                <p className="text-white my-0">Total Amount</p>
                <small className="text-muted" >/ person</small>
            </div>
            <p className={style["amount-text"] + ' h2'} >${amountCtx.totalAmount === 0 ? '0.00' : amountCtx.totalAmount}</p>
        </div>
        <button
            onClick={() => {
                amountCtx.setAmounts(0, 0)
                formikCtx.formik.resetForm();
                formikCtx.formik.setFieldValue('tip', null)

            }}
            disabled={amountCtx.tipAmount === 0 && amountCtx.totalAmount === 0}
            className="btn btn-cyan w-100 mt-5 mt-md-auto" >RESET</button>
    </div>
}