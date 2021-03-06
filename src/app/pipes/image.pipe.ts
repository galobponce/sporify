import { Pipe, PipeTransform } from '@angular/core';
import { Image } from 'src/app/types/spotify';

@Pipe({
  name: 'image',
})
export class ImagePipe implements PipeTransform {
  transform(images: Image[] | null | undefined): string {
    if (!images) {
      return 'assets/no-image.png';
    }

    if (!images[0]) {
      return 'assets/no-image.png';
    }

    return images[0].url;
  }
}
