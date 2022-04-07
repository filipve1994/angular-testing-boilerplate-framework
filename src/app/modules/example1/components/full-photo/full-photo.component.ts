import {Component, Input, OnInit} from '@angular/core';
import {Photo} from "../../models/photo";

@Component({
  selector: 'app-full-photo',
  templateUrl: './full-photo.component.html',
  styleUrls: ['./full-photo.component.scss']
})
export class FullPhotoComponent {
  @Input()
  public photo: Photo | null = null;
}
