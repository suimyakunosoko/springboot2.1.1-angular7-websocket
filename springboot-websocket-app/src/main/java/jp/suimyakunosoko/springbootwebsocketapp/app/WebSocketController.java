package jp.suimyakunosoko.springbootwebsocketapp.app;

import jp.suimyakunosoko.springbootwebsocketapp.model.message.recieve.Connect;
import jp.suimyakunosoko.springbootwebsocketapp.model.message.send.ConnectResult;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.util.HtmlUtils;

public class WebSocketController {

  @MessageMapping("/connect")
  @SendTo("/room/greetings")
  public ConnectResult greeting(Connect connectInfo) throws Exception {
    Thread.sleep(1000); // simulated delay
    return new ConnectResult("Hello, " + HtmlUtils.htmlEscape(connectInfo.getUserName()) + "!");
  }
}
