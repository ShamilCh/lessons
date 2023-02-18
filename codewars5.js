function squareSum(numbers){
  var cont = 0;
for(var i = 0; i < numbers.length; i++){
  numbers[i] = numbers[i] * numbers[i];
  cont = cont + numbers[i]
}
  return cont;
