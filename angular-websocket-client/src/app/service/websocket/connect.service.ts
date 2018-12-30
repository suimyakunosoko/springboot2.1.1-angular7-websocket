import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {WebsocketService} from './websocket.service';
import {ConnectModel} from '../../model/websocket/connect.model';
import {map} from 'rxjs/operators';

@Injectable()
export class ConnectService {

  private messages: Subject<ConnectModel>;

  private connectUrl(): string {
    return `ws://localhost:9000/app/connect`;
  }

  constructor(private ws: WebsocketService) {
  }

  connect(): Subject<ConnectModel> {
    return this.messages = <Subject<ConnectModel>>this.ws
    .connect(this.connectUrl())
    .pipe(
      map((response: MessageEvent): ConnectModel => {
        const data = JSON.parse(response.data) as ConnectModel;
        return data;
      }));
  }

  send(message: string): void {
    this.messages.next(this.createMessage(message));
  }

  private createMessage(message: string): ConnectModel {
    return new ConnectModel(message);
  }
}
