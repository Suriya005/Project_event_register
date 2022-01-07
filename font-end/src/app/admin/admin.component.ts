import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(   private _router: Router,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  logout() {
    Swal.fire({
      title: 'ออกจากระบบ',
      text: 'คุณต้องการออกจากระบบ ใช่หรือไม่?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ใช่',
      cancelButtonText: 'ไม่ใช่',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'ออกจากระบบสำเร็จ!',
          text: 'กรุณาเข้าสู่ระบบอีกครั้ง เพื่อใช้งาน',
          icon: 'success',
          timer: 1500,
        });
        localStorage.clear();
        this._router.navigate(['/login']);
      }
    });
  }

}
