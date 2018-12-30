import {Component, Input, OnInit} from '@angular/core';
import {ConnectModel} from '../../model/websocket/connect.model';
import {ConnectService} from '../../service/websocket/connect.service';



@Component({
  selector: 'app-websocket',
  templateUrl: './websocket.component.html',
  styleUrls: ['./websocket.component.scss']
})
export class WebsocketComponent implements OnInit {

  @Input() messages: ConnectModel[] = new Array();

  constructor(
    private connectService: ConnectService
  ) {
  }

  ngOnInit() {
    this.connectService.connect();
  }

  send(): void {
    this.connectService.send('Hello WebSocket');
  }

}
