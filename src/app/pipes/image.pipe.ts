import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(image: string, type: string): string {
    let url = `assets/`;
    switch (type) {
      case 'banner':
        url = `${url}banners/${image}`;
        break;
      case 'product':
        url = `${url}products/${image}`;
        break;
      default:
        url = `${url}banners/${image}`;
        break;
    }
    return url;
  }

}
