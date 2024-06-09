import {Component, EventEmitter, Output} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-image-uploader',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './image-uploader.component.html',
  styleUrl: './image-uploader.component.css'
})
export class ImageUploaderComponent {
  base64Image: string | null = null;
  @Output() sendImage = new EventEmitter<string>();

  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      this.convertToBase64(file).then((base64: string) => {
        this.base64Image = base64;
      }).catch(error => {
        console.error('Error converting file to Base64:', error);
      });
    }
  }

  async convertToBase64(file: File): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  }

  onSubmit(): void {
    if (this.base64Image) {
      console.log('Base64 Image:', this.base64Image);
      this.sendImage.emit(this.base64Image);
    } else {
      console.warn('No image selected.');
    }
  }
}
