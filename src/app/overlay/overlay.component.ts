import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  off() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("leftMenu").style.display = "none";
  }
}
