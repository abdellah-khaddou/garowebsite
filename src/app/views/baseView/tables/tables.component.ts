import { RedirectService } from './../../../services/redirect.service';

import * as _ from "lodash";
import { Observable, Subject, merge } from 'rxjs';
import { Component, OnInit, ViewChild, Renderer2, Input, Output, EventEmitter, ContentChild, ElementRef } from "@angular/core";

import { DataTableDirective } from "angular-datatables";


@Component({
    selector: "data-table",
    templateUrl: "./tables.component.html",
    styleUrls: ["./tables.component.css"],
})
export class DataTablesComponent implements OnInit {

    public dtOptions: DataTables.Settings = {};
    public dtTrigger: Subject<any> = new Subject();



    @Input() data :Observable<any>
    thisData:any
    @Input() settings
    @Input() loading
    @Output() public event: EventEmitter<any> = new EventEmitter<any>();
    constructor(private redirect:RedirectService) { }

   
    public ngOnInit(): void {
        this.dtOptions = {
          pagingType: 'full_numbers',
          pageLength: 10,
        };
        this.data.subscribe(data=>{
            this.thisData=data;
            this.dtTrigger.next();
        })
        
    }

    edit(release){
        this.redirect.toAction(this.settings.module,"edit",release)
        //this.event.emit({action:"edit",value:release})
    }
    delete(release){
        let res = confirm('are you sure ')
        if(res)this.event.emit({action:"delete",value:release})
        


    }
    show(release){
        //this.event.emit({action:"show",value:release})
        this.redirect.toAction(this.settings.module,"show",release)


    }

    ngAfterViewInit(): void {
         if(this.data)
            this.dtTrigger.next();
    }
    ngAfterViewChecked(){
        //this.dtTrigger.next();
    }
    ngOnDestroy(): void {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
      }
}