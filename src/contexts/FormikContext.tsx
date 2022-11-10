import { createContext, useState } from "react";

export const FormikContext = createContext<any>({});


export default function FormikContextWrapper(props: any) {
    const [formik, setFormik] = useState<any>(null);
    const setFormikHook = (_formik: any) => {
        setFormik(_formik)
    }
    return <FormikContext.Provider value={{ formik, setFormikHook }}>
        {props.children}
    </FormikContext.Provider>
}