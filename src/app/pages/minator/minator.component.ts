import {Component, Input, OnInit, Output} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'ngx-minator',
  templateUrl: './minator.component.html',
  styleUrls: ['./minator.component.scss']
})
export class MinatorComponent implements OnInit {

  // minatorUrl: String = "http://hcloud-minator:3456";
  frameUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    let url = "http://www.baidu.com";
    this.frameUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }

  ngOnInit() {
  }

}
