import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  closeLeftMenu() {
    document.getElementById("leftMenu").style.display = "none";
    document.getElementById("overlay").style.display = "none";
  }

}
