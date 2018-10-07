module.exports = function count(s, pairs) {
  const N = pairs.reduce((a, b) => a * Math.pow(b[0], b[1]), 1);
  const kSet = new Set();
  if(!isFinite(N)) N=Number.MAX_SAFE_INTEGER;

  for(let i = 1; i <= N; i++){
    for(let j = 0; j < s.length; j++){
      let n = 0;
      switch(s[j]){
        case '0':
          if(!checkDivider(i + j, pairs)) break;
          else n++;
        case '1':
          if(checkDivider(i + j, pairs)) break;
          else n++;
          
      }
      if(n===s.length){
        kSet.add(i);
      }
    }
      /*if((s[j]==='1' && !checkDivider(i + j, pairs)) || (s[j]==='0' && checkDivider(i + j, pairs))){
        kSet.add(i);
		//console.log(i)
      }
      else {
        break;
      } */  
  }
  
 function checkDivider(k, dividerArr){
   for(let i = 0; i < dividerArr.length; i++){
     if(k%dividerArr[i][0]===0) return true;
   }
   return false;
  }


  return kSet.size%1000000007;


 
}