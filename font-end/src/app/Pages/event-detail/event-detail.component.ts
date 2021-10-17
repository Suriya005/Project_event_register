import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }
test(){
  Swal.fire(
    'Good job!',
    'You clicked the button!',
    'success'
  )}

  back(){
    this._router.navigate(['/event-list']);
  }
}
