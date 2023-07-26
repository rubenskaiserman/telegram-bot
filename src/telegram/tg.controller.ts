import {
  Body,
  Controller,
  Logger,
  Post,
  Get,
  Patch,
  HttpCode,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { TelegramService } from './tg.service';
import fetch from 'node-fetch';

@ApiTags('Telegram')
@Controller('telegram')
export class TelegramController {
  constructor(
    private readonly telegramService: TelegramService,
  ) {}

  @Post('chatbot')
  @ApiOperation({
    summary: 'chat bot message target',
  })
  @HttpCode(200)
  async chat(@Body() data: any) {
    console.log(data);
    const response = await fetch(
      'https://api.telegram.org/bot' + process.env.TG_TOKEN + '/sendMessage',
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chat_id: data.message.chat.id,
          text: data.message.text
        })
      }
    ) 
  }
}
