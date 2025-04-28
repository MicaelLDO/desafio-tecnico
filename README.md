# Desafio técnico - Projetos de Atividades

Este repositório contém três atividades desenvolvidas como parte do projeto **Desafio técnico**. Cada atividade aborda um tema específico e utiliza HTML, CSS e JavaScript para implementar funcionalidades interativas.

---

## 📚 Índice
- [Atividade 1 - Calculadora Simples](#atividade-1---calculadora-simples)
- [Atividade 2 - Verificador de Palíndromo](#atividade-2---verificador-de-palíndromo)
- [Atividade 3 - Sistema de Login e Gerenciamento de Usuários](#atividade-3---sistema-de-login-e-gerenciamento-de-usuários)
- [Decisões de Desenvolvimento](#decisões-de-desenvolvimento)
- [Inspirações](#inspirações)
- [Base para Comentários e Organização](#base-para-comentários-e-organização)
- [Melhorias futuras](#-melhorias-futuras)
- [Como executar o projeto](#%EF%B8%8F-como-executar-o-projeto)
---

## Atividade 1 - Calculadora Simples

### 📋 Descrição
A **Calculadora Simples** realiza operações matemáticas básicas (soma, subtração, multiplicação e divisão) entre dois números fornecidos pelo usuário.

### 🚀 Funcionalidades
- Entrada de dois números.
- Exibição dos resultados das operações matemáticas.


### 📂 Estrutura de Arquivos

```bash
ativ-2/
├── index.html   # Página principal do verificador de palíndromo
├── style.css    # Estilos do verificador
├── script.js    # Lógica de verificação de palíndromos
```

---

## Atividade 2 - Verificador de Palíndromo

### 📋 Descrição
O **Verificador de Palíndromo** permite ao usuário verificar se uma palavra ou frase é um palíndromo (ou seja, se pode ser lida da mesma forma de trás para frente).

### 🚀 Funcionalidades
- Entrada de texto pelo usuário.
- Normalização do texto (remoção de espaços, acentos e pontuações).
- Exibição do resultado indicando se o texto é ou não um palíndromo.


### 📂 Estrutura de Arquivos

```bash
ativ-2/
├── index.html   # Página principal do verificador
├── style.css    # Estilos do verificador
├── script.js    # Lógica de verificação de palíndromos
```

---

## Atividade 3 - Sistema de Login e Gerenciamento de Usuários

### 📋 Descrição
O **Sistema de Login e Gerenciamento de Usuários** é uma aplicação mais complexa que permite:
- Login de usuários.
- Cadastro de novos usuários.
- Alteração de senha.
- Listagem de todos os usuários cadastrados.

### 🚀 Funcionalidades
- **Login:** Autenticação de usuários com validação de campos.
- **Cadastro:** Registro de novos usuários com validação de email e senha.
- **Alteração de Senha:** Permite que usuários logados alterem suas senhas.
- **Listagem de Usuários:** Exibe uma lista de todos os usuários cadastrados.


### 📂 Estrutura de Arquivos

```bash
ativ-3/
├── index.html                # Página de login
├── style/
│   └── style.css              # Estilos gerais do sistema
├── script/
│   ├── login/                 # Scripts relacionados ao login
│   ├── register/              # Scripts relacionados ao cadastro
│   ├── change-password/       # Scripts relacionados à alteração de senha
│   ├── home/                  # Scripts relacionados à página inicial
│   └── utility/               # Scripts utilitários (ex.: navegação, validação)
├── pages/
│   ├── register/
│   │   └── register.html      # Página de cadastro
│   ├── home/
│   │   └── home.html          # Página inicial
│   └── change-password/
│       └── change-password.html # Página de alteração de senha
```

---

## Decisões de Desenvolvimento

### 🛠️ Escolha de Linguagens e Frameworks
- **HTML5, CSS3 e JavaScript** foram escolhidos por serem tecnologias amplamente utilizadas e por eu ter maior confiança e experiência nelas.
- A simplicidade dessas tecnologias permitiu focar na lógica e na funcionalidade, sem a necessidade de frameworks mais complexos.
- Escolhi utilizar o http-server para padronizar e rodar o server de maneira simples e fácil de ser visualizada.
- Optei por usar o fetch() por estar mais habituado a ele. Embora esteja estudando React, acredito que entregaria um código de menor qualidade se tentasse utilizá-lo neste momento.
- Durante o desenvolvimento, utilizei ferramentas de inteligência artificial, como o GitHub Copilot e o ChatGPT, para:
    - Identificar possíveis erros no código.
    - Obter sugestões de melhorias.
    - Garantir boas práticas de desenvolvimento.
Essas ferramentas foram usadas como suporte, mas todas as decisões finais e implementações foram feitas com base no meu entendimento e objetivos do projeto.

### 🧠 Organização do Código
- O código foi estruturado em pastas para separar as responsabilidades de cada funcionalidade (ex.: login, cadastro, alteração de senha).
- Comentários foram adicionados em trechos importantes para facilitar a leitura e manutenção do código.

### 🎯 Decisões do Código
- Optei por separar cada página e seus respectivos arquivos JavaScript na Atividade 3, para melhorar a organização e facilitar o entendimento do projeto., mantive apenas o index.html fora de pastas para ficar mais acessível a alguns programas e buscam ele como base para mostrar a página.
- Tive cuidado para as validações de formulário da página inicial e da página de cadastro ficarem intuitivas com um feedback visual imediato, assim como os botões sendo habilitados somente com os campos preenchidos.

---

## Inspirações

### 🌟 Fontes de Estudo
1. **[MDN Web Docs](https://developer.mozilla.org/)**  
   - Base para entender boas práticas de desenvolvimento web.
   - Referência para validação de formulários e manipulação do DOM.

2. **[Clean Code](https://cleancoders.com/)**  
   - Inspirou a organização do código e a clareza nos comentários.

3. **[Exemplo de Design de página de Login](https://www.youtube.com/@pauloalvesdev4397/featured)**  
   - Base para a ideia de desgin web da página baseado na playlist CRUD - HTML, CSS, JS, NodeJs e Express - Paulo Alves Dev.

4. **[Pesquisa base para integração de API com fetch](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch)**  
   - Tomar como base as dependência de cada código e relembrar como funciona os comandos do fetch e da integração.

5. **[Sintaxe do README.md](https://docs.github.com/pt/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)**  
   - Base para comandos e ideias de boa prática do readme.

---

## Base para Comentários e Organização

### 📝 Comentários
- Os comentários seguem as diretrizes do **Clean Code** e da **Mozilla Developer Network (MDN)**.
- Cada função e bloco de código importante foi comentado para explicar o "porquê" e não apenas o "como".

### 📂 Organização
- A estrutura de pastas foi projetada para separar responsabilidades e facilitar a navegação no projeto.
- Arquivos de estilos, scripts e páginas HTML foram organizados em diretórios específicos.
- Foi criada a pasta utility para evitar a repetição de funções e deixar mais fácil de futuras modificações.
---

## 🚀 Melhorias Futuras

- Corrigir e finalizar a função de troca de senha.
- Incluir sistema de recuperar senha para casos de esquecimento.
- Implementar um sistema de rotas simples utilizando JavaScript puro para melhorar a navegação entre páginas.
- Melhorar a responsividade do site, garantindo uma boa experiência de uso em qualquer tamanho de tela.
- Aumentar proteção contra injeções de scripts, especialmente pensando em uma futura publicação online do projeto.

## 🛠️ Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone git@github.com:MicaelLDO/desafio-tecnico.git
   cd desafio-tecnico
   
2. Instale as dependências:
    Use npm install dentro das pastas das atividades para instalar suas dependências:
    ```bash
    npm install

3. Inicie o servidor local:
    - Para a Atividade 1:
      ```bash
        cd ativ-1
        npm start
        
    - Para a Atividade 2:
      ```bash
        cd ativ-2
        npm start
    
    - Para a Atividade 3:
      ```bash
        cd ativ-3
        npm start

4. Acesse no navegador:
    - Entre cada atividade, use Ctrl + Shift + R para limpar o cache do navegador.
    - Todas as atividades aparecerão na web em:
        http://localhost:8080

5. Informações adicionais:
    - Para parar a execução do servidor local, pressione Ctrl + C no terminal.
    - Após executar uma atividade, use o comando cd .. antes de navegar para a próxima com cd ativ."

## ✨ Autor
    - Desenvolvido por Micael Dorneles. 
    - Github: https://github.com/MicaelLDO
    - Linkedin: https://www.linkedin.com/in/micael-lopes-dorneles-de-oliveira-b59bb9222/
    - Entre em contato para dúvidas ou sugestões!

