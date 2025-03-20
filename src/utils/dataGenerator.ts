const divisions = ['B2B', 'B2C'];
const types = ['expenses', 'income', 'revenue', 'debt'];

export interface DataItem {
  division: string,
  date: string | Date,
  amount: number,
  type: string,
  category: string
}

const categories = [
  "Аренда офиса",
  "Оплата интернета и связи",
  "Покупка программного обеспечения",
  "Обслуживание серверов",
  "Коммунальные платежи",
  "Бухгалтерские услуги",
  "Юридическое сопровождение",
  "Закупка канцелярии",
  "Курьерские услуги",
  "Командировочные расходы",
  "Обучение сотрудников",
  "Организация корпоративных мероприятий",
  "Обслуживание транспортных средств",
  "Закупка расходных материалов",
  "Ремонт офисного оборудования",
  "Медицинское страхование сотрудников",
  "Закупка мебели",
  "Разработка маркетинговых материалов",
  "Реклама в социальных сетях",
  "Поддержка IT-инфраструктуры"
];

const getRandomCategory = () => {
    const index = getRandomInt(categories.length - 1);
    return categories[index];
}
export function getRandomInt(arg1: number, arg2: number | null = null) {
    if (arg2 === null) {
      const rand = Math.random() * arg1;
      return Math.round(rand);
    } else {
      const min = arg1;
      const max = arg2;
      const rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
    }
}

const getRandomDate = () => {
    const startDate = new Date('2024-01-01').getTime();
    const endDate = new Date('2024-12-31').getTime();
    const date = new Date(startDate + Math.random() * (endDate - startDate));
    return date;
}

export const generateRandomData = (quantity: number) => {
  const data: Array<DataItem> = [];

  
  for (let i = 0; i < quantity; i++) {
      const division = divisions[getRandomInt(divisions.length - 1)];
      const date = getRandomDate();
      const amount = getRandomInt(60000);
      const type = types[getRandomInt(types.length - 1)];
      const category = getRandomCategory();

    data.push({
      division,
      date,
      amount,
      type,
      category,
    });
  }

  return data;
};