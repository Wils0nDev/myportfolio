import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {  faGithubSquare,faInstagramSquare,faLinkedin,faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, AfterViewInit {
  title = 'angularTests';
  list = ['Wilson Vasquez']
  @ViewChild('titleName')  titleName : ElementRef;
  constructor(library: FaIconLibrary) { 
    library.addIcons(  faGithubSquare,faInstagramSquare,faLinkedin );
    }
 

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }



}
