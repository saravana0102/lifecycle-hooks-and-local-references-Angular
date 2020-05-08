import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'User';
  itemDetails = [{"itemName":"Test Item","itemDesc":"Test Description"}];

  onAddItem(event){
    this.itemDetails.push({"itemName":event.itemName,
      "itemDesc":event.itemDesc});
    console.log(this.itemDetails);
  }
  onChangeTest(){
    this.itemDetails[0].itemName = "Changed!";
  }
  onDestroyFirstElement(){
    this.itemDetails.splice(0,1);
  }
}
