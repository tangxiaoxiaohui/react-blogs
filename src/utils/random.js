/**
 * 获取随机整数
 * @param {*} min  小的值
 * @param {*} max  大的值
 */
export function getRandomInteage(min, max) {
  if (min > max) {
    [min, max] = [max, min];
  }
  [min, max] = [parseInt(min), parseInt(max)];
  return min + parseInt(Math.random() * (max - min + 1)) + 1;
}

/**
 * 获取随机颜色
 * @param {*} isOpticy 是否透明 默认为true 
 */
export function getRandomRgba(isOpticy = true) {
  let red = getRandomInteage(0, 255);
  let green = getRandomInteage(0, 255);
  let blue = getRandomInteage(0, 255);
  let opcity = getRandomInteage(0, 10) / 10;
  !isOpticy && (opcity = 1);
  return `rgba(${red},${green},${blue},${opcity})`;
}
