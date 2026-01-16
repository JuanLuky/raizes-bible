# 🌳 Raízes - Plano de Leitura Bíblica 2026

![Raízes Logo](https://img.shields.io/badge/Raízes-Leitura%20Bíblica-green?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-blue?style=flat-square)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38B2AC?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)

Aplicação web mobile-first para acompanhamento de leitura bíblica anual, desenvolvida para células e grupos de estudo bíblico.

## 📖 Sobre o Projeto

**Raízes** é uma aplicação interativa que ajuda você a completar a leitura de toda a Bíblia em um ano, seguindo um plano cronológico organizado por livros. Com uma interface moderna e intuitiva, você pode marcar os dias de leitura e acompanhar seu progresso em tempo real.

## ✨ Funcionalidades

- ✅ **Plano de Leitura Completo**: 365 dias cobrindo toda a Bíblia
- 📱 **100% Mobile First**: Interface otimizada para smartphones
- 💾 **Armazenamento Local**: Seus progressos são salvos automaticamente
- 📊 **Acompanhamento de Progresso**: Visualize seu avanço mensal e anual
- 🎨 **Design Moderno**: Animações suaves e interface elegante
- 📅 **Navegação Mensal**: Alterne facilmente entre os meses do ano
- 📖 **Versículos Inspiradores**: Mensagens bíblicas para motivação diária
- 👤 **Perfil Personalizado**: Login simples com seu nome



## 🚀 Tecnologias Utilizadas

- **React 18**: Biblioteca JavaScript para construção de interfaces
- **TailwindCSS**: Framework CSS para estilização
- **Lucide React**: Ícones modernos e elegantes
- **LocalStorage**: Persistência de dados no navegador

## 🛠️ Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/raizes-leitura-biblica.git
cd raizes-leitura-biblica
```

2. Instale as dependências
```bash
npm install
# ou
yarn install
```

3. Execute o projeto
```bash
npm start
# ou
yarn start
```

4. Acesse no navegador
```
http://localhost:3000
```

## 📱 Como Usar

1. **Login**: Digite seu nome na tela inicial para começar
2. **Navegação**: Use os botões dos meses para alternar entre Janeiro e Dezembro
3. **Marcar Leitura**: Toque no dia para marcar como lido (aparecerá um ✓)
4. **Acompanhar Progresso**: Veja sua porcentagem de conclusão no topo da página
5. **Desmarcar**: Toque novamente no dia para desmarcar

## 🎨 Paleta de Cores

O design foi inspirado no conceito de "raízes", trazendo cores terrosas e naturais:

- **Verde**: `#15803d` - Representa crescimento e vida espiritual
- **Âmbar**: `#fef3c7` - Representa luz e sabedoria
- **Tons Terrosos**: Gradientes suaves entre verde e âmbar

## 📊 Estrutura de Dados

Os dados são armazenados no LocalStorage do navegador:

```javascript
// Usuário
raizes_user: "Nome do Usuário"

// Progresso de leitura
raizes_read_days: {
  "0-1": true,  // Mês-Dia: Status
  "0-2": false,
  // ...
}
```

## 🤝 Como Contribuir

Contribuições são sempre bem-vindas! Para contribuir:

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request


## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.


## 📞 Contato

- Email: juandev33@gmail.com
- Instagram: @ujuan

---


⭐ Se este projeto te ajudou, deixe uma estrela no GitHub!

**Desenvolvido com ❤️ e ☕ para a glória de Deus**
