const createData = (currentValue) => {
  const data = []
  let dates = ["Q1 2018","Q2 2018","Q3 2018","Q4 2018","Q1 2019","Q2 2019","Q3 2019","Q4 2019"];
  dates.forEach((date, idx) => {
    data.push({
      date: date,
      estimated: (Math.random() * currentValue),
      actual: (Math.random() * currentValue),
    })
  })
  return data;
}



module.exports = createData;
