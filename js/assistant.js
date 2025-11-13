const quizQuestions = [
  {
    question: 'На каком участке Восточного фронта произошла «Атака мёртвецов»?',
    answers: ['Брусиловский прорыв', 'Осовецкая крепость', 'Перемышль', 'Карпатский хребет'],
    correct: 1
  },
  {
    question: 'Что стало главной целью немецко-австро-венгерского Горлицкого прорыва в 1915 году?',
    answers: [
      'Взятие Петрограда',
      'Прорвать российскую оборону в Польше и Галиции',
      'Блокировать Балтику',
      'Высадить десант в Риге'
    ],
    correct: 1
  },
  {
    question: 'Кто возглавил Брусиловский прорыв летом 1916 года?',
    answers: ['А. А. Брусилов', 'Н. И. Иванов', 'П. Н. Врангель', 'Л. Г. Корнилов'],
    correct: 0
  },
  {
    question: 'Какая армия была основным противником Российской империи на Северо-Западном фронте?',
    answers: ['Итальянская армия', 'Османская армия', 'Германская армия', 'Болгарская армия'],
    correct: 2
  },
  {
    question: 'Какой фактор сильнее всего ослабил российскую армию к 1917 году на Восточном фронте?',
    answers: [
      'Отсутствие кавалерии',
      'Затянувшиеся боевые действия и дефицит снабжения',
      'Нехватка артиллерийских офицеров',
      'Суровая зима 1914/1915 гг.'
    ],
    correct: 1
  }
];

const positiveReplies = [
  'Отлично! Ты держишь курс на победу.',
  'Верно! Восточный фронт тобой гордится.',
  'Класс! Видно, что историю ты знаешь.',
  'Супер! Такой ответ бы одобрил сам штаб.'
];

const negativeReplies = [
  'Иди подумай ещё!',
  'Не сдавайся, попробуй другой вариант.',
  'Неточно. Перечитай хронику и вперёд.',
  'Пока мимо. Сконцентрируйся ещё раз.'
];

export function initValeraAssistant(){
  const root = document.getElementById('valeraAssistant');
  if(!root) return;

  const launcher = root.querySelector('.valera-launcher');
  const panel = root.querySelector('.valera-panel');
  const closeBtn = root.querySelector('.valera-close');
  const avatar = root.querySelector('#valeraAvatar');
  const chatEl = root.querySelector('#valeraChat');

  if(!launcher || !panel || !closeBtn || !avatar || !chatEl){
    return;
  }

  panel.setAttribute('aria-hidden', 'true');

  let conversationStarted = false;
  let greetingMessage = null;
  let greetingQueuedForRemoval = false;
  let currentIndex = 0;
  let questionResolved = false;
  let activeOptionsGroup = null;
  let isReadyPhase = true;

  const getRandomReply = list => list[Math.floor(Math.random() * list.length)];

  const updateAvatar = mood => {
    if(mood === 'sad'){
      avatar.src = 'sad.png';
      avatar.alt = 'Валера грустит';
    }else{
      avatar.src = 'Fun.png';
      avatar.alt = 'Валера улыбается';
    }
  };

  const appendMessage = (text, author = 'valera') => {
    const message = document.createElement('div');
    message.className = `valera-message valera-message--${author}`;

    const bubble = document.createElement('div');
    bubble.className = 'valera-message__bubble';
    bubble.textContent = text;

    message.appendChild(bubble);
    chatEl.appendChild(message);
    chatEl.scrollTop = chatEl.scrollHeight;
    return message;
  };

  const removeGreeting = () => {
    if(greetingMessage){
      greetingMessage.remove();
      greetingMessage = null;
      greetingQueuedForRemoval = false;
    }
  };

  const renderOptionsBlock = (options = []) => {
    const message = document.createElement('div');
    message.className = 'valera-message valera-message--valera valera-message--options';

    const bubble = document.createElement('div');
    bubble.className = 'valera-message__bubble';
    message.appendChild(bubble);

    const group = document.createElement('div');
    group.className = 'valera-options';
    group.setAttribute('role', 'group');
    group.setAttribute('aria-label', 'Варианты ответа');

    options.forEach(option => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'valera-option';
      btn.textContent = option.label;
      btn.addEventListener('click', () => option.onSelect(btn));
      group.appendChild(btn);
    });

    bubble.appendChild(group);
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

  const askQuestion = () => {
    isReadyPhase = false;
    const current = quizQuestions[currentIndex];
    questionResolved = false;

    appendMessage(current.question, 'valera');
    renderOptionsBlock(
      current.answers.map((answer, idx) => ({
        label: answer,
        onSelect: btn => handleAnswer(idx, btn)
      }))
    );

    if(greetingMessage && !greetingQueuedForRemoval){
      greetingQueuedForRemoval = true;
      setTimeout(removeGreeting, 600);
    }
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
    updateAvatar(isCorrect ? 'fun' : 'sad');
    appendMessage(reply, 'valera');

    setTimeout(() => {
      updateAvatar('fun');
      goToNextQuestion();
    }, 1500);
  };

  const handleReadyResponse = (isReady, button) => {
    appendMessage(button.textContent, 'user');
    disableActiveOptions();

    if(isReady){
      appendMessage('Отлично, держись крепче — начинаем!', 'valera');
      setTimeout(() => {
        updateAvatar('fun');
        askQuestion();
      }, 900);
    }else{
      appendMessage('Напиши как будешь готов.', 'valera');
      setTimeout(askReadyQuestion, 2000);
    }
  };

  const askReadyQuestion = () => {
    isReadyPhase = true;
    appendMessage('Готов принять вызов?', 'valera');
    renderOptionsBlock([
      { label: 'Да', onSelect: btn => handleReadyResponse(true, btn) },
      { label: 'Нет', onSelect: btn => handleReadyResponse(false, btn) }
    ]);
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
    greetingMessage = appendMessage('Привет! Меня зовут Мурвiк, и я уже подготовил пару вопросов про Восточный фронт. Готов проверить себя?', 'valera');
    setTimeout(askReadyQuestion, 900);
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

  // Чат запускается после первого открытия пользователем
}
