import { Injectable } from '@nestjs/common';
// import fetch from 'node-fetch';
import axios from 'axios';

// For now I don't want to use a blob management tool. So I'll just leave the about text here.
const about = "Olá! Sou o Rubens Kaiserman, um entusiasta da tecnologia e um desenvolvedor FullStack com ampla experiência na stack (TypeScript) NestJS, NextJS + React, AWS Dynamo + MySQL. Minha paixão recente tem sido a construção de sistemas SaaS, onde utilizo essa stack para desenvolver softwares web no modelo de microsserviços modularizados, garantindo uma comunicação eficiente entre os componentes.\n\nAlém disso, sou especializado em Python e o utilizo para implementar Robotic Process Automation (RPA), reduzindo a necessidade de retrabalho ou processos excessivos e aumentando significativamente a eficiência dos projetos.\n\nIniciei minha trajetória acadêmica com formação técnica em Informática pelo IFRJ, onde tive a honra de conquistar duas menções honrosas na Olimpíada Brasileira de Matemática, destacando minha habilidade analítica desde cedo.\n\nComo desenvolvedor FullStack, possuo expertise no desenvolvimento com React, criando interfaces ricas e interativas para aprimorar a experiência dos usuários. A integração harmoniosa entre diferentes tecnologias, como MySQL e NestJS, permite que eu construa sistemas robustos e escaláveis.\n\nEstou verdadeiramente empolgado para contribuir com projetos inovadores e agregar valor ao seu time. Se busca um desenvolvedor comprometido, versátil e atualizado, estou aqui para colaborar. Vamos conversar mais sobre como posso fazer parte do seu time de sucesso! Agradeço pela oportunidade!"

@Injectable()
export class TelegramService {
  constructor() {}

  help() {
    // Describes the commands available
  }

  private async sendMessage(chatId:string, message:string) {
    try {
      // return await fetch(
      //   'https://api.telegram.org/bot' + process.env.TG_TOKEN + '/sendMessage',
      //   {
      //     method: 'post',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify({
      //       chat_id: chatId,
      //       text: message,
      //     }),
      //   },
      // );
      return axios.post('https://api.telegram.org/bot' + process.env.TG_TOKEN + '/sendMessage', {
        chat_id: chatId,
        text: message,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        }
      })
    } catch {
      console.log('Error sending message to Telegram');
      await this.sendMessage(chatId, message); // Shouldn't do it but doing temporarily
    }
  }

  async start(data: any) {
    // welcome message + says you may ask for /help
    if(data.message.chat) {
      return this.sendMessage(data.message.chat.id, 'Welcome to my chatbot! You may ask for /help or /about to read my bio.');
    } else {
      console.log('Error: no understand this')
    }
  }

  async gpt_response(data: any) {
    // answers user with GPT-3 response
  }

  about(chat_id:string) {
    this.sendMessage(chat_id, about);
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