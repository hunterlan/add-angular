import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatInput} from "@angular/material/input";
import {ImageService} from "./services/image.service";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ImageType} from "./models/image-type";
import {NgIf} from "@angular/common";
import {ImageSliderComponent} from "./components/image-slider/image-slider.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatTab, MatTabGroup, MatCard, MatCardHeader, MatCardContent, MatButton, MatFormField, MatSelect, MatOption, MatFormFieldModule, MatInput, ReactiveFormsModule, NgIf, ImageSliderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ADDProject';
  imageSubmitForm = new FormGroup({
    count: new FormControl<number>(1, [Validators.required, Validators.min(1)]),
    imageType: new FormControl<ImageType>(ImageType.Raw, [Validators.required]),
  });
  tabIndex = 0;
  images: string[] = [];

  constructor(private readonly imageService: ImageService) {}

  submit() {
    if (this.imageSubmitForm.valid) {
      const form = this.imageSubmitForm.value;
      this.imageService.get(form.imageType!, form.count!).subscribe(images => {
        this.images = images.map(i => i.replaceAll('\'' ,'').replace('b', 'data:image/png;base64,'))
      });
    }
  }
}
