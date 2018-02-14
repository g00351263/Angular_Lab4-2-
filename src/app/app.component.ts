import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  num:number = 0;
  txt:String = null;
  labelHide = true;

  Count(){
     this.num++;
     alert(this.num);
  }

  show(){
    if(this.labelHide == true){
      this.labelHide = false;
    }
    else{
      this.labelHide = true;
    }
  }
}
