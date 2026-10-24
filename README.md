# Azure na Prática — landing page

Site estático em português para apresentar o curso de Azure da COTI Informática, pensado para hospedagem no Azure Blob Storage com o recurso de site estático.

## Conteúdo e referência

A página organiza a jornada em apresentação, ementa com 13 módulos, projeto final e chamada para consultar turmas. A ementa é uma síntese editorial dos tópicos da [página oficial do curso](https://www.cotiinformatica.com.br/curso/azure), consultada em 24/10/2026. O conteúdo completo e as condições de contratação devem ser conferidos na fonte.

Os módulos cobrem fundamentos de cloud, configuração de conta, Entra ID, máquinas virtuais, redes, Storage Account, SQL Database, App Service, Docker, Container Apps, AKS, monitoramento e projeto integrado.

Não há promessa de certificação, carga horária, preço ou data de início. Os botões de interesse levam à página oficial para consulta de informações atualizadas. O diagrama da página é ilustrativo e o trecho de código é uma composição visual.

## Arquivos

| Arquivo | Responsabilidade |
| --- | --- |
| `index.html` | Estrutura semântica da landing page, metadados, navegação, ementa e links externos. |
| `404.html` | Página de erro com a mesma identidade visual e caminhos de retorno ao site. |
| `styles.css` | Layout responsivo, tipografia, cores, diagrama, estados de foco e adaptações para movimento reduzido. |
| `app.js` | Menu mobile e controle para expandir ou recolher todos os módulos. |
| `README.md` | Documentação de uso, manutenção e hospedagem. |

## Executar localmente

Abra `index.html` diretamente em um navegador. O site não exige instalação, compilação, gerenciador de pacotes ou runtime. Para conferir o erro, abra `404.html`; seus links de retorno são destinados à raiz de uma hospedagem HTTP.

Se já houver Python disponível, uma prévia HTTP opcional pode ser iniciada nesta pasta com:

```powershell
python -m http.server 8080 --bind 127.0.0.1
```

Depois, acesse `http://127.0.0.1:8080/`. Encerre com `Ctrl+C`. O servidor simples do Python não associa automaticamente URLs inexistentes ao nosso documento de erro; visite `/404.html` para conferir seu visual.

## Interações e acessibilidade

- Menu mobile com estado `aria-expanded`, fechamento ao selecionar um link, clicar fora ou pressionar `Escape`.
- Módulos implementados com `details` e `summary`, acessíveis por teclado e utilizáveis mesmo sem JavaScript.
- Botão para expandir ou recolher todos os módulos, com texto atualizado conforme o estado do conjunto.
- Link para pular ao conteúdo, foco visível, títulos hierárquicos e nomes acessíveis para navegação e ilustrações.
- Navegação por âncoras com compensação do cabeçalho fixo e respeito à preferência por movimento reduzido.
- Links externos abertos em outra aba com `noopener noreferrer`.

O CSS adapta a composição para celulares, tablets e desktops. Não há formulário, rastreamento, cookies, banco de dados nem envio de informações pelo JavaScript.

## Dependências visuais

HTML, CSS e JavaScript puros, sem bibliotecas de aplicação. As fontes Manrope e DM Sans são carregadas pelo Google Fonts e exigem acesso à internet; fontes sans-serif do sistema são o fallback. O restante da identidade visual usa CSS e SVG embutido, sem arquivos de imagens adicionais. O logotipo é uma representação tipográfica, não um arquivo oficial da marca.

## Hospedagem no Azure Blob Storage

Na conta de armazenamento destinada ao projeto:

1. Habilite o recurso **Site estático**.
2. Defina `index.html` como documento de índice e `404.html` como documento de erro.
3. Envie `index.html`, `404.html`, `styles.css` e `app.js` para a raiz do contêiner `$web`, preservando nomes e capitalização. O README não precisa ser publicado.
4. Utilize os tipos de conteúdo `text/html` para HTML, `text/css` para CSS e `text/javascript` para JS, preferencialmente com UTF-8.
5. Abra o endpoint de site estático informado pelo Azure e verifique navegação, estilos e um endereço inexistente para validar o documento de erro.

O armazenamento não executa `app.js` no servidor; as interações acontecem no navegador. Nenhum recurso do Azure foi criado ou configurado por este projeto.

## Manutenção e conferência

Edite os textos e módulos diretamente no HTML, mantendo a numeração e a referência à fonte. Ajuste cores e fontes pelas variáveis no início de `styles.css`. O script verifica a existência dos elementos antes de adicionar comportamentos, por isso também pode ser carregado em `404.html`.

Antes de publicar, confira em uma janela estreita e em desktop: menu, navegação por teclado, abertura individual de módulos, expansão e recolhimento do conjunto, links oficiais e página de erro. Ao atualizar a ementa, confira a fonte e registre a nova data de consulta neste documento.
