function sumArray(array) {
 if (array == null || array.length <= 1){
   return 0
 }
   else{
   return array.sort((a,b) => a-b).slice(1, array.length - 1).reduce((a,b) => a + b, 0)
       }
}
