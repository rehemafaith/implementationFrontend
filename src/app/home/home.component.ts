import { Component, OnInit ,NgZone} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GynaService } from '../service/gyna/gyna.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  gynaForm: FormGroup;
  GynaList: any = [];
  GynaArr: any = [];
  constructor(
    public gynaService: GynaService,
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadGyna(1);
  }

 //get gyna details
 loadAllGynas() {
  return this.gynaService.getAllGyna().subscribe((data: {}) => {
    this.GynaList = data;
    console.log(data)
  })
}

loadGyna(id) {
  return this.gynaService.getGyna(id).subscribe((data: {}) => {
    this.GynaList = data;
    console.log(data)
  })
}


}
