import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecase'
})
export class TitlecasePipe implements PipeTransform {

  isPreposition(word: string) {
    const prep = ['the', 'of'];
    return prep.includes(word);
  }
  convertToCamelCase(word: string) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  transform(value: string) {
    if (!value) {
      return null;
    }
    const array = value.split(' ');
    const finalArray = [];
    for (let i = 0; i < array.length; i++) {
      let word = array[i].toLowerCase();
      if (!this.isPreposition(word) || i === 0) {
        word = this.convertToCamelCase(word);
      }
      finalArray.push(word);
    }
    return finalArray.reduce(function(sum, word) {
      return sum + ' ' + word;
    });
  }
}
