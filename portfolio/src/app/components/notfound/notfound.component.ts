import { Component } from '@angular/core';
import { SceneComponent } from "../scene/scene.component";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [SceneComponent, RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.css'
})
export class NotfoundComponent {

}
