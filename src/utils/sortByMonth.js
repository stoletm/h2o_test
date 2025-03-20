const sortArr = ['янв.', 'февр.', 'март', 'апр.', 'май', 'июнь', 'июль', 'авг.', 'сент.', 'окт.', 'нояб.', 'дек.'];

export const sortByMonth = (a, b) => sortArr.indexOf(a.periodName) - sortArr.indexOf(b.periodName);