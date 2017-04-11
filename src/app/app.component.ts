import { Component, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import "bootstrap-datepicker";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app works!';

  constructor() {

  }

  ngAfterViewInit() {
    var that = this;
    
    $('#hereiam').datepicker({
      clearBtn: true,
      format: 'yyyy-mm-dd',
      onSelect: function (value, date) {
        alert(123);
      },
      todayBtn: "linked",
      startView: 0, maxViewMode: 0, minViewMode: 0
    }).on('onSelect', function (ev) {
      alert("Change");
    });
  }
}