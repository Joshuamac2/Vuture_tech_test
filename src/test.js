function frequency(input) {
  for (var i = 0; i < input.length; i++){
    if(input[i] < 40 ){
      input[i] = 40;
    }else if(input[i] > 1000){
      input[i] = 1000;
    }
  }
  return input;
};
