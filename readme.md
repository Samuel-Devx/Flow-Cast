# FlowCast
 
> Plataforma de streaming de podcasts em vídeo, organizada por categorias — uma experiência estilo Netflix para conteúdo em áudio e vídeo.
 
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![License](https://img.shields.io/badge/license-MIT-blue)
![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-green)
 
---
 
##  Sobre o Projeto
 
O **PodStream** é uma aplicação WebApi voltada para consumo de podcasts em formato de vídeo. Inspirada em plataformas como Netflix e Amazon Prime, ela organiza episódios por categorias temáticas e permite que o usuário filtre o conteúdo pelo nome do podcast de seu interesse.
 
O conteúdo é consumido via uma **API REST** própria, que retorna os metadados de cada episódio — nome do podcast, título do episódio, capa e link de acesso.
 
---
 
##  Funcionalidades
 
-  **Listagem dos PadCast** — episódios organizados nas sessões: `Saúde`, `Fitness`, `Nerd` e `Programação`
-  **Filtro por podcast** — busca e filtragem por nome do podcast (ex: Flow Podcast, Inteligência Ltda)

---
 
##  Estrutura de Dados
 
A API retorna os episódios no seguinte formato:
 
```json
{
  "podcastName": "flow",
  "episode": "JULIO BALESTRIN + RENATO CARIANI - Flow 548",
  "videoId": "pMvrU_E_fNA",
  "cover": "https://i.ytimg.com/vi/pMvrU_E_fNA/maxresdefault.jpg",
  "link": "https://www.youtube.com/watch?v=pMvrU_E_fNA",
  "categories": ["saúde", "fitness"]
}
```
 
| Campo | Tipo | Descrição |
|---|---|---|
| `podcastName` | `string` | Identificador do podcast |
| `episode` | `string` | Título completo do episódio |
| `videoId` | `string` | ID do vídeo no YouTube |
| `cover` | `string` | URL da thumbnail do episódio |
| `link` | `string` | Link direto para o vídeo |
| `categories` | `string[]` | Categorias do episódio |
 
---
 
##  Como Executar
 
### Pré-requisitos
 
- [Node.js](https://nodejs.org/) >= 18.0.0
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
### Instalação
 
```bash
# Clone o repositório
git clone https://github.com/seu-usuario/podstream.git
 
# Acesse o diretório
cd podstream
 
# Instale as dependências
npm install
```
 
### Executando o projeto
 
```bash
# Inicia o servidor de desenvolvimento
npm run start_dev (script)
```
 
Acesse em: `http://localhost:3000`
 

 

 

 
##  Estrutura de Pastas
 
```
Flow-Cast/
├── src/
│   ├── controller/
│   ├── model/
│   ├── repositories/
│   ├──routes/
│   ├──service/
│   ├──utils/
├── app.ts
├── server.ts
├── .env
├── tsconfig.json
├── package.json
└── README.md
```
 
 
##  Licença
 
Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
 

 
<p align="center">
  Feito por <a href="https://github.com/Samuel-Devx">Samuel-Dev</a>
</p>