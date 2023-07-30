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
  constructor(private readonly telegramService: TelegramService) {}

  @Post('chatbot')
  @ApiOperation({
    summary: 'chat bot message target',
  })
  @HttpCode(200)
  async chat(@Body() data: any) {
    console.log('DATA:  ', data);
    if (data.message.text === '/start') {
      this.telegramService.start(data);
    } else if (data.message.text === '/about') {
      if(data.message.chat) {
        const response = this.telegramService.about(data.message.chat.id);
        console.log(response)
      } else {
        console.log("ERROR")
      }
    }
  }
}
