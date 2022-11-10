import { useState } from 'react'
import CheckBox from '../../ui/CheckBox/CheckBox';
import style from './Tip.module.css'
export default function Tip({ onChange, hasError, errorText, value }: { hasError?: boolean, errorText?: string, onChange: (e: any) => void, value: number }) {
    const defaultTips = [5, 10, 15, 25, 50,]
    const [selected, setSelected] = useState(0);

    return <>
        <div className="d-flex justify-content-between col-12">
            <label className="form-label">Select Tip %</label>
            {hasError && <small id="billId" className="form-text text-danger ">{errorText}</small>}
        </div>
        <div className={'d-flex flex-wrap justify-content-between align-items-center' + style.flexContainer}>
            {defaultTips
                .map((item, index) => {
                    return <CheckBox
                        className={style.label + ' py-1 my-2'}
                        key={index}
                        label={item + '%'}
                        value={item}
                        checked={item === value}
                        onCheck={(e) => {
                            setSelected(e);
                            onChange(e);
                        }
                        } />
                })}
            <div className={style.label + ' my-2'}>
                <input type="number"
                    className={style.input + ' form-control m-0 p-0 w-100 h-100'}
                    placeholder="Custom"
                    onChange={(e) => {
                        setSelected(+e.target.value);
                    }}
                    onBlur={(e) => {
                        onChange(selected);
                    }}
                />
            </div>
        </div>
    </>
}