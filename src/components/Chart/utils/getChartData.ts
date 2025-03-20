import { DataItem } from "../../../utils/dataGenerator";
import { sortByMonth } from "../../../utils/sortByMonth";

export const getChartData = (data: Array<DataItem>, period: string, activeDivision: string = 'total', defaultMonth: number = 1) => {;
    let filteredData = data;
    if (activeDivision !== 'total') {
      filteredData = data.filter((item: DataItem) => item.division === activeDivision);
    }
    if (period === 'year') {
      const byMonths = filteredData.reduce((acc: any, item: DataItem) => {
        const monthName = new Date(item.date).toLocaleDateString('ru-RU', { month: 'short' });
        if (!acc[monthName]) {
          acc[monthName] = { periodName: monthName, expenses: 0, income: 0, revenue: 0, debt: 0, total: 0 };
        }
        acc[monthName][item.type] += item.amount;
        acc[monthName]['total'] += item.amount;
        return acc;
      }, {});
  
      
      return Object.values(byMonths).sort(sortByMonth) as Array<DataItem>;
    }
    if (period === 'month') {
      const byMonths = filteredData.filter((item: DataItem) => new Date(item.date).getMonth() === defaultMonth).reduce((acc: any, item: DataItem) => {
        const day = new Date(item.date).toLocaleDateString('ru-RU', { day: 'numeric' });
        if (!acc[day]) {
          acc[day] = { periodName: day, expenses: 0, income: 0, revenue: 0, debt: 0, total: 0 };
        }
        acc[day][item.type] += item.amount;
        acc[day]['total'] += item.amount;
        return acc;
      }, {});
  
      return Object.values(byMonths) as Array<DataItem>;
    }
    return [] as Array<DataItem>;
};