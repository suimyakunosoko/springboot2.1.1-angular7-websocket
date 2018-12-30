package jp.suimyakunosoko.springbootwebsocketapp.model.message.recieve;

import lombok.Data;

@Data
public class Connect {

  private String userId;
  private String userName;
}
