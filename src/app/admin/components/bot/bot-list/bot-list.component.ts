import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bot-list',
  templateUrl: './bot-list.component.html',
  styleUrls: ['./bot-list.component.scss']
})
export class BotListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
// signout(){
//   // localStorage.clear();
//   // this.router.navigateByUrl('auth');
  
// }
}
