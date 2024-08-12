import { Component } from '@angular/core';
import { SceneComponent } from "../scene/scene.component";

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [SceneComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
