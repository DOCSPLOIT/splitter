import AmountContextWrapper from "../contexts/AmountContext";
import Bill from "./Bill";
import AmountView from "./AmountView/AmountView";
import FormikContextWrapper from "../contexts/FormikContext";

export default function Splitter() {
    return <FormikContextWrapper>
        <AmountContextWrapper>
            <div className="d-flex col-md-12 p-0 flex-column flex-md-row justify-content-between align-items-around flex-sm-column">
                <Bill />
                <AmountView />
            </div>
        </AmountContextWrapper>
    </FormikContextWrapper>
}