const quizQuestions = [
  {
    question: 'На какой реке стояла крепость Осовец?',
    answers: ['Висла', 'Нарев', 'Бебжа', 'Неман'],
    correct: 2
  },
  {
    question: 'Как называлась контратака защитников после газового удара 6 августа 1915 года?',
    answers: ['Брусиловский прорыв', 'Атака мертвецов', 'Чудо на Висле', 'Оборона Перемышля'],
    correct: 1
  },
  {
    question: 'Какой газ немцы применили под Осовцом в 1915 году?',
    answers: ['Хлор', 'Иприт', 'Зарин', 'Аммиак'],
    correct: 0
  },
  {
    question: 'Как защитники пытались смягчить действие газа во время атаки?',
    answers: ['Фильтрующие противогазы Зелинского-Кумманта', 'Влажные бинты с содой', 'Противогазы с активированным углём', 'Никак'],
    correct: 1
  },
  {
    question: 'С какой стороны велось главное наступление на крепость летом 1915 года?',
    answers: ['С запада', 'С востока', 'С севера', 'С юга'],
    correct: 0
  },
  {
    question: 'Сколько линий обороны имел Осовец к 1915 году?',
    answers: ['1', '2', '3', '4'],
    correct: 3
  },
  {
    question: 'На каком фронте находилась крепость Осовец?',
    answers: ['Северо-Западный фронт', 'Кавказский фронт', 'Юго-Западный фронт', 'Северный фронт'],
    correct: 0
  },
  {
    question: 'В каком году началась Первая мировая война?',
    answers: ['1912', '1914', '1916', '1918'],
    correct: 1
  },
  {
    question: 'В каком году США вступили в войну?',
    answers: ['1914', '1915', '1916', '1917'],
    correct: 3
  },
  {
    question: 'Какая страна НЕ входила в Антанту?',
    answers: ['Франция', 'Великобритания', 'Германия', 'Россия'],
    correct: 2
  },
  {
    question: 'К какой коалиции относилась Османская империя?',
    answers: ['Антанта', 'Центральные державы', 'Нейтралитет', 'Балканская лига'],
    correct: 1
  },
  {
    question: 'Как назывался немецкий план войны на два фронта?',
    answers: ['План Барбаросса', 'План Шлиффена', 'План Дюка', 'План Гинденбурга'],
    correct: 1
  },
  {
    question: 'Где впервые массово применили танки?',
    answers: ['Верден', 'Марна', 'Сомма', 'Камбре'],
    correct: 2
  },
  {
    question: 'Какое наступление русской армии в 1916 году стало самым успешным?',
    answers: ['Рижская операция', 'Брусиловский прорыв', 'Нарочская операция', 'Восточно-Прусская операция'],
    correct: 1
  },
  {
    question: 'Какую артсистему союзники называли «Большая Берта»?',
    answers: ['420-мм мортира Krupp', '76-мм полевая пушка', '152-мм гаубица', '305-мм мортира Skoda'],
    correct: 0
  },
  {
    question: 'В каком месяце 1918 года подписано Компьенское перемирие?',
    answers: ['Июль', 'Сентябрь', 'Ноябрь', 'Декабрь'],
    correct: 2
  },
  {
    question: 'Где было совершено убийство эрцгерцога Франца Фердинанда?',
    answers: ['Вена', 'Сараево', 'Белград', 'Бухарест'],
    correct: 1
  },
  {
    question: 'Какая армия победила в битве при Танненберге в 1914 году?',
    answers: ['Русская 2-я армия', 'Германская 8-я армия', 'Французская 5-я армия', 'Британские экспедиционные силы'],
    correct: 1
  },
  {
    question: 'Какой договор вывел Россию из войны?',
    answers: ['Версальский договор', 'Брестский мир', 'Сан-Стефанский договор', 'Рапалльский договор'],
    correct: 1
  },
  {
    question: 'Какой истребитель стал символом «Красного Барона» Манфреда фон Рихтгофена?',
    answers: ['Sopwith Camel', 'Nieuport 17', 'Fokker Dr.I', 'SPAD S.VII'],
    correct: 2
  },
  {
    question: 'Какая битва остановила германское наступление на Париж в 1914 году?',
    answers: ['Битва на Марне', 'Битва при Марселе', 'Битва при Лондоне', 'Битва при Берлине'],
    correct: 0
  },
  {
    question: 'Какое сражение стало символом позиционной войны на Западе в 1916 году?',
    answers: ['Верден', 'Галиция', 'Лодзь', 'Ютландия'],
    correct: 0
  },
  {
    question: 'Какой морской бой был крупнейшим в Первой мировой?',
    answers: ['Цусима', 'Ютландский бой', 'Доггер-банка', 'Мидуэй'],
    correct: 1
  },
  {
    question: 'Когда была проведена эвакуация гарнизона Осовца?',
    answers: ['Март 1915', 'Июль 1915', 'Ноябрь 1915', 'Март 1916'],
    correct: 1
  },
  {
    question: 'Сколько примерно длилась оборона Осовца?',
    answers: ['3 месяца', '6 месяцев', '11 месяцев', '18 месяцев'],
    correct: 2
  },
  {
    question: 'Кто был верховным главнокомандующим русской армии в начале войны?',
    answers: ['А. А. Брусилов', 'Великий князь Николай Николаевич', 'Николай II', 'М. В. Алексеев'],
    correct: 1
  }
];

