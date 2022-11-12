import Input from "../ui/Input";
import DollarIcon from '../assets/images/icon-dollar.svg'
import PersonIcon from '../assets/images/icon-person.svg'
import Tip from "./Tip/Tip";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useContext, useEffect } from "react";
import { AmountContext } from "../contexts/AmountContext";
import { FormikContext } from "../contexts/FormikContext";
export default function Bill() {
    const formik = useFormik({
        initialValues: {
            bill: null,
            tip: null,
            people: null,
        },
        validateOnBlur: true,
        validateOnChange: true,
        validationSchema: Yup.object().shape({
            bill: Yup.number().typeError('Must be a number').positive('Cannot be zero'),
            tip: Yup.number().typeError('Must be a number').positive('Cannot be zero'),
            people: Yup.number().typeError('Must be a number').positive('Cannot be zero'),
        }),
        onSubmit: (values) => {
            console.log(values);
        },

    })
    const amountCtx = useContext(AmountContext)

    const calculateAmount = (_tip?: any) => {

        const { bill, people, } = formik.values;
        const tip = formik.values.tip ?? _tip;
        if (bill && people && tip) {
            const splitBill = +bill / +people;
            const tipAmount = splitBill * (+tip / 100);
            const totalAmount = splitBill + tipAmount;
            amountCtx.setAmounts(totalAmount.toFixed(2), tipAmount.toFixed(2))
        } else amountCtx.setAmounts(0, 0)
    }
    const formikCtx = useContext(FormikContext)


    useEffect(() => {
        formikCtx.setFormikHook(formik)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [amountCtx])


    return <div className="col-md-5 ms-3"  >
        <div className="mt-3" >
            <Input
                errorText={formik.errors.bill}
                hasError={formik.touched.bill}
                type="number"
                name="bill"
                value={formik.values.bill ?? ''}
                id="bill"
                min="0"
                step={".01"}
                label="Bill"
                icon={DollarIcon}
                onChange={formik.handleChange}
                onBlur={(e) => {
                    formik.handleBlur('bill')(e);
                    calculateAmount();
                }}
            />
        </div>

        <div className="mt-5">
            <Tip
                value={formik.values.tip ?? 0}
                errorText={formik.errors.tip}
                hasError={formik.errors.tip !== undefined && formik.touched.tip}
                onChange={async (e) => {
                    await formik.setFieldValue('tip', e);
                    await formik.setFieldTouched('tip', true)
                    calculateAmount(e)
                }}
            />
        </div>
        <div className="mt-5">
            <Input
                errorText={formik.errors.people}
                hasError={formik.touched.people}
                type="number"
                name="people"
                id="people"
                label="Number of People"
                value={formik.values.people ?? ''}
                icon={PersonIcon}
                min="0"
                onChange={formik.handleChange}
                onBlur={(e) => {
                    formik.handleBlur('people')(e)
                    calculateAmount()
                }} />
        </div>
    </div>
}