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
    if (data.message.text === '/start' || data.message.text === '/help') {
      await this.telegramService.help(data);
    } else if (data.message.text === '/about') {
      await this.telegramService.about(data.message.chat.id);
    } else if (data.message.text === '/github') {
      await this.telegramService.github(data.message.chat.id)
    } else if(data.message.text === '/linkedin') {
      await this.telegramService.linkedin(data.message.chat.id);
    } else if(data.message.text === '/contact') {
      await this.telegramService.contact(data.message.chat.id);
    } else {
      await this.telegramService.gpt_response(data.message.chat.id, data.message.text);
    }
  }
}
