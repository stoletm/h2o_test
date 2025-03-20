import { Box, Stack, Typography } from "@mui/material";
import { prettyPrice } from "../../../utils/prettyPrice";
import { DataItem } from "../../../utils/dataGenerator";
import { types } from "../utils/expencesTypes";

const LegendItem: React.FC<{ payload?: any, chartData: DataItem[] }> = ({ payload, chartData }) => {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2, width: '100%' }}>
        {payload.map((entry: any, index: number) => {
          const title = types[entry.value];
          const sum = chartData.reduce((acc, item) => {
            return acc += +(item[entry.value as keyof DataItem])}, 0);
  
          return <Box key={index} sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
            <Box
              sx={{
                width: '28px',
                height: '28px',
                backgroundColor: entry.color,
                borderRadius: '50%',
                mr: 1,
              }}
            />
            <Typography variant="body2" sx={{ fontSize: 14, fontWeight: 400 }}>
              <Stack>
                {title}
                <Typography sx={{ fontSize: 16, fontWeight: 700 }}>
                  <span style={{ fontFamily: 'Roboto', marginRight: 5 }}>₽</span>
                  <span>{prettyPrice(sum)}</span>
                </Typography>
              </Stack>
            </Typography>
          </Box>
        })}
      </Box>
    );
}

export default LegendItem;