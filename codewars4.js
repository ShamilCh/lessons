const areaOrPerimeter = function(l , w) {
  var s = (l * l);
  var p = l + l + w + w;
  if(l == w){
  return s;
    }
  return p;
}
