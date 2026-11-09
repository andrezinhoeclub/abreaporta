/* =====================================================================
   DADOS DE RESERVA DO SITE ABRE A PORTA · v3.0
   O site lê tudo do painel (Supabase). Este arquivo só é usado se o
   painel ainda não estiver ligado ou estiver fora do ar.
   ===================================================================== */
var SITE = {
  whatsapp: '5541998440412',
  email: 'contato@abreaporta.com.br',
  instagram: 'abreaporta',

  artistas: [
    {
      slug: 'baile-do-ted',
      nome: 'Baile do Ted',
      categoria: 'Shows',
      estilo: 'Funk eletrônico',
      frase: 'Personagem, DJ, bazuca de CO2 e brinde pro público.',
      cor: '#E8192C',          // cor principal do artista
      cor2: '#FFC53D',         // cor de apoio
      fundo: '#140C0D',        // fundo da página dele
      capa: 'site/artistas/baile-do-ted/palco.jpg',
      retrato: 'site/artistas/baile-do-ted/ted-recorte.webp',
      logo: 'site/artistas/baile-do-ted/logo-oficial.webp',
      publicado: true,
      ordem: 1,
      numeros: [
        { valor: '2018', rotulo: 'na estrada desde' },
        { valor: '+7', rotulo: 'estados' }
      ],
      destaques: ['Ted, o urso, no palco', 'DJ ao vivo', 'Bazuca de CO2', 'Copos exclusivos de brinde'],
      release: [
        'O Baile do Ted nasceu em 2018, no Rio Grande do Sul, criado pelo DJ Neto, e já passou por mais de 7 estados na cena do funk eletrônico, em eventos universitários, festivais e casas noturnas.',
        'O repertório é feito de versões autorais de Tech Funk e Mega Funk. No palco, o DJ comanda o som e o Ted, figura central do projeto, puxa o público para a festa.',
        'Efeitos especiais, bazuca de CO2 e copos exclusivos de brinde: um show feito para ser filmado, postado e comentado no dia seguinte.'
      ],
      eventos: ['Casas noturnas', 'Festivais', 'Eventos universitários'],
      videos: [],
      fotos: [
        'site/artistas/baile-do-ted/palco.jpg',
        'site/artistas/baile-do-ted/dj-neto.jpg',
        'site/artistas/baile-do-ted/ted-card.jpg',
        'site/artistas/baile-do-ted/contrate.jpg'
      ],
      presskit: [
        { nome: 'Press kit completo', tipo: 'PDF', arquivo: 'site/artistas/baile-do-ted/presskit-baile-do-ted.pdf' }
      ],
      redes: { site: 'https://bailedoted.com.br', instagram: 'bailedoted', tiktok: 'bailedoted0', youtube: 'https://www.youtube.com/channel/UCTWVhvbqsDj7csEh-owrOVA' }
    },
    {
      slug: 'vovos-do-hype',
      nome: 'Vovôs do Hype',
      categoria: 'Performers',
      estilo: 'Dança, humor e interação',
      frase: 'Sua festa merece uma entrada que ninguém esquece.',
      cor: '#D7262F',
      cor2: '#C9CDD4',
      fundo: '#080808',
      capa: 'https://vovosdohype.com.br/images/vovos-principal.webp',
      retrato: 'https://vovosdohype.com.br/images/vovos-principal.webp',
      logo: 'https://vovosdohype.com.br/images/logo-vovos-white.webp',
      publicado: true,
      ordem: 2,
      numeros: [],
      destaques: ['Entrada surpresa', 'Interação na pista', 'O momento que vira assunto'],
      release: [
        'Não é só dança. É o auge da festa.',
        'Dança, atitude, humor e interação para transformar festas, casamentos, formaturas e eventos em momentos inesquecíveis. O hype não tem idade.'
      ],
      eventos: ['15 anos', 'Casamentos', 'Formaturas', 'Corporativos', 'Aniversários e festas', 'Campanhas e marcas'],
      videos: [],
      fotos: [
        'https://vovosdohype.com.br/images/carrossel-vovos/01.webp',
        'https://vovosdohype.com.br/images/carrossel-vovos/02.webp',
        'https://vovosdohype.com.br/images/carrossel-vovos/03.webp',
        'https://vovosdohype.com.br/images/carrossel-vovos/04.webp',
        'https://vovosdohype.com.br/images/carrossel-vovos/05.webp',
        'https://vovosdohype.com.br/images/carrossel-vovos/06.webp',
        'https://vovosdohype.com.br/images/carrossel-vovos/07.webp'
      ],
      presskit: [],
      redes: { site: 'https://vovosdohype.com.br', instagram: 'vovosdohype', tiktok: 'vovosdohype', youtube: '' }
    }
  ],

  shows: [],

  mostrarEquipamentos: true,
  equipamentos: [
    { nome: 'Som', texto: 'Sonorização para shows e eventos' },
    { nome: 'Luz', texto: 'Iluminação de palco e pista' },
    { nome: 'Palco e estrutura', texto: 'Estrutura para o show acontecer' },
    { nome: 'Pacote completo', texto: 'Show + equipamento num orçamento só' }
  ],
  clientes: []
};
