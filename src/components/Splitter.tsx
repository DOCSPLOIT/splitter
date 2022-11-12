import AmountContextWrapper from "../contexts/AmountContext";
import Bill from "./Bill";
import AmountView from "./AmountView/AmountView";
import FormikContextWrapper from "../contexts/FormikContext";

export default function Splitter() {
    return <FormikContextWrapper>
        <AmountContextWrapper>
            <div className="d-flex flex-column flex-md-row flex-sm-column">
                <Bill />
                <AmountView />
            </div>
        </AmountContextWrapper>
    </FormikContextWrapper>
}