import { Component, OnInit, HostListener,ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lateral',
  templateUrl: './lateral.component.html',
  styleUrls: ['./lateral.component.css']
})

export class LateralComponent implements OnInit {

  isLogged = true;
  sidebarOpen = true;

  constructor(
    private router: Router,
    private el: ElementRef,
    private renderer: Renderer2
  ){}


ngOnInit() {
 /* this._initListeners();*/
  this.isLogged = true;
  
}

/*private _initListeners() {
  const sidebar = this.el.nativeElement.querySelector('.sidebar');
  if (sidebar) {
    sidebar.addEventListener('mouseover', () => {
      this.renderer.setElementClass(sidebar, 'open', true);
      this.sidebarOpen = true;
    });
    sidebar.addEventListener('mouseleave', () => {
      sidebar.classList.remove('open');
      this.sidebarOpen = false;
    });
  }
}*/

clickIcon():void {
  this.sidebarOpen = !this.sidebarOpen;
}

logout() {
  this.router.navigate(['']);
}
}