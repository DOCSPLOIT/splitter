import { useState } from 'react'
import style from './CheckBox.module.css'
export default function CheckBox(props: { className?: string, value: any, label: string, onCheck: (e: any) => void, checked?: boolean }) {
    const [checked, setChecked] = useState<boolean>();

    return <label className={`text-white ${(props.checked ?? checked) ? style.checked : style.unchecked} ` + props.className}
        onClick={(e) => {
            if (props.checked === true) {
                props.onCheck(undefined);
            } else {
                props.onCheck(props.value);
            }
            setChecked(!checked)
        }}
    >
        {props.label}
    </label>


}