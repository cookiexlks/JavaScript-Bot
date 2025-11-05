function chatbot(input) {
  const normalized = (input || '').trim().toLowerCase();

  const greetPattern = '^(hi|hello|hey)\\b';
  const byePattern = '^(bye|goodbye|see you)\\b';
  const thanksPattern = '\\b(thanks|thank you)\\b';
  const questionPattern = '\\?$';

  const greetRe = new RegExp(greetPattern, 'i');
  const byeRe = new RegExp(byePattern, 'i');
  const thanksRe = new RegExp(thanksPattern, 'i');
  const questionRe = new RegExp(questionPattern, 'i');

  if (!normalized) return "Hi — say something and I'll respond.";

  if (greetRe.test(normalized)) {
    return 'Hello! How can I help you today?';
  }

  if (byeRe.test(normalized))
