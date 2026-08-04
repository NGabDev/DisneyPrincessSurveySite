import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft } from "lucide-react";

interface Option {
  text: string;
  trait: string;
}

interface Princess {
  name: string;
  movie: string;
  question: string;
  options: Option[];
  color: string;
  bgGradient: string;
  sparkle: string;
  emoji: string;
  description: string;
}

const princesses: Princess[] = [
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
    sparkle: "#7EB8F7", emoji: "👑", description: "Elegante e esperançosa",
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
    name: "Jasmine", movie: "Aladdin",
    question: "Se você pudesse realizar um desejo agora, qual seria?",
    options: [
      { text: "🌍 Viajar para qualquer lugar do mundo", trait: "aventureira" },
      { text: "💞 Encontrar um amor verdadeiro e livre", trait: "romantica" },
      { text: "🕊️ Ter total liberdade para ser eu mesma", trait: "independente" },
      { text: "🌟 Fazer todos ao meu redor felizes", trait: "altruista" },
    ],
    color: "#A78BFA", bgGradient: "from-[#12082e] via-[#2d1b5e] to-[#1a0e40]",
    sparkle: "#A78BFA", emoji: "🪔", description: "Livre e determinada",
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
    sparkle: "#F472B6", emoji: "🌸", description: "Criativa e cheia de sonhos",
  },
  {
    name: "Moana", movie: "Moana",
    question: "Onde você se sente mais completamente você mesma?",
    options: [
      { text: "🌊 Perto do mar, sentindo a brisa", trait: "livre" },
      { text: "🏔️ No alto de uma montanha, com a vista toda", trait: "aventureira" },
      { text: "🏠 Em casa, rodeada de quem amo", trait: "familiar" },
      { text: "🌅 Em qualquer lugar com beleza natural", trait: "conectada" },
    ],
    color: "#FB923C", bgGradient: "from-[#1e0a00] via-[#4a1a00] to-[#2e1000]",
    sparkle: "#FB923C", emoji: "🌺", description: "Corajosa e conectada",
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
    sparkle: "#4ADE80", emoji: "🌿", description: "Trabalhadora e determinada",
  },
  {
    name: "Mérida", movie: "Valente",
    question: "O que você faria se as regras não existissem?",
    options: [
      { text: "🏹 Seguiria meu próprio caminho sem olhar pra trás", trait: "rebelde" },
      { text: "💬 Tentaria mudar as regras por dentro do sistema", trait: "diplomatica" },
      { text: "🌲 Fugiria para a natureza e seria livre", trait: "selvagem" },
      { text: "🤲 Escolheria com cuidado, pensando em todos", trait: "responsavel" },
    ],
    color: "#F87171", bgGradient: "from-[#1e0505] via-[#4a0a0a] to-[#2e0808]",
    sparkle: "#F87171", emoji: "🏹", description: "Valente e independente",
  },
];

