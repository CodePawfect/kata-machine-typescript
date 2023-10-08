export default function bs_list(haystack: number[], needle: number): boolean {
  let low: number = 0;
  let high: number = haystack.length;

  do {
    let mid: number = Math.floor(low + (high - low) / 2);
    if(haystack[mid] === needle) return true;
    else if(haystack[mid] < needle) low = mid + 1;
    else high = mid;
  } while(low < high)

  return false;
}