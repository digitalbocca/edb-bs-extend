# Estúdio Digital Bocca

## edb-bs-extend

### v2.4.0

> Extensão CSS personalizada para usar com Bootstrap 4

## Atenção: Removida a imagem de exemplo para redução do tamanho do pacote

## SASS

Importe os arquivos que irá utilizar diretamente da pasta 'dist/sass'.

## CSS

Adicione o arquivo css diretamente da pasta 'dist/css'

## Teste JS

Para testar o funcionamento com Javascript:

```javascript
const edbExtend = require('edb-bs-extend')

edbExtend()
```

Deverá mostrar a mensagem no console:

```bash
Este é um modulo CSS, não importe o arquivo javascript.
edb-bs-extend - ©2019 - Estúdio Digital Bocca
```

## ATENÇÃO

Para usar o componente capa, mude a url da imagem para a imagem do seu projeto.

```sass
background-image: url(../images/example.jpg)
```

## CLASSES CSS

### TEXTO

#### TAMANHO

```css
.edb-1-rem
```

Escolha entre 1 e 10 rem de tamanho de texto.

#### CAIXA ALTA

```css
.edb-upper
```

Transforma o texto em caixa alta.

#### SOMBRA

```css
.edb-shadow
```

Aplica sombra ao texto.

### DIVS E TEXTO

#### CORES

```css
.edb-white
.edb-black
.edb-claro
.edb-escuro
```

Cores pré definidas utilizadas pelo Estúdio Digital Bocca.

#### CURSOR

```css
.edb-pointer
```

Transforma o cursor em pointer (LINK CLICÁVEL)

### DIVS

#### DIV COM IMAGEM DE FUNDO

```css
.edb-capa
```

Cria uma div com uma imagem de fundo e texto sobreposto à imagem.
**Troque a URL da Imagem de fundo para a imagem que irá usar.**

## LOG DE MUDANÇAS

- Ver no Arquivo [CHANGELOG](CHANGELOG.md)

## LICENÇA

- MIT

> ©2018-2019 Estúdio Digital Bocca - <https://estudiodigitalbocca.com.br>
