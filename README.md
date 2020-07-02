# Estúdio Digital Bocca

## edb-bs-extend

### v3.3.0

> Extensão CSS personalizada para usar com Bootstrap 4

## Atenção: Removida a imagem de exemplo para redução do tamanho do pacote

## Atenção: A documentação não trata sobre os temas para o body, na próxima versão virá com a documentação reescrita e trazendo alguns exemplos

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

Caso esteja importando o sass diretamente do node_modules você pode escrever no seu arquivo css/sass (Abaixo da importação deste modulo) a regra:

```sass
.edb-capa::before
  background-image: url(../url/da/sua/imagem.jpg)
```

## CLASSES CSS

### TEXTO

#### TAMANHO

```css
.edb-1-rem
```

Escolha entre 1 e 10 rem de tamanho de texto.

#### CAIXA ALTA (Removido na v3+)

```css
.edb-upper
```

Transforma o texto em caixa alta.

**Migração: Utilize a classe text-uppercase do bootstrap 4.**

#### SOMBRA

```css
.edb-shadow
```

Aplica sombra ao texto.

#### CORES

```css
.edb-white
.edb-black
.edb-claro
.edb-escuro
```

Cores pré definidas utilizadas pelo Estúdio Digital Bocca.

### DIVS E TEXTO

#### CURSOR

```css
.edb-pointer
```

Transforma o cursor em pointer (LINK CLICÁVEL)

### DIVS

#### CORES DE FUNDO

```css
.edb-bg-white
.edb-bg-black
.edb-bg-claro
.edb-bg-escuro
```

Cores pré definidas utilizadas pelo Estúdio Digital Bocca.

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

> ©2018-2020 Estúdio Digital Bocca - <https://estudiodigitalbocca.com.br>
