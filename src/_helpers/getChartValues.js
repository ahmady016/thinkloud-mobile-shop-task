export default function getChartValues(list, srcKey, distKey) {
  let grouped = Object
  .values(list)
  .reduce((acc, mobile) => {
    acc[mobile[srcKey]] = acc[mobile[srcKey]] + 1 || 1
    return acc
  }, {})
  return Object
    .entries(grouped)
    .map(([key, value]) => ({
      [distKey]: key,
      count: value,
    }))
}
