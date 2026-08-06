export type Option = { text: string; trait: string };
export type Princess = {
  name: string;
  movie: string;
  scene: string;
  question: string;
  options: Option[];
  color: string;
  bgGradient: string;
  sparkle: string;
  emoji: string;
  description: string;
};

export const princesses: Princess[] = [
  {
    name: "Bela", movie: "A Bela e a Fera",
    scene: "Enquanto vocês caminham pelo jardim do castelo, Bela diminui o passo ao encontrar um enorme canteiro de flores.\nEla observa cada uma delas por alguns segundos antes de sorrir.",
    question: "Sempre achei curioso como uma simples flor pode despertar tantas lembranças... Existe alguma que chama sua atenção sem você nem saber explicar o motivo?",
    options: [
      { text: "🌹Rosas ", trait: "intelectual" },
      { text: "🌸Lírios ", trait: "bondosa" },
      { text: "🌻Girassois ", trait: "autentica" },
      { text: "🌷Tulipas ", trait: "alegre" },
    ],
    color: "#F5C542", bgGradient: "from-[#1e1400] via-[#3d2a00] to-[#2a1c00]",
    sparkle: "#F5C542", emoji: "🌹", description: "Inteligente e corajosa",
  },
  {
    name: "Rapunzel", movie: "Enrolados",
    scene: "O chão está coberto de pincéis, tintas e pequenas invenções espalhadas por todos os lados.\nRapunzel ri enquanto tenta decidir qual projeto terminar primeiro.",
    question: "Sempre acabo começando alguma coisa nova quando tenho um tempinho livre... E você? O que faz o tempo passar tão rápido que parece magia?",
    options: [
      { text: "📚 Ler", trait: "intellectual" },
      { text: "🎮 Jogar", trait: "alegre" },
      { text: "🎨 Fazer algo criativo", trait: "criativa" },
      { text: "🎵 Ouvir música", trait: "contemplativa" },
      { text: "🚶 Passear", trait: "aventureira" },
      { text: "☕ Descansar", trait: "descansar" },
      { text: "💬 Outro...", trait: "outros" },
    ],
    color: "#F472B6", bgGradient: "from-[#2e0818] via-[#5e1040] to-[#3a0a28]",
    sparkle: "#F472B6", emoji: "☀️", description: "Criativa e cheia de sonhos",
  },
  {
    name: "Tiana", movie: "A Princesa e o Sapo",
    scene: "Da cozinha vem um aroma delicioso.\nTiana coloca um prato sobre a mesa e ajeita os talheres com um sorriso de quem gosta de cuidar das pessoas.",
    question: "Acredito que algumas receitas conseguem abraçar a gente por dentro... Existe alguma comida que faz você sentir exatamente isso?",
    options: [
      { text: "🌟 Realizar um sonho construído com esforço", trait: "determinada" },
      { text: "👨‍👩‍👧 Honrar quem eu amo e o que recebi deles", trait: "dedicada" },
      { text: "🤝 Mostrar que qualquer pessoa pode chegar lá", trait: "inspiradora" },
      { text: "💛 A satisfação de fazer algo com excelência", trait: "perfeccionista" },
    ],
    color: "#4ADE80", bgGradient: "from-[#041a0a] via-[#0a3d1a] to-[#062810]",
    sparkle: "#4ADE80", emoji: "✨", description: "Trabalhadora e determinada",
  },
  {
    name: "Branca de neve", movie: "Branca de neve",
    scene: "Depois de servir o chá, Branca de Neve coloca um cobertor sobre o encosto da cadeira e sorri.\nEla inclina a cabeça, curiosa.",
    question: "O que faz você se sentir verdadeiramente cuidada?",
    options: [
      { text: "🌊 Perto do mar, sentindo a brisa", trait: "livre" },
      { text: "🏔️ No alto de uma montanha, com a vista toda", trait: "aventureira" },
      { text: "🏠 Em casa, rodeada de quem amo", trait: "familiar" },
      { text: "🌅 Em qualquer lugar com beleza natural", trait: "conectada" },
    ],
    color: "#FB923C", bgGradient: "from-[#1e0a00] via-[#4a1a00] to-[#2e1000]",
    sparkle: "#FB923C", emoji: "🍎", description: "Corajosa e conectada",
  },
  {
    name: "Ariel", movie: "A Pequena Sereia",
    scene: "Ariel espalha alguns de seus tesouros sobre uma pedra:\n um garfo, uma luneta quebrada, um porta-retrato e uma caixinha de música.\nEla observa cada um deles com um brilho curioso no olhar.",
    question: "Existe alguma coisinha que você sempre quis ter, mesmo que todo mundo ache que é uma besteira?",
    options: [
      { text: "🌊 Mergulharia de cabeça sem pensar duas vezes", trait: "corajosa" },
      { text: "📖 Estudaria tudo sobre ele antes de entrar", trait: "curiosa" },
      { text: "🤝 Buscaria alguém de lá para me guiar", trait: "sociavel" },
      { text: "🎶 Deixaria a música me conduzir", trait: "sonhadora" },
    ],
    color: "#40C9A2", bgGradient: "from-[#081e1a] via-[#0d3d2e] to-[#082018]",
    sparkle: "#40C9A2", emoji: "🐚", description: "Curiosa e cheia de vida",
  },
  {
    name: "Aurora", movie: "Bela adormecida",
    scene: "Enquanto caminham pela floresta, a luz atravessa as árvores e alguns pássaros acompanham vocês pelo caminho.\nAurora para apenas por um instante para observar tudo ao redor.",
    question: "Existe alguma coisinha simples que sempre consegue deixar o seu dia mais bonito?",
    options: [
      { text: "🏹 Seguiria meu próprio caminho sem olhar pra trás", trait: "rebelde" },
      { text: "💬 Tentaria mudar as regras por dentro do sistema", trait: "diplomatica" },
      { text: "🌲 Fugiria para a natureza e seria livre", trait: "selvagem" },
      { text: "🤲 Escolheria com cuidado, pensando em todos", trait: "responsavel" },
    ],
    color: "#F87171", bgGradient: "from-[#1e0505] via-[#4a0a0a] to-[#2e0808]",
    sparkle: "#F87171", emoji: "🦉", description: "Valente e independente",
  },
  {
    name: "Jasmine", movie: "Aladdin",
    scene: "O tapete mágico sobrevoa o reino enquanto o vento brinca com seus cabelos.\nJasmine observa o horizonte por alguns instantes antes de sorrir.",
    question: "Se pudesse passar um dia inteiro explorando qualquer lugar, para onde seus pés te levariam primeiro?",
    options: [
      { text: "🌍 Viajar para qualquer lugar do mundo", trait: "aventureira" },
      { text: "💞 Encontrar um amor verdadeiro e livre", trait: "romantica" },
      { text: "🕊️ Ter total liberdade para ser eu mesma", trait: "independente" },
      { text: "🌟 Fazer todos ao meu redor felizes", trait: "altruista" },
    ],
    color: "#A78BFA", bgGradient: "from-[#12082e] via-[#2d1b5e] to-[#1a0e40]",
    sparkle: "#A78BFA", emoji: "🧞‍♂️", description: "Livre e determinada",
  },
  {
    name: "Cinderela", movie: "Cinderela",
    scene: "O salão do castelo começa a ganhar vida para mais um baile.\nMas, em vez de olhar para os lustres, Cinderela observa a janela aberta e a brisa da noite.",
    question: "Como seria uma noite realmente especial para você?",
    options: [
      { text: "🎭 Um baile deslumbrante com música e dança", trait: "festiva" },
      { text: "🕯️ Um jantar íntimo e romântico", trait: "romantica" },
      { text: "🍫 Uma noite em casa com filmes e chocolate", trait: "aconchegante" },
      { text: "✨ Uma surpresa mágica inesperada", trait: "magica" },
    ],
    color: "#7EB8F7", bgGradient: "from-[#0d1b3e] via-[#1a3a6e] to-[#0d2040]",
    sparkle: "#7EB8F7", emoji: "👠", description: "Elegante e esperançosa",
  },
];

