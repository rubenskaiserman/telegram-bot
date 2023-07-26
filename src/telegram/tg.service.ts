import { Injectable } from '@nestjs/common';

@Injectable()
export class TelegramService {
  constructor() {}

  help() {
    // Describes the commands available
  }

  start() {
    // welcome message + says you may ask for /help
  }

  async gpt_response(data: any) {
    // answers user with GPT-3 response
  }

  myself() {
    // Describes myself
  }

  github() {
    // Describes my github
  } 

  repository(repository: string) {
    // Describes specific repository
  }

  linkedin() {
    // Talks about my curriculum
  }

  studies() {
    // Talks about my academic life and my interests
  }

  experience() {
    // Talks about my past work experiences
  }

  skills() {
    // Talks briefily about my skills
  }

  contact() {
    // gives my contact information
  }

  services() {
    // Talks about the services I may be able to provide
  }

}