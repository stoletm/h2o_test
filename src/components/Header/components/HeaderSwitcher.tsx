import { Button, Stack } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { ReactComponent as ArrowCircle } from '../../../assets/icons/arrowCirle.svg';
import { reports } from "../../../utils/reportTypes";

interface SwitcherProps {
  setCurrentReport: Dispatch<SetStateAction<string>>,
  currentReport: string,
}

const HeaderReportSwitcher: React.FC<SwitcherProps> = ({ setCurrentReport, currentReport }) => {
    const isFirst = reports.findIndex(i => i.value === currentReport) === 0;
    const isLast = reports.findIndex(i => i.value === currentReport) === reports.length - 1;

    return <Stack direction={'row'} spacing={'-27px'}>
        <Button sx={{ p: 0 }} onClick={() => setCurrentReport(prev => {
        if (isFirst) {
            // если нужно переключение с первого на последний(тогда убрать opacity у иконки)
            // return reports[reports.length - 1].value;
            return prev
        }
        const index = reports.findIndex(i => i.value === prev);
        return reports[index - 1].value;
        })}>
        <ArrowCircle style={{ transform: 'rotate(180deg)', opacity: isFirst ? .4 : 1 }} />
        </Button>
        <Button sx={{ p: 0 }} onClick={() => setCurrentReport(prev => {
        if (isLast) {
            // если нужно переключение с последнего на первый(тогда убрать opacity у иконки)
            // return reports[0].value;
            return prev
        }
        const index = reports.findIndex(i => i.value === prev);
        return reports[index + 1].value;
        })}>
        <ArrowCircle style={{ opacity: isLast ? .4 : 1 }}/>
        </Button>
    </Stack>
}

export default HeaderReportSwitcher;