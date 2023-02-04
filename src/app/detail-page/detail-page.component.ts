import { Component } from '@angular/core';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent {

  constructor(
  ){

  }



  submit(){
    // this.toast.success("Congratulations! Your order has been placed.",'Success')
    // this.toast.success('Message Success!', 'Title Success!');
    alert('Congratulations! Your order has been placed.')
  }

}



