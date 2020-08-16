import { Component, Inject, OnInit } from '@angular/core';
import { CommonserviceService } from 'src/services/commonservice.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CommonserviceService]
})
export class AppComponent implements OnInit {

  title = 'Salary Saver';

  toolBarTitles: string[] = [];

  data:any;

  constructor(private commonService: CommonserviceService) {

  }

  ngOnInit() {
    this.data = this.commonService.getToolBarFromConfig();
    //toolBartitles from json
    this.data.titles.forEach(element => {
      this.toolBarTitles.push(element);
    });        
  }
}
