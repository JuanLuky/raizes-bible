/* eslint-disable react-hooks/purity */
import { useState, useEffect } from 'react';
import { Check, Book, Calendar, User, LogOut } from 'lucide-react';
import Logo from './assets/logo1.png';

export function App() {
  const [user, setUser] = useState<string | null>(null);
  const [userName, setUserName] = useState('');
  const [readDays, setReadDays] = useState<Record<string, boolean>>({});
  const [currentMonth, setCurrentMonth] = useState(0);
  const [showWelcome, setShowWelcome] = useState(false);

  const bibleVerses = [
    "Lâmpada para os meus pés é a tua palavra e luz para o meu caminho. - Salmos 119:105",
    "Porque a palavra de Deus é viva e eficaz. - Hebreus 4:12",
    "Toda a Escritura é inspirada por Deus. - 2 Timóteo 3:16",
    "O céu e a terra passarão, mas as minhas palavras não passarão. - Mateus 24:35",
    "Buscai primeiro o Reino de Deus e a sua justiça. - Mateus 6:33",
    "Eu sou o caminho, a verdade e a vida. - João 14:6",
    "Vinde a mim, todos os que estais cansados e oprimidos. - Mateus 11:28",
    "Posso todas as coisas naquele que me fortalece. - Filipenses 4:13",
    "O Senhor é o meu pastor, nada me faltará. - Salmos 23:1",
    "Amarás o teu próximo como a ti mesmo. - Mateus 22:39"
  ];

  const months = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  const readingPlan = {
    0: 31, 1: 28, 2: 31, 3: 30, 4: 31, 5: 30,
    6: 31, 7: 31, 8: 30, 9: 31, 10: 30, 11: 31
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('raizes_user');
    const storedReadDays = localStorage.getItem('raizes_read_days');
    
    if (storedUser) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setUser(storedUser);
    }
    
    if (storedReadDays) {
      setReadDays(JSON.parse(storedReadDays));
    }
  }, []);

  const handleLogin = () => {
    if (userName.trim()) {
      setUser(userName);
      localStorage.setItem('raizes_user', userName);
      setShowWelcome(true);
      setTimeout(() => setShowWelcome(false), 2000);
    }
  };

  const handleLogout = () => {
    setUser(null);
    setUserName('');
    localStorage.removeItem('raizes_user');
  };

  const toggleDay = (month: number, day: number) => {
    const key = `${month}-${day}`;
    const newReadDays = { ...readDays, [key]: !readDays[key] };
    setReadDays(newReadDays);
    localStorage.setItem('raizes_read_days', JSON.stringify(newReadDays));
  };

  const getProgress = () => {
    const total = Object.values(readingPlan).reduce((a, b) => a + b, 0);
    const completed = Object.values(readDays).filter(Boolean).length;
    return Math.round((completed / total) * 100);
  };

  const getMonthProgress = (month: keyof typeof readingPlan) => {
    const total = readingPlan[month];
    const completed = Array.from({ length: total }, (_, i) => i + 1)
      .filter(day => readDays[`${month}-${day}`]).length;
    return Math.round((completed / total) * 100);
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-linear-to-br from-amber-50 via-green-50 to-amber-100 flex items-center justify-center p-4">
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes growIn {
            from { transform: scale(0.8); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          .animate-fadeIn { animation: fadeIn 0.6s ease-out; }
          .animate-growIn { animation: growIn 0.5s ease-out; }
          .animate-pulse-slow { animation: pulse 2s ease-in-out infinite; }
        `}</style>
        
        <div className="w-full max-w-md animate-fadeIn">
          <div className="text-center mb-8 animate-growIn">
            <div className="inline-block p-4 bg-white rounded-full shadow-lg mb-4">
              <img className='w-26 h-26' src={Logo} alt="Logo Raízes" />
            </div>
            <h1 className="text-green-700 text-lg font-semibold">Plano de Leitura Bíblica 2026</h1>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-green-800 font-semibold mb-2 text-sm">
                  Seu Nome
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-600 w-5 h-5" />
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && userName.trim() && handleLogin()}
                    placeholder="Digite seu nome"
                    className="w-full pl-12 pr-4 py-4 border-2 border-green-200 rounded-2xl focus:outline-none focus:border-green-500 transition-colors"
                  />
                </div>
              </div>

              <button
                onClick={handleLogin}
                className="w-full bg-linear-to-r from-green-600 to-green-700 text-white py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                Começar Jornada
              </button>
            </div>

            <div className="mt-6 pt-6 border-t border-green-100">
              <p className="text-center text-green-600 text-sm italic">
                {bibleVerses[1 + Math.floor(Math.random() * (bibleVerses.length - 1))]}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showWelcome) {
    return (
      <div className="min-h-screen bg-linear-to-br from-green-600 to-green-800 flex items-center justify-center p-4">
        <div className="text-center animate-growIn">
          <div className="inline-block p-6 bg-white rounded-full shadow-2xl mb-6 animate-pulse-slow">
            <Book className="w-20 h-20 text-green-700" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-2">Bem-vindo, {user}!</h2>
          <p className="text-green-100 text-lg">Prepare-se para mergulhar na Palavra</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-amber-50 via-green-50 to-amber-100 pb-6">
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideIn { from { transform: translateX(-20px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        @keyframes checkmark { from { transform: scale(0) rotate(0deg); } to { transform: scale(1) rotate(360deg); } }
        @keyframes shimmer { 0% { background-position: -1000px 0; } 100% { background-position: 1000px 0; } }
        .animate-fadeIn { animation: fadeIn 0.5s ease-out; }
        .animate-slideIn { animation: slideIn 0.4s ease-out; }
        .animate-checkmark { animation: checkmark 0.5s ease-out; }
        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent);
          background-size: 1000px 100%;
          animation: shimmer 2s infinite;
        }
      `}</style>

      <div className="bg-linear-to-r from-green-700 to-green-600 text-white px-4 py-6 shadow-lg">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                <Book className="w-6 h-6 text-green-700" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Olá, {user}!</h1>
                <p className="text-green-100 text-sm">Continue sua jornada</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="p-2 hover:bg-green-600 rounded-full transition-colors"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>

          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold">Progresso Anual</span>
              <span className="text-sm font-bold">{getProgress()}%</span>
            </div>
            <div className="w-full bg-white/30 rounded-full h-3 overflow-hidden">
              <div
                className="bg-white h-full rounded-full transition-all duration-500 shimmer"
                style={{ width: `${getProgress()}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6 space-y-6">
        <div className="bg-linear-to-br from-amber-100 to-amber-50 rounded-2xl p-6 shadow-lg border-2 border-amber-200 animate-fadeIn">
          <div className="flex items-start gap-3">
            <Book className="w-6 h-6 text-amber-700 mt-1 shrink-0" />
            <p className="text-amber-900 italic leading-relaxed">
              {bibleVerses[1 + Math.floor(Math.random() * (bibleVerses.length - 1))]}
            </p>
          </div>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {months.map((month, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentMonth(idx)}
              className={`px-4 py-2 rounded-xl font-semibold whitespace-nowrap transition-all ${
                currentMonth === idx
                  ? 'bg-green-700 text-white shadow-lg scale-105'
                  : 'bg-white text-green-700 hover:bg-green-50'
              }`}
            >
              {month}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 animate-slideIn">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-green-900 flex items-center gap-2">
              <Calendar className="w-6 h-6" />
              {months[currentMonth]}
            </h2>
            <span className="text-green-700 font-semibold bg-green-100 px-3 py-1 rounded-full">
              {getMonthProgress(currentMonth as keyof typeof readingPlan)}%
          </span>
          </div>

          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: readingPlan[currentMonth as keyof typeof readingPlan] }, (_, i) => i + 1).map((day) => {
              const isRead = readDays[`${currentMonth}-${day}`];
              return (
                <button
                  key={day}
                  onClick={() => toggleDay(currentMonth, day)}
                  className={`aspect-square rounded-xl font-semibold text-sm transition-all transform hover:scale-110 ${
                    isRead
                      ? 'bg-linear-to-br from-green-600 to-green-700 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {isRead ? (
                    <Check className="w-5 h-5 mx-auto animate-checkmark" />
                  ) : (
                    day
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="bg-linear-to-r from-green-700 to-green-600 rounded-2xl p-6 text-white text-center shadow-xl">
          <h3 className="text-xl font-bold mb-2">Continue Firme!</h3>
          <p className="text-green-100">
            Você já completou <span className="font-bold text-2xl">{Object.values(readDays).filter(Boolean).length}</span> dias de leitura
          </p>
        </div>
      </div>
    </div>
  );
};

