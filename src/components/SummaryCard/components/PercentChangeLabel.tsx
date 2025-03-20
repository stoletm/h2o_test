import { Button, Stack, SvgIcon, Typography } from "@mui/material";
import { ReactComponent as ArrowIcon } from '../../../assets/icons/arrow.svg';

interface PercentChangeProps {
    value: number;
    isActive?: boolean;
}
  
const PercentChangeLabel: React.FC<PercentChangeProps> = ({ value, isActive }) => {
    const isPositive: boolean = parseFloat(value.toString()) > 0;
    const textColor: string = isActive ? 
      '#FFFFFF' : 
        isPositive ? 
        'success.main' : 
        'error.main';
  
    const bgcolor: string = isActive
      ? 'rgba(248, 248, 248, .25)'
      : isPositive
      ? 'rgba(84, 211, 194, .37)'
      : 'rgba(252, 92, 101, 0.15)';
    return (
      <Button
        sx={{
          px: '38px',
          py: '8px',
          textAlign: 'center',
          bgcolor,
          borderRadius: '20px',
        }}
      >
        <Typography sx={{ fontSize: 16 }} variant='subtitle2' color={textColor}>
          <Stack sx={{ py: 0 }} direction="row" justifyContent={'center'} gap={0} alignItems="center">
            <SvgIcon component={ArrowIcon} sx={{ color: textColor, transform: isPositive ? 'none' : 'rotate(180deg)' }} viewBox='-6 -4 24 24'/>
            {Math.abs(value)} %
          </Stack>
        </Typography>
      </Button>
    );
};

export default PercentChangeLabel;