import { Component, Input, OnChanges, SimpleChanges ,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked, OnDestroy}  from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks-demo',
  templateUrl: './life-cycle-hooks-demo.component.html',
  styleUrls: ['./life-cycle-hooks-demo.component.css']
})
export class LifeCycleDemoComponent implements OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
  @Input() data:any;
 
  constructor(){
   console.log("constructor is getting excuted");
   
  }
 
 
 
   ngOnChanges(changes: SimpleChanges): void {
     console.log("ngOnChanges is getting excuted");
     
    console.log(changes);
   }
   
   ngOnInit(): void {
     console.log("ngOnInit getting excuted");
   }
 
   ngDoCheck(): void {
     console.log("ngDoCheck getting excuted");
   }
 
   ngAfterContentInit(): void {
     console.log("content init is getting excuted");
     
   }
 
   ngAfterContentChecked(): void {
    console.log("content checked is getting excuted");
   }
 
   ngAfterViewChecked(): void {
    console.log("afterview checked is getting excuted");
    
   }
   ngAfterViewInit(): void {
     console.log("after view init is getting excuted");
     
   }
 
   ngOnDestroy(): void {
     console.log("onDestroy is getting excuted");
   }
 }