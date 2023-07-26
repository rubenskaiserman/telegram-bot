import { Module } from '@nestjs/common';
import { TelegramController } from './tg.controller';
import { TelegramService } from './tg.service';


@Module({
  imports: [],
  providers: [TelegramService],
  controllers: [TelegramController],
})
export class TelegramModule {}