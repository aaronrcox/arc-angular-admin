import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UiModule { 
  constructor() {

    const props = getComputedStyle(document.documentElement);
    const style = document.documentElement.style;
    const colors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'];
    for(let col of colors){
      const lighterPropName = `--${col}-lighter`;
      const darkerPropName = `--${col}-darker`;
      const lighterVal = LightenDarkenColor(props.getPropertyValue(`--${col}`), 10);
      const darkerVal = LightenDarkenColor(props.getPropertyValue(`--${col}`), -10);

      console.log(`${col}-lighter:`, lighterVal);
      console.log(`${col}-darker:`, darkerVal);

      style.setProperty(`--${col}-darker`, darkerVal);
      style.setProperty(`--${col}-lighter`, lighterVal);
    }
  }

}


function LightenDarkenColor(col: string, amt: number) {
  
  var usePound = false;
  col = col.trim();

  if (col[0] == "#") {
      col = col.slice(1);
      usePound = true;
  }

  var num = parseInt(col,16);

  var r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if  (r < 0) r = 0;

  var b = ((num >> 8) & 0x00FF) + amt;

  if (b > 255) b = 255;
  else if  (b < 0) b = 0;

  var g = (num & 0x0000FF) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  let result = (g | (b << 8) | (r << 16)).toString(16);
  result = '#' + result.padStart(6, '0');
  return result;

}