const traitProfiles: Record<string, { title: string; description: string; emoji: string }> = {
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

function StarField({ color }: { color: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 30 }).map((_, i) => {
        const size = 1.5 + Math.random() * 3;
        return (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: size,
              height: size,
              backgroundColor: color,
              animation: `twinkle ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0,
            }}
          />
        );
      })}
    </div>
  );
}

function ProgressBar({ current, total }: { current: number; total: number }) {
  return (
    <div className="w-full px-8 pt-6">
      <div className="flex items-center gap-2 mb-2">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className="h-1.5 flex-1 rounded-full transition-all duration-500"
            style={{ backgroundColor: i < current ? "#c084fc" : "rgba(255,255,255,0.12)" }}
          />
        ))}
      </div>
      <p className="text-center text-xs font-nunito" style={{ color: "rgba(255,255,255,0.35)" }}>
        {current} de {total} perguntas
      </p>
    </div>
  );
}

function WelcomeScreen({ onStart }: { onStart: () => void }) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-full relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6 }}
    >
      <StarField color="#c084fc" />

      <motion.div
        className="flex gap-3 mb-8 flex-wrap justify-center px-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {princesses.map((p, i) => (
          <motion.div
            key={p.name}
            className="text-3xl"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
          >
            {p.emoji}
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="text-center px-10 mb-10"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h1 className="font-playfair text-5xl font-bold leading-tight mb-3" style={{ color: "#f5e6ff" }}>
          Qual Princesa
          <br />
          <span style={{ color: "#c084fc" }}>Vive em Você?</span>
        </h1>
        <p className="font-nunito text-lg" style={{ color: "rgba(245,230,255,0.6)" }}>
          Oito princesas. Oito perguntas.
          <br />
          Descubra o que te define.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-4 gap-3 px-8 mb-10 w-full max-w-lg"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {princesses.map((p) => (
          <div
            key={p.name}
            className="rounded-2xl p-3 flex flex-col items-center gap-1"
            style={{ backgroundColor: `${p.color}18`, border: `1px solid ${p.color}30` }}
          >
            <span className="text-2xl">{p.emoji}</span>
            <span className="font-nunito text-xs font-semibold text-center leading-tight" style={{ color: p.color }}>
              {p.name}
            </span>
          </div>
        ))}
      </motion.div>

      <motion.button
        onClick={onStart}
        className="font-nunito font-bold text-lg px-12 py-4 rounded-full"
        style={{
          background: "linear-gradient(135deg, #c084fc, #818cf8)",
          color: "#0d0a1e",
          boxShadow: "0 0 40px rgba(192,132,252,0.4)",
        }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        whileHover={{ scale: 1.05, boxShadow: "0 0 60px rgba(192,132,252,0.6)" }}
        whileTap={{ scale: 0.97 }}
      >
        ✨ Começar a Pesquisa
      </motion.button>
    </motion.div>
  );
}

function QuestionScreen({
  princess,
  questionIndex,
  total,
  onAnswer,
  onBack,
}: {
  princess: Princess;
  questionIndex: number;
  total: number;
  onAnswer: (trait: string) => void;
  onBack: () => void;
}) {
  const [selected, setSelected] = useState<string | null>(null);

  function handleSelect(trait: string) {
    if (selected) return;
    setSelected(trait);
    setTimeout(() => onAnswer(trait), 600);
  }

  return (
    <motion.div
      className={`flex flex-col h-full relative overflow-hidden bg-gradient-to-br ${princess.bgGradient}`}
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -60 }}
      transition={{ duration: 0.45, ease: "easeInOut" }}
    >
      <StarField color={princess.sparkle} />

      <div className="relative z-10 flex flex-col h-full">
        {/* Top bar with back button and progress */}
        <div className="flex items-start gap-4 px-8 pt-6">
          <button
            onClick={onBack}
            className="flex items-center justify-center w-9 h-9 rounded-full flex-shrink-0 mt-0.5 transition-all duration-200"
            style={{
              backgroundColor: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(245,230,255,0.7)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.14)";
              (e.currentTarget as HTMLButtonElement).style.color = "#f5e6ff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.08)";
              (e.currentTarget as HTMLButtonElement).style.color = "rgba(245,230,255,0.7)";
            }}
          >
            <ArrowLeft size={16} />
          </button>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              {Array.from({ length: total }).map((_, i) => (
                <div
                  key={i}
                  className="h-1.5 flex-1 rounded-full transition-all duration-500"
                  style={{ backgroundColor: i < questionIndex + 1 ? princess.color : "rgba(255,255,255,0.12)" }}
                />
              ))}
            </div>
            <p className="text-xs font-nunito" style={{ color: "rgba(255,255,255,0.35)" }}>
              {questionIndex + 1} de {total} perguntas
            </p>
          </div>
        </div>

        {/* Princess header */}
        <div className="flex flex-col items-center pt-6 pb-4 px-8">
          <motion.div
            className="text-7xl mb-3"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15, type: "spring", stiffness: 200 }}
          >
            {princess.emoji}
          </motion.div>
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="text-center"
          >
            <p className="font-nunito text-sm font-semibold uppercase tracking-widest mb-1" style={{ color: princess.color }}>
              {princess.name} — {princess.movie}
            </p>
            <p className="font-nunito text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
              {princess.description}
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="mx-8 h-px mb-6" style={{ backgroundColor: `${princess.color}30` }} />

        {/* Question */}
        <motion.div
          className="px-8 mb-8"
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="font-playfair text-2xl font-semibold text-center leading-snug" style={{ color: "#f5e6ff" }}>
            {princess.question}
          </h2>
        </motion.div>

        {/* Options */}
        <div className="flex flex-col gap-3 px-8 pb-8 flex-1">
          {princess.options.map((option, i) => {
            const isSelected = selected === option.trait;
            const isDisabled = selected !== null && !isSelected;
            return (
              <motion.button
                key={option.trait}
                onClick={() => handleSelect(option.trait)}
                className="w-full text-left px-5 py-4 rounded-2xl font-nunito font-medium text-base transition-all duration-300"
                style={{
                  backgroundColor: isSelected ? `${princess.color}28` : "rgba(255,255,255,0.05)",
                  border: `1.5px solid ${isSelected ? princess.color : "rgba(255,255,255,0.1)"}`,
                  color: isSelected ? princess.color : "rgba(245,230,255,0.85)",
                  opacity: isDisabled ? 0.35 : 1,
                  boxShadow: isSelected ? `0 0 24px ${princess.color}30` : "none",
                  transform: isSelected ? "scale(1.01)" : "scale(1)",
                }}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.35 + i * 0.08 }}
                whileHover={!selected ? { backgroundColor: `${princess.color}14`, borderColor: `${princess.color}60`, color: "#f5e6ff" } : {}}
                whileTap={!selected ? { scale: 0.98 } : {}}
              >
                {option.text}
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

function ResultScreen({ traits, onRestart }: { traits: string[]; onRestart: () => void }) {
  const traitCounts: Record<string, number> = {};
  traits.forEach((t) => { traitCounts[t] = (traitCounts[t] || 0) + 1; });
  const topTrait = Object.entries(traitCounts).sort((a, b) => b[1] - a[1])[0][0];
  const profile = traitProfiles[topTrait] || { title: "A Única", description: "Você é verdadeiramente especial.", emoji: "💫" };
  const allTraits = traits.map((t) => traitProfiles[t]).filter(Boolean);

  return (
    <motion.div
      className="flex flex-col h-full relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      style={{ background: "linear-gradient(135deg, #0d0a1e 0%, #1a0a30 50%, #0a1a20 100%)" }}
    >
      <StarField color="#c084fc" />
      <StarField color="#f9d276" />

      <div className="relative z-10 flex flex-col items-center justify-start h-full pt-10 pb-8 px-8 overflow-y-auto">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="text-7xl mb-4"
        >
          {profile.emoji}
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mb-2"
        >
          <p className="font-nunito text-sm uppercase tracking-widest mb-2" style={{ color: "#c084fc" }}>
            Seu resultado
          </p>
          <h1 className="font-playfair text-4xl font-bold leading-tight mb-3" style={{ color: "#f5e6ff" }}>
            {profile.title}
          </h1>
          <p className="font-nunito text-base leading-relaxed" style={{ color: "rgba(245,230,255,0.7)" }}>
            {profile.description}
          </p>
        </motion.div>

        <motion.div
          className="w-full h-px my-6"
          style={{ backgroundColor: "rgba(192,132,252,0.2)" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6 }}
        />

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="w-full mb-6"
        >
          <p className="font-nunito text-xs uppercase tracking-widest text-center mb-4" style={{ color: "rgba(245,230,255,0.4)" }}>
            Suas facetas
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {allTraits.map((t, i) => (
              <motion.span
                key={i}
                className="font-nunito text-sm px-3 py-1.5 rounded-full"
                style={{
                  backgroundColor: "rgba(192,132,252,0.12)",
                  border: "1px solid rgba(192,132,252,0.25)",
                  color: "#c084fc",
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.75 + i * 0.06 }}
              >
                {t.emoji} {t.title}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="w-full mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <p className="font-nunito text-xs uppercase tracking-widest text-center mb-4" style={{ color: "rgba(245,230,255,0.4)" }}>
            Suas princesas inspiração
          </p>
          <div className="grid grid-cols-4 gap-2">
            {princesses.map((p) => (
              <div
                key={p.name}
                className="flex flex-col items-center gap-1 p-3 rounded-2xl"
                style={{ backgroundColor: `${p.color}10`, border: `1px solid ${p.color}20` }}
              >
                <span className="text-2xl">{p.emoji}</span>
                <span className="font-nunito text-xs text-center leading-tight" style={{ color: p.color }}>
                  {p.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.button
          onClick={onRestart}
          className="font-nunito font-bold text-base px-10 py-3.5 rounded-full"
          style={{
            background: "linear-gradient(135deg, #c084fc, #818cf8)",
            color: "#0d0a1e",
            boxShadow: "0 0 30px rgba(192,132,252,0.35)",
          }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          ✨ Refazer o Quiz
        </motion.button>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [phase, setPhase] = useState<"welcome" | "question" | "result">("welcome");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  function handleStart() {
    setPhase("question");
    setCurrentIndex(0);
    setAnswers([]);
  }

  function handleAnswer(trait: string) {
    const newAnswers = [...answers, trait];
    setAnswers(newAnswers);
    if (currentIndex + 1 < princesses.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setPhase("result");
    }
  }

  function handleBack() {
    if (currentIndex === 0) {
      setPhase("welcome");
      setAnswers([]);
    } else {
      setCurrentIndex(currentIndex - 1);
      setAnswers(answers.slice(0, -1));
    }
  }

  function handleRestart() {
    setPhase("welcome");
    setCurrentIndex(0);
    setAnswers([]);
  }

  return (
    <div
      className="w-full h-full relative overflow-hidden"
      style={{ fontFamily: "'Nunito', sans-serif", background: "#0d0a1e", maxWidth: "820px", margin: "0 auto" }}
    >
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 0.7; transform: scale(1); }
        }
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-nunito { font-family: 'Nunito', sans-serif; }
      `}</style>

      <AnimatePresence mode="wait">
        {phase === "welcome" && (
          <motion.div key="welcome" className="absolute inset-0">
            <WelcomeScreen onStart={handleStart} />
          </motion.div>
        )}
        {phase === "question" && (
          <motion.div key={`question-${currentIndex}`} className="absolute inset-0">
            <QuestionScreen
              princess={princesses[currentIndex]}
              questionIndex={currentIndex}
              total={princesses.length}
              onAnswer={handleAnswer}
              onBack={handleBack}
            />
          </motion.div>
        )}
        {phase === "result" && (
          <motion.div key="result" className="absolute inset-0">
            <ResultScreen traits={answers} onRestart={handleRestart} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
