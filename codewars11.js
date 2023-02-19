function sum (numbers) {
  var cont = 0;
    if(numbers.length > 0){
      for(var i = 0; i < numbers.length; i++){
        cont = cont + numbers[i];
      }
      return cont;
    }
  return 0;
};
