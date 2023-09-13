import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = "Dũng Hoàng";
  public age = 19;
  public traicay = ['Táo', 'Nho', 'Cam'];
  public traicay2 = [{ ten: 'Táo', gia: 12 }, { ten: 'Nho', gia: 300 }, { ten: 'Cam', gia: 350 }];
  constructor() { }
  ngOnInit(): void {

  }
  public resetName(): void {
    console.log("resetName");
    this.name = '';
    console.log("Trái cây:" + this.traicay)
  }
}
