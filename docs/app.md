# Descrição 
Um app no estilo stream (netflix, amazom prime), que vai ter uma porção de podcasts e vai ser dividida por categoria.

# Dominio 
Podcasts feitos em videos 

# Features
- Listar os eps em sessões de categorias 
    - [saúde, fitness, nerd, programação]
- Filtrar eps por nome de podcasts  (ex: flow podcast)

## Como
#### Features:

### Como vou implementar:
Vou retornar em uma api rest (json) o 
(nome do podcast, nome do episódio, imagem, link)
```js
{
    podCastNama: "flow",
    episode: "JULIO BALESTRIN + RENATO CARIANI - Flow 548",
    videoId: "pMvrU_E_fNA"
    cover: "https://i.ytimg.com/vi/pMvrU_E_fNA/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=pMvrU_E_fNA&list=PLWieWKZeFoVStUUFOYJHOwjpg8_JDYtvc&index=2",
    categories: ["saúde","conhecimento"]
}

```