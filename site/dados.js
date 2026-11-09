/* =====================================================================
   DADOS DO SITE ABRE A PORTA · v2.0
   É só aqui que você mexe para atualizar o site (até o painel ficar pronto).

   Regras rápidas:
   - Texto sempre entre aspas: 'assim'
   - Cada item termina com vírgula, menos o último da lista
   - Campo que você não tiver: deixe '' ou [] (vazio) que ele some do site
   ===================================================================== */
var SITE = {

  // WhatsApp da agência só com números: 55 + DDD + número. Ex.: '5541999998888'
  whatsapp: '',
  email: 'contato@abreaporta.com.br',
  instagram: 'abreaporta',

  // ---------------- ARTISTAS E PERFORMERS ----------------
  // categoria: 'Shows' (artistas, bandas, DJs) ou 'Performers' (entradas, personagens, dança)
  // id: nome curto para o endereço → abreaporta.com.br/artista.html?a=baile-do-ted
  // capa: foto grande deitada. retrato: foto em pé (aparece no casting)
  artistas: [
    {
      id: 'baile-do-ted',
      nome: 'Baile do Ted',
      categoria: 'Shows',
      estilo: 'Funk + eletrofunk',
      frase: 'Personagem, DJ, bazuca de CO2 e brinde pro público.',
      cor: '#FF5A1F',
      capa: 'site/artistas/baile-do-ted/palco.jpg',
      retrato: 'site/artistas/baile-do-ted/ted.webp',
      logo: 'site/artistas/baile-do-ted/logo.webp',
      publicado: true,
      numeros: [
        { valor: '2018', rotulo: 'na estrada desde' },
        { valor: '+7', rotulo: 'estados' }
      ],
      destaques: ['Personagem Ted no palco', 'DJ ao vivo', 'Bazuca de CO2', 'Brinde pro público'],
      release: [
        'O Baile do Ted nasceu em 2018, no Rio Grande do Sul, criado pelo DJ Neto. No palco, o urso Ted comanda a festa com funk e eletrofunk.',
        'Bazuca de CO2, brinde para o público e um personagem que todo mundo quer fotografar: um show feito para ser filmado, postado e comentado no dia seguinte.'
      ],
      eventos: [],                 // tipos de evento: ['Casas noturnas', 'Formaturas']
      videos: [],                  // links do YouTube: ['https://www.youtube.com/watch?v=XXXX']
      fotos: ['site/artistas/baile-do-ted/palco.jpg', 'site/artistas/baile-do-ted/dj-neto.jpg', 'site/artistas/baile-do-ted/ted.webp'],
      presskit: [],                // [{ nome: 'Rider técnico', tipo: 'PDF', arquivo: 'site/artistas/baile-do-ted/rider.pdf' }]
      redes: { site: 'https://bailedoted.com.br', instagram: 'bailedoted', tiktok: 'bailedoted0', youtube: 'https://www.youtube.com/channel/UCTWVhvbqsDj7csEh-owrOVA' }
    },
    {
      id: 'vovos-do-hype',
      nome: 'Vovôs do Hype',
      categoria: 'Performers',
      estilo: 'Dança, humor e interação',
      frase: 'Sua festa merece uma entrada que ninguém esquece.',
      cor: '#7C4DDB',
      capa: 'https://vovosdohype.com.br/images/vovos-principal.webp',
      retrato: 'https://vovosdohype.com.br/images/vovos-principal.webp',
      logo: 'https://vovosdohype.com.br/images/logo-vovos-white.webp',
      publicado: true,
      numeros: [],
      destaques: ['Entrada surpresa', 'Interação na pista', 'Conteúdo memorável'],
      release: [
        'Dança, atitude, humor e interação para transformar festas, casamentos, formaturas e eventos em momentos inesquecíveis.'
      ],
      eventos: ['15 anos', 'Casamentos', 'Formaturas', 'Corporativos', 'Aniversários e festas', 'Campanhas e marcas'],
      videos: [],
      fotos: [
        'https://vovosdohype.com.br/images/carrossel-vovos/01.webp',
        'https://vovosdohype.com.br/images/carrossel-vovos/02.webp',
        'https://vovosdohype.com.br/images/carrossel-vovos/03.webp',
        'https://vovosdohype.com.br/images/carrossel-vovos/04.webp',
        'https://vovosdohype.com.br/images/carrossel-vovos/05.webp',
        'https://vovosdohype.com.br/images/carrossel-vovos/06.webp'
      ],
      presskit: [],
      redes: { site: 'https://vovosdohype.com.br', instagram: 'vovosdohype', tiktok: 'vovosdohype', youtube: '' }
    }
    // Para incluir outro artista: copie um bloco { ... } inteiro, cole aqui embaixo,
    // coloque uma vírgula depois do } de cima e troque os dados.
  ],

  // ---------------- AGENDA ----------------
  // data: 'AAAA-MM-DD'. artista: o id. link: ingressos ('' = sem botão). fechado: true = "Data reservada"
  shows: [
    // { data: '2026-11-21', artista: 'baile-do-ted', local: 'Nome da casa', cidade: 'Curitiba · PR', link: '', fechado: false }
  ],

  // ---------------- EQUIPAMENTOS ----------------
  mostrarEquipamentos: true,
  equipamentos: [
    { nome: 'Som', texto: 'Sonorização para shows e eventos' },
    { nome: 'Luz', texto: 'Iluminação de palco e pista' },
    { nome: 'Palco e estrutura', texto: 'Estrutura para o show acontecer' },
    { nome: 'Pacote completo', texto: 'Show + equipamento num orçamento só' }
  ],

  // ---------------- CLIENTES (logos) ----------------
  // { nome: 'Nome da casa', logo: 'site/clientes/arquivo.png' }  — vazio esconde a faixa
  clientes: []
};
