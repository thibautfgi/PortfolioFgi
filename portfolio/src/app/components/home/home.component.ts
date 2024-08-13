import { Component } from '@angular/core';
import { SceneComponent } from "../scene/scene.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SceneComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
