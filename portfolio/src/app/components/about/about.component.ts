import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {




  // Ensure this method is public so that it can be accessed in the template
  public downloadPdf() {
    var pdfUrl = '/assets/cv/CV_ThibautFigueira.pdf';
    var a = document.createElement('a');
    a.href = pdfUrl;
    a.download = 'CV_ThibautFigueira.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }


}
