// Simple text generator utilities adapted from Home.jsx logic
const loremWords = [
  'lorem','ipsum','dolor','sit','amet','consectetur','adipiscing','elit','sed','do','eiusmod','tempor','incididunt','ut','labore','et','dolore','magna','aliqua','enim','ad','minim','veniam','quis','nostrud','exercitation','ullamco','laboris','nisi','aliquip','ex','ea','commodo','consequat','duis','aute','irure','dolor','in','reprehenderit','voluptate','velit','esse','cillum','eu','fugiat','nulla','pariatur','excepteur','sint','occaecat','cupidatat','non','proident','sunt','culpa','qui','officia','deserunt','mollit','anim','id','est','laborum'
];

const firstNames = ['James','Mary','John','Patricia','Robert','Jennifer','Michael','Linda','William','Elizabeth'];
const lastNames = ['Smith','Johnson','Williams','Brown','Jones','Garcia','Miller','Davis','Rodriguez','Martinez'];

function randomWord() {
  return loremWords[Math.floor(Math.random() * loremWords.length)];
}

export function generateSentence(wordCount = null) {
  const count = wordCount || Math.floor(Math.random() * 15) + 8;
  const words = [];
  for (let j = 0; j < count; j++) {
    const w = randomWord();
    words.push(j === 0 ? w.charAt(0).toUpperCase() + w.slice(1) : w);
  }
  return words.join(' ') + '.';
}

export function generateParagraph(paragraphLength = 'medium') {
  let sentenceCount;
  switch (paragraphLength) {
    case 'short': sentenceCount = 2; break;
    case 'long': sentenceCount = 8; break;
    default: sentenceCount = 4;
  }
  const sentences = [];
  for (let i = 0; i < sentenceCount; i++) sentences.push(generateSentence());
  return sentences.join(' ');
}

export function generateWords(count) {
  const words = [];
  for (let i = 0; i < count; i++) {
    const w = randomWord();
    words.push(i === 0 ? w.charAt(0).toUpperCase() + w.slice(1) : w);
  }
  return words.join(' ') + '.';
}

// generateText returns an array of strings according to options
export function generateText(options) {
  const { type, count = 3, textCase = 'regular', htmlTag = '', className = '', paragraphLength = 'medium' } = options || {};
  const items = [];

  switch (type) {
    case 'paragraphs':
      for (let i = 0; i < count; i++) {
        let p = generateParagraph(paragraphLength);
        items.push(p);
      }
      break;

    case 'sentences':
      for (let i = 0; i < count; i++) items.push(generateSentence());
      break;

    case 'words':
      items.push(generateWords(count));
      break;

    case 'titles':
      for (let i = 0; i < count; i++) {
        const wordCount = Math.max(2, Math.floor(Math.random() * 5) + 2);
        const words = [];
        for (let j = 0; j < wordCount; j++) {
          const w = randomWord();
          words.push(w.charAt(0).toUpperCase() + w.slice(1));
        }
        items.push(words.join(' '));
      }
      break;

    case 'captions':
      for (let i = 0; i < Math.max(1, Math.floor(count / 2)); i++) items.push(generateSentence(Math.max(3, Math.floor(Math.random() * 10) + 3)));
      break;

    case 'names':
      for (let i = 0; i < count; i++) {
        const first = randomWord();
        const last = randomWord();
        items.push((first.charAt(0).toUpperCase() + first.slice(1)) + ' ' + (last.charAt(0).toUpperCase() + last.slice(1)));
      }
      break;

    case 'realNames':
      for (let i = 0; i < count; i++) {
        const first = firstNames[Math.floor(Math.random() * firstNames.length)];
        const last = lastNames[Math.floor(Math.random() * lastNames.length)];
        items.push(`${first} ${last}`);
      }
      break;

    default:
      items.push('Please select a generation type.');
  }

  // apply textCase
  const applyCase = (s) => {
    switch (textCase) {
      case 'lower': return s.toLowerCase();
      case 'upper': return s.toUpperCase();
      case 'title': return s.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      case 'sentence': return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
      default: return s;
    }
  };

  return items.map(applyCase);
}

export default generateText;
