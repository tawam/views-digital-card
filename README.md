Views Digital Business Card

Cartão virtual institucional premium da Views, desenvolvido como uma experiência web leve, responsiva e visualmente sofisticada para apresentação corporativa, dados cadastrais, dados bancários, presença digital e reconhecimento de premiação.

Objetivo

Este projeto foi criado para funcionar como um cartão virtual oficial da marca Views, com foco em:

- apresentar informações corporativas de forma elegante e confiável
- exibir dados bancários e cadastrais com clareza
- alternar entre duas empresas do mesmo ecossistema
- oferecer acesso rápido aos canais oficiais da marca
- reforçar percepção de valor, direção de arte e legitimidade institucional

Empresas contempladas

A interface permite alternância entre:

1. Views Studios Co. LTDA
2. Views Locações e Produções LTDA

A versão final abre com Views Studios Co. LTDA como empresa principal.

Conceito de design

A direção visual do site foi construída para transmitir uma sensação de marca premium, tecnológica e artística.

Princípios adotados

- hero cinematográfico com atmosfera tecnológica
- layout limpo e editorial
- contraste entre profundidade escura e acentos luminosos
- tipografia contemporânea com presença institucional
- componentes com aparência refinada, sem excesso de ruído visual
- microinterações discretas para reforçar percepção de qualidade

Identidade visual

- Tipografia principal: PP Mori
- Paleta dominante: preto, azul profundo, offwhite, lilás e amarelo da marca
- Tom visual: premium, tecnológico, artístico, institucional

Estrutura do site

O site é dividido em blocos principais:

1. Header
Barra fixa superior com a assinatura visual da marca Views.

2. Hero principal
Bloco de abertura com:
- logo complementar da marca
- título principal dinâmico da empresa ativa
- frase institucional
- botões de alternância entre as duas empresas
- fundo com partículas e glow interativo

3. Cards de informações
Dois cards principais:
- Dados da empresa
- Dados bancários
Esses cards mudam dinamicamente conforme a empresa selecionada.

4. Presença digital
Seção de canais oficiais com links para:
- Site
- LinkedIn
- Instagram
- WhatsApp
A seção foi desenhada como uma faixa editorial discreta, com cápsulas horizontais refinadas e ícones personalizados.

5. Selo de premiação
Bloco institucional com o selo do Prêmio Brasileiro de Design, posicionado entre a presença digital e o fechamento visual do footer.

6. Footer
Fechamento da página com:
- logo principal da Views
- barra cromática da marca
- mantra institucional

Recursos e funcionalidades

Alternância dinâmica entre empresas

O site possui um seletor que troca em tempo real:
- nome da empresa
- CNPJ
- inscrição municipal
- dados bancários
- titular da conta
- links de presença digital

Microinterações

Foram aplicadas transições sutis para:
- troca de empresa
- estado ativo dos botões principais
- resposta visual dos cards
- comportamento dos links de presença digital

Responsividade

O layout foi refinado para funcionar em:
- desktop grande
- notebooks e telas médias
- tablets
- mobile

A responsividade foi trabalhada com foco em estabilidade estrutural, evitando sobreposição de elementos e excesso de remendos por breakpoint.

Estrutura de arquivos

views-site-final/
└── public/
    ├── index.html
    ├── styles.css
    ├── script.js
    ├── assets/
    │   ├── logo_views_primaria.png
    │   ├── logo_views_cores.png
    │   ├── logo_views_V_solo.png
    │   ├── logo_views_V_solo_alt.png
    │   ├── moody-stage-light-hero_banner_views.png
    │   ├── views_premio_design.svg
    │   ├── favicon_views.svg
    │   └── favicon_views_offwhite.svg
    └── fonts/
        ├── PPMori-Regular.otf
        ├── PPMori-SemiBold.otf
        ├── PPMori-RegularItalic.otf
        ├── PPMori-Extralight.otf
        ├── PPMori-ExtralightItalic.otf
        └── PPMori-SemiBoldItalic.otf

Tecnologias usadas

Este projeto foi construído com stack estática simples:
- HTML5
- CSS3
- JavaScript Vanilla
- SVG inline / SVG externos
Sem dependências de framework.

Como rodar localmente

Como se trata de um projeto estático, basta servir a pasta public com qualquer servidor HTTP.

Exemplo com Python

cd views-site-final/public
python3 -m http.server 4091

Depois, acesse:
http://localhost:4091/

Personalização

Alterar empresa padrão de abertura
No arquivo script.js, ajuste a empresa carregada inicialmente:
renderCompany('studios');

Alterar dados das empresas
No arquivo script.js, existe um objeto companies com todos os dados dinâmicos:
- nome
- CNPJ
- inscrição municipal
- endereço
- CEP
- cidade
- banco
- agência
- conta
- PIX
- titular
- links sociais

Alterar links sociais
Os links ficam no mesmo objeto companies, dentro da chave social.

Alterar favicon
No index.html, o favicon principal está definido assim:
<link rel="icon" href="./assets/favicon_views_offwhite.svg" type="image/svg+xml" />

Alterar metadados do preview
No index.html, os principais metadados são:
- <title>
- meta description
- Open Graph tags
- Twitter tags

A versão atual usa:
- Title: Views Studios - Business
- Description: Cartão virtual oficial Views.

Boas práticas adotadas

- estrutura estática simples e fácil de manter
- organização clara entre conteúdo, estilo e comportamento
- reutilização visual entre componentes
- identidade visual coerente em todos os blocos
- foco em legibilidade e sofisticação
- separação entre dados e interface no JavaScript

Possíveis evoluções futuras

- adicionar og:image para previews mais ricos em WhatsApp e Telegram
- criar versão multilíngue
- integrar analytics
- transformar os dados das empresas em JSON externo
- exportar versão PWA simples
- adicionar botão de copiar PIX
- adicionar botão de copiar dados bancários
- adicionar versão com QR code

Observações finais

Este site foi pensado para ser mais do que uma página informativa. Ele funciona como uma peça de presença institucional, combinando:
- clareza funcional
- acabamento visual premium
- percepção de autoridade
- direção de arte coerente com a marca Views

Se o projeto continuar evoluindo, a recomendação é preservar esta lógica:
hero aspiracional + informação objetiva + presença digital discreta + fechamento institucional forte

Desenvolvido para a marca Views como cartão virtual institucional premium.
