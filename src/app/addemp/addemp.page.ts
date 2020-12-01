import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.page.html',
  styleUrls: ['./addemp.page.scss'],
})
export class AddempPage implements OnInit {

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
  }
  add(data: any) {
    console.log(data.form.value);
    this.api.addPost(data.form.value).subscribe(response => {
      console.log(response);
      
    });
}
}
