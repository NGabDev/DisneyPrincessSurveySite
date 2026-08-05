export type Option = { text: string; trait: string };
export type Princess = {
  name: string;
  movie: string;
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
    name: "Aurora", movie: "Bela adormecida",
    question: "O que você faria se as regras não existissem?",
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
    name: "Bela", movie: "A Bela e a Fera",
    question: "O que você mais valoriza em uma pessoa?",
    options: [
      { text: "📚 A inteligência e vontade de aprender", trait: "intelectual" },
      { text: "❤️ A bondade e o coração generoso", trait: "bondosa" },
      { text: "💪 A coragem de ser quem é de verdade", trait: "autentica" },
      { text: "😄 O senso de humor e a leveza", trait: "alegre" },
    ],
    color: "#F5C542", bgGradient: "from-[#1e1400] via-[#3d2a00] to-[#2a1c00]",
    sparkle: "#F5C542", emoji: "🌹", description: "Inteligente e corajosa",
  },
  {
    name: "Ariel", movie: "A Pequena Sereia",
    question: "O que você faria se pudesse explorar um mundo completamente novo?",
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
    name: "Rapunzel", movie: "Enrolados",
    question: "O que mais acende sua criatividade e energia?",
    options: [
      { text: "🎨 Criar algo com as minhas próprias mãos", trait: "criativa" },
      { text: "🌄 Ver o sol nascer em um lugar lindo", trait: "contemplativa" },
      { text: "👯 Estar com pessoas que me inspiram", trait: "sociavel" },
      { text: "💡 Uma ideia nova que surge do nada", trait: "sonhadora" },
    ],
    color: "#F472B6", bgGradient: "from-[#2e0818] via-[#5e1040] to-[#3a0a28]",
    sparkle: "#F472B6", emoji: "☀️", description: "Criativa e cheia de sonhos",
  },
  {
    name: "Tiana", movie: "A Princesa e o Sapo",
    question: "O que te motiva a dar o seu melhor todos os dias?",
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
    name: "Jasmine", movie: "Aladdin",
    question: "Se você pudesse realizar um desejo agora, qual seria?",
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
    question: "Qual seria o seu programa perfeito para uma noite especial?",
    options: [
      { text: "🎭 Um baile deslumbrante com música e dança", trait: "festiva" },
      { text: "🕯️ Um jantar íntimo e romântico", trait: "romantica" },
      { text: "🍫 Uma noite em casa com filmes e chocolate", trait: "aconchegante" },
      { text: "✨ Uma surpresa mágica inesperada", trait: "magica" },
    ],
    color: "#7EB8F7", bgGradient: "from-[#0d1b3e] via-[#1a3a6e] to-[#0d2040]",
    sparkle: "#7EB8F7", emoji: "👠", description: "Elegante e esperançosa",
  },
  {
    name: "Branca de neve", movie: "Branca de neve",
    question: "Onde você se sente mais completamente você mesma?",
    options: [
      { text: "🌊 Perto do mar, sentindo a brisa", trait: "livre" },
      { text: "🏔️ No alto de uma montanha, com a vista toda", trait: "aventureira" },
      { text: "🏠 Em casa, rodeada de quem amo", trait: "familiar" },
      { text: "🌅 Em qualquer lugar com beleza natural", trait: "conectada" },
    ],
    color: "#FB923C", bgGradient: "from-[#1e0a00] via-[#4a1a00] to-[#2e1000]",
    sparkle: "#FB923C", emoji: "🍎", description: "Corajosa e conectada",
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
  intelectual:    { title: "A Mente Brilhante",              description: "O conhecimento é sua maior paixão e ferramenta.", emoji: "📚" },
  bondosa:        { title: "O Coração de Ouro",              description: "Sua generosidade transforma as pessoas ao seu redor.", emoji: "💛" },
  autentica:      { title: "A Verdadeira",                   description: "Você não abre mão de ser quem é — raro e precioso.", emoji: "💎" },
  alegre:         { title: "A Luz da Sala",                  description: "Você ilumina os ambientes com sua energia.", emoji: "☀️" },
  aventureira:    { title: "A Sem Fronteiras",               description: "O mundo é pequeno para sua vontade de descobrir.", emoji: "🗺️" },
  independente:   { title: "A Dona do Próprio Destino",      description: "Você não espera permissão para ser quem quer ser.", emoji: "🦋" },
  altruista:      { title: "A Que Multiplica o Bem",         description: "Sua maior alegria é ver as pessoas ao redor florescendo.", emoji: "🌸" },
  criativa:       { title: "A Artista da Vida",              description: "Você transforma tudo o que toca em algo único.", emoji: "🎨" },
  contemplativa:  { title: "A Observadora do Mundo",         description: "Você encontra profundidade onde outros passam sem ver.", emoji: "🌄" },
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
