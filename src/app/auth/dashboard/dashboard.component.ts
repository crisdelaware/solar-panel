import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor( private auth: AuthService, private route: Router ) { }

  ngOnInit(): void {
  }

  logout() {
    this.auth.logout()
    .then(() => {
      this.route.navigate(['/login']);
    })
    .catch(error => console.log(error));
  }

}
