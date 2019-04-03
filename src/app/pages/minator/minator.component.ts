import {Component, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'ngx-minator',
  templateUrl: './minator.component.html',
  styleUrls: ['./minator.component.scss']
})
export class MinatorComponent implements OnInit {

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
      title: "minator",
      des: "admin 监控服务健康平台",
      status: 'primary',
      default: '#7659ff'
    },
    {
      url: "http://hcloud-consul:8500",
      title: "consul",
      des: "admin ",
      status: 'primary',
      default: '#ff4559'
    }
  ];

  frameUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.frameUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url[0].url);
  }

  ngOnInit() {
  }

  redirectUrl(url: string) {
    this.frameUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
