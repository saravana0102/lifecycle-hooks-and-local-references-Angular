import { Component, OnInit, ViewChild ,ElementRef,EventEmitter,Output, AfterContentInit, ContentChild, AfterViewInit, OnChanges, DoCheck, SimpleChanges,Input, AfterViewChecked, AfterContentChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: [ './add-item.component.css' ]
})
export class AddItemComponent  
implements OnInit,
AfterContentInit,
AfterViewInit,
OnChanges,
DoCheck,
AfterViewChecked,
AfterContentChecked,
OnDestroy{
  @Output() addedItem = new EventEmitter<{itemName:string,itemDesc:string}>();
  @Input() nameOfItem : string;
  @ViewChild('itemDesc') itemDesc: ElementRef;
  //for angular 8 we need to replace above syntax
  //@ViewChild('itemDesc',{ static : true}) itemDesc: ElementRef;

  @ContentChild('exampleText') exampleText: ElementRef;
  
  constructor(){
    console.log("constructor called!");
  }
  ngOnChanges(changes:SimpleChanges){
    console.log("ngOnChanges called!");
    console.log(changes);
  }
  ngOnInit(){
    console.log("ngOnInit called!");
  }
  ngDoCheck(){
    console.log("ngDoCheck called!");
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit called!");
    console.log("Text"+this.itemDesc.nativeElement.value);
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked called!");
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit called!");
    console.log(this.exampleText.nativeElement.innerText);
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked called!");
  }
  ngOnDestroy(){
    console.log("ngOnDestroy called!");
  }
  onAddItem(itemName){
    this.addedItem.emit({itemName:itemName,itemDesc:this.itemDesc.nativeElement.value});
  }
}
