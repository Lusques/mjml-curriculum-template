# Email Template Customizer

Este é um projeto de portfólio que tem como objetivo a criação de templates de email customizáveis usando **MJML**. O projeto permite gerar e visualizar o resultado dos templates em tempo real e enviar e-mails personalizados para uma lista de destinatários.

### Tecnologias Utilizadas

- **MJML**: Uma linguagem de marcação para criar templates de email responsivos de forma rápida e simples.
- **Node.js**: A plataforma para execução do código JavaScript no servidor.
- **Nodemailer**: Usado para enviar e-mails utilizando as credenciais de acesso passadas pelo arquivo `.env`.
- **Nodemon**: Utilizado para monitorar mudanças nos arquivos de template MJML e transpilar o código automaticamente para HTML em tempo real durante o desenvolvimento.
- **dotenv**: Usado para carregar variáveis de ambiente, como as credenciais do email, de maneira segura e prática.

### Funcionalidades

- **Geração de templates de email**: Crie templates de email customizáveis com **MJML**.
- **Transpilação em tempo real**: Com o uso do **nodemon**, o código MJML é automaticamente transpile para HTML e você pode ver as mudanças em tempo real.
- **Envio de e-mails para múltiplos destinatários**: O projeto permite enviar e-mails para uma lista personalizada de destinatários, configurada em um arquivo `emails.json`. A lista de e-mails é carregada e usada para o envio em massa.
- **Envio de e-mails**: Utilize o **Nodemailer** para enviar e-mails com templates gerados dinamicamente. A configuração do serviço de e-mail é feita por meio do arquivo `.env`.

### Como Usar

#### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 14 ou superior).
- Um editor de código como [VSCode](https://code.visualstudio.com/).
- Conta de e-mail para envio (pode ser Gmail, SendGrid, ou outro serviço similar).

  ### Instalação

1. Instale as dependências do NPM:
   ```bash
   npm install
   ```
2. Alterar o template de e-mail:</br>
O template que está em uso no projeto é um currículo pessoal. Altere o arquivo src/templates/template.mjml para o seu próprio template de e-mail, de acordo com a necessidade.
3.Crie um arquivo .env na raiz do projeto e adicione as informações do seu serviço de e-mail (exemplo para Gmail):
```bash
EMAIL_USER=seuemail@gmail.com
EMAIL_PASS=sua-chave-de-acesso
```
Nota: Substitua seuemail@gmail.com e sua-chave-de-acesso pelos dados reais da sua conta de e-mail. Você pode gerar uma chave de acesso se estiver usando o Gmail acessando esta página e habilitando o acesso para apps menos seguros.
4. Preencher os dados de e-mails: A lista de destinatários para o envio de e-mails deve ser configurada no arquivo src/emails.json. Este arquivo deve conter um array de objetos, onde cada objeto representa um destinatário com seu nome e endereço de e-mail. Use o arquivo de exemplo src/emails.example.json como base.

Exemplo de emails.json:
```bash
[
  {
    "nome": "João Silva",
    "email": "joao.silva@example.com"
  },
  {
    "nome": "Maria Oliveira",
    "email": "maria.oliveira@example.com"
  }
]

```
### Executando o Projeto
```bash
npm run send
```
O Nodemailer usará o template gerado em HTML e enviará o e-mail para todos os destinatários definidos no arquivo emails.json.

### Scripts
- npm run build: Gera o HTML a partir do template MJML (executado automaticamente ao salvar o arquivo).
- npm run watch: Inicia o nodemon e observa mudanças no arquivo src/templates/template.mjml. O arquivo será automaticamente compilado para HTML e salvo em src/output.
- npm run send: Envia um e-mail utilizando as credenciais definidas no arquivo .env e o template MJML. O e-mail será enviado para os destinatários listados no arquivo src/emails.json. Certifique-se de que o arquivo sendEmails.js esteja configurado corretamente para enviar o e-mail desejado.
- 
### Estrutura do Projeto

- **src/templates**: Contém os arquivos MJML com os templates de e-mail.
- **src/output**: Diretório onde o HTML gerado é salvo.
- **src/emails.json**: Contém a lista de destinatários para o envio do e-mail.
- **src/sendEmails.js**: O script responsável por enviar os e-mails utilizando o template e a lista de destinatários.
- **.env**: Contém as credenciais de e-mail necessárias para o envio.

---

### Considerações Finais

Esse projeto permite criar templates de e-mails personalizáveis de forma simples e prática. Ele utiliza o MJML para facilitar a criação de templates responsivos, e o Nodemailer para enviar e-mails automaticamente para os destinatários definidos no arquivo `emails.json`.

Ao seguir o passo a passo de instalação e execução, você poderá enviar facilmente templates personalizados para listas de e-mails, seja para marketing, comunicação com clientes ou outras necessidades.

Se tiver dúvidas ou sugestões de melhorias, fique à vontade para abrir uma *issue* neste repositório ou contribuir com código!

---

### Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENSE](LICENSE) para mais detalhes.
