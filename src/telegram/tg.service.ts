import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';

// For now I don't want to use a blob management tool. So I'll just leave the about text here.
const about =
  'Olá! Sou o Rubens Kaiserman, um entusiasta da tecnologia e um desenvolvedor FullStack com ampla experiência na stack (TypeScript) NestJS, NextJS + React, AWS Dynamo + MySQL. Minha paixão recente tem sido a construção de sistemas SaaS, onde utilizo essa stack para desenvolver softwares web no modelo de microsserviços modularizados, garantindo uma comunicação eficiente entre os componentes.\n\nAlém disso, sou especializado em Python e o utilizo para implementar Robotic Process Automation (RPA), reduzindo a necessidade de retrabalho ou processos excessivos e aumentando significativamente a eficiência dos projetos.\n\nIniciei minha trajetória acadêmica com formação técnica em Informática pelo IFRJ, onde tive a honra de conquistar duas menções honrosas na Olimpíada Brasileira de Matemática, destacando minha habilidade analítica desde cedo.\n\nComo desenvolvedor FullStack, possuo expertise no desenvolvimento com React, criando interfaces ricas e interativas para aprimorar a experiência dos usuários. A integração harmoniosa entre diferentes tecnologias, como MySQL e NestJS, permite que eu construa sistemas robustos e escaláveis.\n\nEstou verdadeiramente empolgado para contribuir com projetos inovadores e agregar valor ao seu time. Se busca um desenvolvedor comprometido, versátil e atualizado, estou aqui para colaborar. Vamos conversar mais sobre como posso fazer parte do seu time de sucesso! Agradeço pela oportunidade!';

const help = 'Olá, olá. Eu sou o bot do Rubens Kaiserman. Estou aqui pra te apresentar ao meu humano. Você pode pedir por /about, /github, /linkedin, /help ou /contact.';

@Injectable()
export class TelegramService {
  constructor() {}

  private async sendMessage(chatId: string, message: string) {
    return await fetch(
      'https://api.telegram.org/bot' + process.env.TG_TOKEN + '/sendMessage',
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      },
    );
  }

  async help(data: any) {
    // welcome message + says you may ask for /help
    return await this.sendMessage(
      data.message.chat.id,
      help,
    );
  }

  async gpt_response(chat_id: string, message: string) {
    // answers user with GPT-3 response
    return await this.sendMessage(
      chat_id,
      'Tá de vacilação. Num reparou que é pra usar os comandos?',
    );
  }

  async about(chat_id: string) {
    return await this.sendMessage(chat_id, about);
  }

  async github(chat_id: string) {
    return await this.sendMessage(chat_id, 'https://github.com/rubskaiserman/');
  }

  repository(repository: string) {
    // Describes specific repository
  }

  async linkedin(chat_id: string) {
    // Talks about my curriculum
    return await this.sendMessage(
      chat_id,
      'https://www.linkedin.com/in/rubens-kaiserman/',
    );
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

  async contact(chat_id: string) {
    // gives my contact information
    await this.sendMessage(chat_id, 'email: rubenskaiserman@gmail.com');
    await this.sendMessage(chat_id, 'phone: +55 22 99816-3260');
    await this.sendMessage(
      chat_id,
      'X(twitter): https://twitter.com/rubskaiserman',
    );
  }

  services() {
    // Talks about the services I may be able to provide
  }
}
