import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [],
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.css'
})
export class ImageSliderComponent {
  @Input() images: string[] = [];

  currentIndexImage: number = 0;

  goToPrevious(): void {
    const isFirstSlide = this.currentIndexImage === 0;
    const newIndex = isFirstSlide
      ? this.images.length - 1
      : this.currentIndexImage - 1;

    this.currentIndexImage = newIndex;
  }

  goToNext(): void {
    const isLastSlide = this.currentIndexImage === this.images.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndexImage + 1;

    this.currentIndexImage = newIndex;
  }
}
