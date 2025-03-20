import { Box, Typography } from "@mui/material";
import { types } from "../utils/expencesTypes";
import { prettyPrice } from "../../../utils/prettyPrice";

const TooltipItem: React.FC<{ payload?: any }> = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <Box sx={{ bgcolor: 'white', border: '1px solid #ccc', borderRadius: 4, width: '100%', p: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 'bold', width: '100%' }}>{label}</Typography>
          {payload.map((entry: any, index: number) => (
            <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
              <Typography variant="body2" sx={{ color: entry.color }}>{types[entry.name]}</Typography>
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{prettyPrice(entry.value)}</Typography>
            </Box>
          ))}
        </Box>
      );
    }
  
    return null;
};

export default TooltipItem;