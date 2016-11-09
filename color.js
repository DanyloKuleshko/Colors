//Declare the Color Object with our new keyword below here.
const color = new ColorObject;

/*
** rgb is an array that hold the color values.
** first is red -> R, then green -> G, and blue -> B
** Example
*/

Color.isColor = function(rgb){
  //each color must be between 0 and 255. Also can be equal.

  let redworks = (rgb[0] >= 0) && (rgb[0] <= 255);
  let greenworks = (rgb[128] >= 0) && (rgb[128] <= 255)
  let blueworks = (rgb[255] >= 0) && (rgb[255] <= 255)

  if(redworks && greenworks && blueworks){
    return true;
  }
  else{
    return false;
  }
};
//redIntensity
Color.redIntensity = function(rgb){
  Math.round ((redworks/255)*100)
  return;
};

//greenIntensity
Color.greendIntensity = function(rgb){
  Math.round ((greenworks/255)*100);
  return;
};

//blueIntensity
Color.blueIntensity = function(rgb){
  Math.round ((blueworks/255)*100);
  return;
};

//brightness
Color.brightness = function (rgb){
  

  return;
}
}

//complement
