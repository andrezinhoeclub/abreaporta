/* =====================================================================
   DADOS DO SITE ABRE A PORTA — é só aqui que você mexe para atualizar
   (enquanto o painel com Supabase não fica pronto)

   Regras rápidas:
   - Texto sempre entre aspas: 'assim'
   - Cada item termina com vírgula, menos o último da lista
   - Campo que você não tiver: deixe '' (vazio) que ele some do site
   ===================================================================== */
var SITE = {

  // WhatsApp da agência só com números: 55 + DDD + número. Ex.: '5541999998888'
  whatsapp: '',
  email: 'contato@abreaporta.com.br',
  instagram: 'abreaporta',

  // ---------------- ARTISTAS ----------------
  // id: nome curto para o endereço (só letras minúsculas e hífen) → abreaporta.com.br/artista.html?a=baile-do-ted
  // foto: caminho da foto principal, ex.: 'artistas/baile-do-ted/capa.jpg'  ('' = usa as iniciais)
  // publicado: true aparece no site, false fica escondido
  artistas: [
    {
      id: 'baile-do-ted',
      nome: 'Baile do Ted',
      estilo: 'Funk',
      cidade: 'Curitiba · PR',
      frase: '',
      cor: '#FF8A00',
      foto: '',
      publicado: true,
      release: [],                 // parágrafos: ['Primeiro parágrafo', 'Segundo parágrafo']
      fatos: [],                   // ex.: [{ titulo: 'Duração do show', valor: '1h30' }]
      videos: [],                  // links do YouTube: ['https://www.youtube.com/watch?v=XXXX']
      fotos: [],                   // ['artistas/baile-do-ted/foto1.jpg', ...]
      presskit: [],                // [{ nome: 'Rider técnico', tipo: 'PDF', arquivo: 'artistas/baile-do-ted/rider.pdf' }]
      site: 'https://bailedoted.com.br',
      instagram: ''                // só o @, sem o arroba: 'bailedoted'
    },
    {
      id: 'vovos-do-hype',
      nome: 'Vovôs do Hype',
      estilo: '',
      cidade: 'Curitiba · PR',
      frase: '',
      cor: '#7C4DDB',
      foto: '',
      publicado: true,
      release: [],
      fatos: [],
      videos: [],
      fotos: [],
      presskit: [],
      site: 'https://vovosdohype.com.br',
      instagram: ''
    }
    // Para incluir outro artista: copie um bloco { ... } inteiro, cole aqui embaixo,
    // coloque uma vírgula depois do } de cima e troque os dados.
  ],

  // ---------------- AGENDA ----------------
  // data no formato 'AAAA-MM-DD'. artista = o id do artista. link: ingressos ('' = sem botão)
  // fechado: true mostra "Data reservada" sem dizer o local
  shows: [
    // { data: '2026-11-14', artista: 'baile-do-ted', local: 'Nome da casa', cidade: 'Curitiba', link: '', fechado: false }
  ],

  // ---------------- EQUIPAMENTOS ----------------
  // mostrarEquipamentos: false esconde a parte de aluguel
  mostrarEquipamentos: true,
  equipamentos: [
    { nome: 'Som', texto: 'Sonorização para shows e eventos', foto: '', cor: '#7C4DDB' },
    { nome: 'Luz', texto: 'Iluminação de palco e pista', foto: '', cor: '#FF8A00' },
    { nome: 'Palco e estrutura', texto: 'Estrutura para o show acontecer', foto: '', cor: '#C2185B' },
    { nome: 'Pacote completo', texto: 'Show + equipamento num orçamento só', foto: '', cor: '#1E88E5' }
  ]
};
