export default function addCommas(number) {
  return number
    .replace(/(\.\d{2})\d*/, "$1")
    .replace(/(\d)(?=(\d{3})+\b)/g, "$1,");
}
