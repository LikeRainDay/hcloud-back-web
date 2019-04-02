import {Component, Input, OnInit, Output} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {log} from "util";

@Component({
  selector: 'ngx-minator',
  templateUrl: './minator.component.html',
  styleUrls: ['./minator.component.scss']
})
export class MinatorComponent implements OnInit {

  // minatorUrl: String = "http://hcloud-minator:3456";
  frameUrl: SafeResourceUrl;

  url = [
    {
      url: "http://hcloud-zipkin:10001",
      title: "zipkin",
      des: "链路追踪",
      status: 'primary',
      default: '#ffce73'
    },
    {
      url: "http://hcloud-minator:3470",
      title: "zipkin",
      des: "监控器",
      status: 'primary',
      default: '#7659ff'
    },
    {
      url: "http://hcloud-consul:8500",
      title: "consul",
      des: "监控器",
      status: 'primary',
      default: '#ff4559'
    },
  ]

  url_zipkin: String = "http://hcloud-zipkin:10001";
  url_minator: String = "http://hcloud-minator:3470";

  constructor(private sanitizer: DomSanitizer) {
    this.frameUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url_zipkin);
  }

  ngOnInit() {
  }

  clickToZipkin() {
    this.frameUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url_zipkin);
    log("----into ziplin")
  }

  clickToMinator() {
    this.frameUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url_minator);
    log("----into Minator")

  }
}
