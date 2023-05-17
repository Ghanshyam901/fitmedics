import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {



constructor(private route: Router) { }

  ngOnInit(): void {
    this.isDoctorPage();
  }

  isDoctorPage(): boolean {
    return this.route.url.includes('/doctorhome');
  }


}