export const traitProfiles: Record<string, { title: string; description: string; emoji: string }> = {
  festiva:        { title: "A Alma da Festa",               description: "Você brilha quando está rodeada de pessoas e celebração.", emoji: "🎉" },
  romantica:      { title: "A Grande Romântica",             description: "Seu coração é profundo e você valoriza conexões verdadeiras.", emoji: "💖" },
  aconchegante:   { title: "O Lar é Onde Está Meu Coração", description: "Você encontra magia nas pequenas coisas do cotidiano.", emoji: "🏡" },
  magica:         { title: "A Que Acredita em Milagres",    description: "Você mantém a fé de que coisas incríveis podem acontecer.", emoji: "✨" },
  corajosa:       { title: "A Desbravadora",                 description: "Você tem coragem para mergulhar no desconhecido.", emoji: "⚡" },
  curiosa:        { title: "A Exploradora",                  description: "Sua mente nunca para — você sempre quer saber mais.", emoji: "🔍" },
  sociavel:       { title: "A Conectora de Almas",           description: "Você tem o dom de construir pontes entre pessoas.", emoji: "🌟" },
  sonhadora:      { title: "A Que Vive nos Sonhos",          description: "Você enxerga possibilidades onde outros veem obstáculos.", emoji: "🌙" },
  intellectual:    { title: "A Mente Brilhante",              description: "O conhecimento é sua maior paixão e ferramenta.", emoji: "📚" },
  outros:          { title: "A Que Tem Sua Própria Essência", description: "Você prefere seguir o próprio jeito e deixar a surpresa falar mais alto.", emoji: "💬" },
  bondosa:        { title: "O Coração de Ouro",              description: "Sua generosidade transforma as pessoas ao seu redor.", emoji: "💛" },
  autentica:      { title: "A Verdadeira",                   description: "Você não abre mão de ser quem é — raro e precioso.", emoji: "💎" },
  alegre:         { title: "A Luz da Sala",                  description: "Você ilumina os ambientes com sua energia.", emoji: "☀️" },
  aventureira:    { title: "A Sem Fronteiras",               description: "O mundo é pequeno para sua vontade de descobrir.", emoji: "🗺️" },
  independente:   { title: "A Dona do Próprio Destino",      description: "Você não espera permissão para ser quem quer ser.", emoji: "🦋" },
  altruista:      { title: "A Que Multiplica o Bem",         description: "Sua maior alegria é ver as pessoas ao redor florescendo.", emoji: "🌸" },
  criativa:       { title: "A Artista da Vida",              description: "Você transforma tudo o que toca em algo único.", emoji: "🎨" },
  contemplativa:  { title: "A Observadora do Mundo",         description: "Você encontra profundidade onde outros passam sem ver.", emoji: "🌄" },
  descansar:      { title: "A Que Sabe Parar",              description: "Você encontra equilíbrio nas pausas e no silêncio.", emoji: "☕" },
  livre:          { title: "O Espírito Livre",               description: "Você precisa de espaço para respirar e ser.", emoji: "🌊" },
  familiar:       { title: "O Pilar dos Que Ama",            description: "Seu lar e seus vínculos são sua maior riqueza.", emoji: "🏠" },
  conectada:      { title: "A Em Harmonia com o Mundo",      description: "Você sente a natureza como extensão de si.", emoji: "🌿" },
  determinada:    { title: "A Que Nunca Desiste",            description: "Você vai atrás dos seus sonhos com força inabalável.", emoji: "🔥" },
  dedicada:       { title: "A De Raízes Profundas",          description: "Você carrega seus valores e história com orgulho.", emoji: "🌳" },
  inspiradora:    { title: "A Que Eleva os Outros",          description: "Você lidera pelo exemplo e acende a chama dos outros.", emoji: "🕯️" },
  perfeccionista: { title: "A Que Faz com Amor",             description: "Para você, cada detalhe importa — e isso aparece.", emoji: "💫" },
  rebelde:        { title: "A Que Reescreve as Regras",      description: "Você não aceita limitações que não fazem sentido.", emoji: "⚡" },
  diplomatica:    { title: "A Agente de Mudança",            description: "Você sabe que transformação vem de dentro.", emoji: "🌱" },
  selvagem:       { title: "A Filha da Natureza",            description: "Você é mais autêntica longe das convenções.", emoji: "🌲" },
  responsavel:    { title: "A Guardiã do Equilíbrio",        description: "Você pensa nas consequências e age com sabedoria.", emoji: "⚖️" },
};
