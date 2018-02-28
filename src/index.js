module.exports = function getZerosCount(number, base) {
  var simpleArr = [];
  var zerosSum = 0;
  var coef = 0;
  var zerosSumTemp = 0;

  while (base > 1) {
     for (var i = 2; i <=base; i++) {
      if (base % i == 0) {
        simpleArr.push(i);
        base = base/i;
        break;
      }
    }
  }
  simpleArr.sort(compareNumeric);

  do { coef = 1;
  var variable = simpleArr.pop();
  while (variable == simpleArr[simpleArr.length-1]){
      simpleArr.pop();
      coef++ ;
  }
  var factor = variable;
  while (variable < number) {
      zerosSumTemp += Math.floor(number/variable);
      variable = variable*factor;
  }
  zerosSumTemp = Math.floor(zerosSumTemp/coef);
  if (zerosSum == 0 || zerosSumTemp < zerosSum) {
      zerosSum = zerosSumTemp;
  }
  zerosSumTemp = 0;
  } while (simpleArr.length > 0);
  
  return zerosSum;
}

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}
