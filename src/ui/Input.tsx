import React from "react";

export default function Input({ hasError, icon, label, errorText, onChange, ...inputAttr }: InputAttributes) {
    return <div className="mb-3 position-relative col-md-12">
        <div className="d-flex justify-content-between col-12">
            <label htmlFor={inputAttr.id} className="form-label">{label}</label>
            {hasError && <small className="form-text text-danger ">{errorText}</small>}
        </div>
        <input
            className="form-control text-right"
            placeholder="0"
            onChange={onChange}
            {...inputAttr}
        />
        <img alt="icon for input" src={icon} className="form-control-leading" />
    </div>
}

interface InputAttributes extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    errorText?: string;
    hasError?: boolean
    onChange: React.ChangeEventHandler<HTMLInputElement>
    icon: string;
    type: React.HTMLInputTypeAttribute
}