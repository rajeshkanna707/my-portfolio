import { Component, AfterViewInit} from '@angular/core';
import { GcPdfViewer } from '@grapecity/gcpdfviewer';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements AfterViewInit {

  constructor() { }

 
    
    ngAfterViewInit() {
      const viewer = new GcPdfViewer("#viewer", {
        workerSrc: "//node_modules/@grapecity/gcpdfviewer/gcpdfviewer.worker.js",
        restoreViewStateOnLoad: false
      });
    // viewer.addDefaultPanels();
    viewer.open("assets/Rajesh.pdf");
  }

}