const positiveReplies = [
  'Верно! Ты держишь темп.',
  'Есть попадание — молодец!',
  'Отлично, точное знание!',
  'Красиво ответил, так держать.',
  'Супер, ты в теме.',
  'Да! Идём дальше по горячим следам.'
];

const negativeReplies = [
  'Не совсем так. Но дальше будет лучше!',
  'Мимо, попробуем другой ракурс.',
  'Чуть-чуть не то — не сдаёмся.',
  'Ошибки — часть тренировки, поехали дальше.',
  'Упс, не попали. Возьмём следующий вопрос.',
  'Почти! Сейчас разгонимся.'
];

const funFacts = [
  'Гарнизон Осовца держался почти 11 месяцев под огнём осадной артиллерии.',
  'Немцы подтянули к крепости 420-мм орудия, но быстро разрушить её не смогли.',
  'После газовой атаки 6 августа 1915-го защитники шли в контратаку в бинтах и с баграми.',
  'Крепость контролировала важный железнодорожный узел к Гродно и Белостоку.',
  'В 1916 году началась массовая выдача фильтрующих противогазов, но под Осовцом их ещё не было.',
  'Ютландский бой стал единственным генеральным сражением дредноутов в войне.'
];

export function initValeraAssistant(){
  const root = document.getElementById('valeraAssistant');
  if(!root) return;

  const launcher = root.querySelector('.valera-launcher');
  const panel = root.querySelector('.valera-panel');
  const closeBtn = root.querySelector('.valera-close');
  const avatar = root.querySelector('#valeraAvatar');
  const chatEl = root.querySelector('#valeraChat');
  const statusEl = root.querySelector('.valera-status');

  if(!launcher || !panel || !closeBtn || !avatar || !chatEl){
    return;
  }

  panel.setAttribute('aria-hidden', 'true');
  if(statusEl) statusEl.textContent = 'онлайн';

  let conversationStarted = false;
  let currentIndex = 0;
  let questionResolved = false;
  let activeOptionsGroup = null;

  const getRandomReply = list => list[Math.floor(Math.random() * list.length)];

  const updateAvatar = mood => {
    if(mood === 'sad'){
      avatar.src = 'sad.webp';
      avatar.alt = 'Мурвiк расстроен';
    }else{
      avatar.src = 'Fun.webp';
      avatar.alt = 'Мурвiк на связи';
    }
  };

  const setStatus = text => {
    if(statusEl){
      statusEl.textContent = text;
    }
  };

  const appendMessage = (text, author = 'valera') => {
    const message = document.createElement('div');
    message.className = author === 'valera' ? 'valera-message valera-message--valera' : 'valera-message valera-message--user';

    const bubble = document.createElement('div');
    bubble.className = 'valera-message__bubble';
    bubble.textContent = text;

    message.appendChild(bubble);
    chatEl.appendChild(message);
    chatEl.scrollTop = chatEl.scrollHeight;
    return message;
  };

  const renderOptionsBlock = options => {
    const message = document.createElement('div');
    message.className = 'valera-message valera-message--options';
    const bubble = document.createElement('div');
    bubble.className = 'valera-message__bubble';

    const group = document.createElement('div');
    group.className = 'valera-options';

    options.forEach(opt => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'valera-option';
      btn.textContent = opt.label;
      btn.addEventListener('click', () => {
        opt.onSelect(btn);
      });
      group.appendChild(btn);
    });

    bubble.appendChild(group);
    message.appendChild(bubble);
    chatEl.appendChild(message);
    chatEl.scrollTop = chatEl.scrollHeight;
    activeOptionsGroup = group;
    return group;
  };

  const disableActiveOptions = () => {
    if(activeOptionsGroup){
      activeOptionsGroup.querySelectorAll('button').forEach(btn => {
        btn.disabled = true;
      });
      activeOptionsGroup = null;
    }
  };

  const withTyping = (cb, mood = 'fun', baseDelay = 420) => {
    setStatus('печатает...');
    const delay = baseDelay + Math.floor(Math.random() * 260);
    setTimeout(() => {
      updateAvatar(mood);
      cb();
      setStatus('онлайн');
    }, delay);
  };

  const maybeShareFact = () => {
    if(Math.random() < 0.35){
      const fact = getRandomReply(funFacts);
      withTyping(() => appendMessage(`Кстати: ${fact}`, 'valera'), 'fun', 350);
    }
  };

  const askQuestion = () => {
    const current = quizQuestions[currentIndex];
    questionResolved = false;

    withTyping(() => {
      appendMessage(current.question, 'valera');
      renderOptionsBlock(
        current.answers.map((answer, idx) => ({
          label: answer,
          onSelect: btn => handleAnswer(idx, btn)
        }))
      );
    }, 'fun', 260);
  };

  const goToNextQuestion = () => {
    currentIndex = (currentIndex + 1) % quizQuestions.length;
    setTimeout(askQuestion, 900);
  };

  const handleAnswer = (selectedIndex, button) => {
    if(questionResolved){
      return;
    }

    questionResolved = true;
    const current = quizQuestions[currentIndex];
    appendMessage(current.answers[selectedIndex], 'user');
    disableActiveOptions();

    const isCorrect = selectedIndex === current.correct;
    const reply = getRandomReply(isCorrect ? positiveReplies : negativeReplies);
    button.classList.add(isCorrect ? 'valera-option--correct' : 'valera-option--wrong');

    withTyping(() => {
      appendMessage(reply, 'valera');
      maybeShareFact();
      setTimeout(() => {
        updateAvatar('fun');
        goToNextQuestion();
      }, 900);
    }, isCorrect ? 'fun' : 'sad', isCorrect ? 320 : 480);
  };

  const handleReadyResponse = (isReady, button) => {
    appendMessage(button.textContent, 'user');
    disableActiveOptions();

    if(isReady){
      withTyping(() => {
        appendMessage('Класс, заряжаю вопросы!', 'valera');
        askQuestion();
      }, 'fun', 280);
    }else{
      withTyping(() => {
        appendMessage('Ок, напиши, когда будем штурмовать тест.', 'valera');
        setTimeout(askReadyQuestion, 1600);
      }, 'fun', 380);
    }
  };

  const askReadyQuestion = () => {
    withTyping(() => {
      appendMessage('Готов проверить себя?', 'valera');
      renderOptionsBlock([
        { label: 'Да', onSelect: btn => handleReadyResponse(true, btn) },
        { label: 'Не сейчас', onSelect: btn => handleReadyResponse(false, btn) }
      ]);
    }, 'fun', 200);
  };

  const setPanelState = isOpen => {
    root.classList.toggle('is-open', isOpen);
    launcher.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    panel.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
  };

  const startConversation = () => {
    if(conversationStarted){
      return;
    }
    conversationStarted = true;
    withTyping(() => {
      appendMessage('Привет! Я Мурвiк, и у меня есть вопросы по Первой мировой. Готов размяться?', 'valera');
      askReadyQuestion();
    }, 'fun', 240);
  };

  const openPanel = () => setPanelState(true);
  const closePanel = () => setPanelState(false);

  launcher.addEventListener('click', () => {
    if(root.classList.contains('is-open')){
      closePanel();
    }else{
      openPanel();
      startConversation();
    }
  });

  closeBtn.addEventListener('click', closePanel);

  document.addEventListener('keydown', event => {
    if(event.key === 'Escape' && root.classList.contains('is-open')){
      closePanel();
    }
  });
}
