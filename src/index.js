module.exports = function count(s, pairs) {
  let answer = 0, check, val;
  let N = pairs.reduce((a, b) => a * Math.pow(b[0], b[1]), 1);
  if (N > 100000000) return 0;
  for (var k = 0; k < N; k++) {
    for (var j = 0; j < s.length; j++) {
      val = ( checkDivider(k + j, pairs) === 1 ) ? 1 : 0;
      check = ( val === +s[j] ) ? true : false;
      if (!check) break;
    }
    if (check) answer++;
  }
  const result = answer %   1000000007;
  return result;
}


function checkDivider(k, dividerArr){
  for(let i = 0; i < dividerArr.length; i++){
    if(k%dividerArr[i][0]===0) return 0;
  }
  return 1;
 }