import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert, Badge, InputGroup } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';

const EmojiTextGenerator = () => {
  const [inputText, setInputText] = useState('');
  const [convertedText, setConvertedText] = useState('');
  const [activeStyle, setActiveStyle] = useState('bubbles');
  const [copyAlert, setCopyAlert] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [isLoading, setIsLoading] = useState(false);

  // Enhanced SEO with comprehensive meta tags
  useEffect(() => {
    // Update document title
    document.title = 'Emoji Text Generator - Create Cool Emoji Fonts & Styles Online | Free Tool';

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Free online emoji text generator with 10+ stylish fonts. Convert normal text to bubble letters, cursive emoji text, and cool Unicode styles for social media bios, gaming names, and creative projects.';

    // Add canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.href;

    // Add viewport meta tag if not exists
    let viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      viewport = document.createElement('meta');
      viewport.name = 'viewport';
      viewport.content = 'width=device-width, initial-scale=1.0';
      document.head.appendChild(viewport);
    }
  }, []);

  const emojiStyles = [
    {
      id: 'bubbles',
      name: '🅑🅤🅑🅑🅛🅔 🅢🅣🅨🅛🅔',
      description: 'Circled letters that look like bubbles',
      emoji: 'ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ',
      example: '🅗🅔🅛🅛🅞 🅦🅞🅡🅛🅓',
      popularity: 95
    },
    {
      id: 'parentheses',
      name: '🄿🄰🅁🄴🄽🅃🄷🄴🅂🄴🅂 🅂🅃🅈🄻🄴',
      description: 'Letters enclosed in parentheses',
      emoji: '🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉',
      example: '🄷🄴🄻🄻🄾 🅆🄾🅁🄻🄳',
      popularity: 80
    },
    {
      id: 'fullwidth',
      name: 'Ｆｕｌｌｗｉｄｔｈ Ｓｔｙｌｅ',
      description: 'Full-width characters that stand out',
      emoji: 'ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ',
      example: 'ＨＥＬＬＯ ＷＯＲＬＤ',
      popularity: 75
    },
    {
      id: 'smallcaps',
      name: 'sᴍᴀʟʟ ᴄᴀᴘs',
      description: 'Small capital letters for stylish text',
      emoji: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ',
      example: 'ʜᴇʟʟᴏ ᴡᴏʀʟᴅ',
      popularity: 85
    },
    {
      id: 'doubleStruck',
      name: '𝔻𝕠𝕦𝕓𝕝𝕖-𝕊𝕥𝕣𝕦𝕔𝕜',
      description: 'Mathematical double-struck letters',
      emoji: '𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫',
      example: '𝕙𝕖𝕝𝕝𝕠 𝕨𝕠𝕣𝕝𝕕',
      popularity: 70
    },
    {
      id: 'script',
      name: '𝒮𝒸𝓇𝒾𝓅𝓉 𝒮𝓉𝓎𝓁𝑒',
      description: 'Elegant script font style',
      emoji: '𝒶𝒷𝒸𝒹𝑒𝒻𝑔𝒽𝒾𝒿𝓀𝓁𝓂𝓃𝑜𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏',
      example: '𝒽𝑒𝓁𝓁𝑜 𝓌𝑜𝓇𝓁𝒹',
      popularity: 90
    },
    {
      id: 'boldScript',
      name: '𝓑𝓸𝓵𝓭 𝓢𝓬𝓻𝓲𝓹𝓽',
      description: 'Bold version of script letters',
      emoji: '𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃',
      example: '𝓱𝓮𝓵𝓵𝓸 𝔀𝓸𝓻𝓵𝓭',
      popularity: 88
    },
    {
      id: 'gothic',
      name: '𝕲𝖔𝖙𝖍𝖎𝖈 𝕾𝖙𝖞𝖑𝖊',
      description: 'Medieval gothic style letters',
      emoji: '𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟',
      example: '𝖍𝖊𝖑𝖑𝖔 𝖜𝖔𝖗𝖑𝖉',
      popularity: 65
    },
    {
      id: 'monospace',
      name: '𝙼𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎',
      description: 'Typewriter-style monospace font',
      emoji: '𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣',
      example: '𝚑𝚎𝚕𝚕𝚘 𝚠𝚘𝚛𝚕𝚍',
      popularity: 72
    },
    {
      id: 'inverted',
      name: '🅸🅽🆅🅴🆁🆃🅴🅳',
      description: 'Negative/inverted squared letters',
      emoji: '🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉',
      example: '🅷🅴🅻🅻🅾 🆆🅾🆁🅻🅳',
      popularity: 78
    }
  ];

  const symbolMaps = {
    bubbles: {
      a: 'ⓐ', b: 'ⓑ', c: 'ⓒ', d: 'ⓓ', e: 'ⓔ', f: 'ⓕ', g: 'ⓖ', h: 'ⓗ', i: 'ⓘ', j: 'ⓙ', k: 'ⓚ', l: 'ⓛ', m: 'ⓜ',
      n: 'ⓝ', o: 'ⓞ', p: 'ⓟ', q: 'ⓠ', r: 'ⓡ', s: 'ⓢ', t: 'ⓣ', u: 'ⓤ', v: 'ⓥ', w: 'ⓦ', x: 'ⓧ', y: 'ⓨ', z: 'ⓩ',
      A: '🅐', B: '🅑', C: '🅒', D: '🅓', E: '🅔', F: '🅕', G: '🅖', H: '🅗', I: '🅘', J: '🅙', K: '🅚', L: '🅛', M: '🅜',
      N: '🅝', O: '🅞', P: '🅟', Q: '🅠', R: '🅡', S: '🅢', T: '🅣', U: '🅤', V: '🅥', W: '🅦', X: '🅧', Y: '🅨', Z: '🅩',
      ' ': ' '
    },
    parentheses: {
      a: '🄰', b: '🄱', c: '🄲', d: '🄳', e: '🄴', f: '🄵', g: '🄶', h: '🄷', i: '🄸', j: '🄹', k: '🄺', l: '🄻', m: '🄼',
      n: '🄽', o: '🄾', p: '🄿', q: '🅀', r: '🅁', s: '🅂', t: '🅃', u: '🅄', v: '🅅', w: '🅆', x: '🅇', y: '🅈', z: '🅉',
      A: '🄰', B: '🄱', C: '🄲', D: '🄳', E: '🄴', F: '🄵', G: '🄶', H: '🄷', I: '🄸', J: '🄹', K: '🄺', L: '🄻', M: '🄼',
      N: '🄽', O: '🄾', P: '🄿', Q: '🅀', R: '🅁', S: '🅂', T: '🅃', U: '🅄', V: '🅅', W: '🅆', X: '🅇', Y: '🅈', Z: '🅉',
      ' ': ' '
    },
    fullwidth: {
      a: 'ａ', b: 'ｂ', c: 'ｃ', d: 'ｄ', e: 'ｅ', f: 'ｆ', g: 'ｇ', h: 'ｈ', i: 'ｉ', j: 'ｊ', k: 'ｋ', l: 'ｌ', m: 'ｍ',
      n: 'ｎ', o: 'ｏ', p: 'ｐ', q: 'ｑ', r: 'ｒ', s: 'ｓ', t: 'ｔ', u: 'ｕ', v: 'ｖ', w: 'ｗ', x: 'ｘ', y: 'ｙ', z: 'ｚ',
      A: 'Ａ', B: 'Ｂ', C: 'Ｃ', D: 'Ｄ', E: 'Ｅ', F: 'Ｆ', G: 'Ｇ', H: 'Ｈ', I: 'Ｉ', J: 'Ｊ', K: 'Ｋ', L: 'Ｌ', M: 'Ｍ',
      N: 'Ｎ', O: 'Ｏ', P: 'Ｐ', Q: 'Ｑ', R: 'Ｒ', S: 'Ｓ', T: 'Ｔ', U: 'Ｕ', V: 'Ｖ', W: 'Ｗ', X: 'Ｘ', Y: 'Ｙ', Z: 'Ｚ',
      ' ': '　'
    },
    smallcaps: {
      a: 'ᴀ', b: 'ʙ', c: 'ᴄ', d: 'ᴅ', e: 'ᴇ', f: 'ꜰ', g: 'ɢ', h: 'ʜ', i: 'ɪ', j: 'ᴊ', k: 'ᴋ', l: 'ʟ', m: 'ᴍ',
      n: 'ɴ', o: 'ᴏ', p: 'ᴘ', q: 'ǫ', r: 'ʀ', s: 's', t: 'ᴛ', u: 'ᴜ', v: 'ᴠ', w: 'ᴡ', x: 'x', y: 'ʏ', z: 'ᴢ',
      A: 'ᴀ', B: 'ʙ', C: 'ᴄ', D: 'ᴅ', E: 'ᴇ', F: 'ꜰ', G: 'ɢ', H: 'ʜ', I: 'ɪ', J: 'ᴊ', K: 'ᴋ', L: 'ʟ', M: 'ᴍ',
      N: 'ɴ', O: 'ᴏ', P: 'ᴘ', Q: 'ǫ', R: 'ʀ', S: 's', T: 'ᴛ', U: 'ᴜ', V: 'ᴠ', W: 'ᴡ', X: 'x', Y: 'ʏ', Z: 'ᴢ',
      ' ': ' '
    },
    doubleStruck: {
      a: '𝕒', b: '𝕓', c: '𝕔', d: '𝕕', e: '𝕖', f: '𝕗', g: '𝕘', h: '𝕙', i: '𝕚', j: '𝕛', k: '𝕜', l: '𝕝', m: '𝕞',
      n: '𝕟', o: '𝕠', p: '𝕡', q: '𝕢', r: '𝕣', s: '𝕤', t: '𝕥', u: '𝕦', v: '𝕧', w: '𝕨', x: '𝕩', y: '𝕪', z: '𝕫',
      A: '𝔸', B: '𝔹', C: 'ℂ', D: '𝔻', E: '𝔼', F: '𝔽', G: '𝔾', H: 'ℍ', I: '𝕀', J: '𝕁', K: '𝕂', L: '𝕃', M: '𝕄',
      N: 'ℕ', O: '𝕆', P: 'ℙ', Q: 'ℚ', R: 'ℝ', S: '𝕊', T: '𝕋', U: '𝕌', V: '𝕍', W: '𝕎', X: '𝕏', Y: '𝕐', Z: 'ℤ',
      ' ': ' '
    },
    script: {
      a: '𝒶', b: '𝒷', c: '𝒸', d: '𝒹', e: '𝑒', f: '𝒻', g: '𝑔', h: '𝒽', i: '𝒾', j: '𝒿', k: '𝓀', l: '𝓁', m: '𝓂',
      n: '𝓃', o: '𝑜', p: '𝓅', q: '𝓆', r: '𝓇', s: '𝓈', t: '𝓉', u: '𝓊', v: '𝓋', w: '𝓌', x: '𝓍', y: '𝓎', z: '𝓏',
      A: '𝒜', B: 'ℬ', C: '𝒞', D: '𝒟', E: 'ℰ', F: 'ℱ', G: '𝒢', H: 'ℋ', I: 'ℐ', J: '𝒥', K: '𝒦', L: 'ℒ', M: 'ℳ',
      N: '𝒩', O: '𝒪', P: '𝒫', Q: '𝒬', R: 'ℛ', S: '𝒮', T: '𝒯', U: '𝒰', V: '𝒱', W: '𝒲', X: '𝒳', Y: '𝒴', Z: '𝒵',
      ' ': ' '
    },
    boldScript: {
      a: '𝓪', b: '𝓫', c: '𝓬', d: '𝓭', e: '𝓮', f: '𝓯', g: '𝓰', h: '𝓱', i: '𝓲', j: '𝓳', k: '𝓴', l: '𝓵', m: '𝓶',
      n: '𝓷', o: '𝓸', p: '𝓹', q: '𝓺', r: '𝓻', s: '𝓼', t: '𝓽', u: '𝓾', v: '𝓿', w: '𝔀', x: '𝔁', y: '𝔂', z: '𝔃',
      A: '𝓐', B: '𝓑', C: '𝓒', D: '𝓓', E: '𝓔', F: '𝓕', G: '𝓖', H: '𝓗', I: '𝓘', J: '𝓙', K: '𝓚', L: '𝓛', M: '𝓜',
      N: '𝓝', O: '𝓞', P: '𝓟', Q: '𝓠', R: '𝓡', S: '𝓢', T: '𝓣', U: '𝓤', V: '𝓥', W: '𝓦', X: '𝓧', Y: '𝓨', Z: '𝓩',
      ' ': ' '
    },
    gothic: {
      a: '𝖆', b: '𝖇', c: '𝖈', d: '𝖉', e: '𝖊', f: '𝖋', g: '𝖌', h: '𝖍', i: '𝖎', j: '𝖏', k: '𝖐', l: '𝖑', m: '𝖒',
      n: '𝖓', o: '𝖔', p: '𝖕', q: '𝖖', r: '𝖗', s: '𝖘', t: '𝖙', u: '𝖚', v: '𝖛', w: '𝖜', x: '𝖝', y: '𝖞', z: '𝖟',
      A: '𝕬', B: '𝕭', C: '𝕮', D: '𝕯', E: '𝕰', F: '𝕱', G: '𝕲', H: '𝕳', I: '𝕴', J: '𝕵', K: '𝕶', L: '𝕷', M: '𝕸',
      N: '𝕹', O: '𝕺', P: '𝕻', Q: '𝕼', R: '𝕽', S: '𝕾', T: '𝕿', U: '𝖀', V: '𝖁', W: '𝖂', X: '𝖃', Y: '𝖄', Z: '𝖅',
      ' ': ' '
    },
    monospace: {
      a: '𝚊', b: '𝚋', c: '𝚌', d: '𝚍', e: '𝚎', f: '𝚏', g: '𝚐', h: '𝚑', i: '𝚒', j: '𝚓', k: '𝚔', l: '𝚕', m: '𝚖',
      n: '𝚗', o: '𝚘', p: '𝚙', q: '𝚚', r: '𝚛', s: '𝚜', t: '𝚝', u: '𝚞', v: '𝚟', w: '𝚠', x: '𝚡', y: '𝚢', z: '𝚣',
      A: '𝙰', B: '𝙱', C: '𝙲', D: '𝙳', E: '𝙴', F: '𝙵', G: '𝙶', H: '𝙷', I: '𝙸', J: '𝙹', K: '𝙺', L: '𝙻', M: '𝙼',
      N: '𝙽', O: '𝙾', P: '𝙿', Q: '𝚀', R: '𝚁', S: '𝚂', T: '𝚃', U: '𝚄', V: '𝚅', W: '𝚆', X: '𝚇', Y: '𝚈', Z: '𝚉',
      ' ': ' '
    },
    inverted: {
      a: '🅐', b: '🅑', c: '🅒', d: '🅓', e: '🅔', f: '🅕', g: '🅖', h: '🅗', i: '🅘', j: '🅙', k: '🅚', l: '🅛', m: '🅜',
      n: '🅝', o: '🅞', p: '🅟', q: '🅠', r: '🅡', s: '🅢', t: '🅣', u: '🅤', v: '🅥', w: '🅦', x: '🅧', y: '🅨', z: '🅩',
      A: '🅐', B: '🅑', C: '🅒', D: '🅓', E: '🅔', F: '🅕', G: '🅖', H: '🅗', I: '🅘', J: '🅙', K: '🅚', L: '🅛', M: '🅜',
      N: '🅝', O: '🅞', P: '🅟', Q: '🅠', R: '🅡', S: '🅢', T: '🅣', U: '🅤', V: '🅥', W: '🅦', X: '🅧', Y: '🅨', Z: '🅩',
      ' ': ' '
    }
  };

  const convertText = async (styleId = activeStyle) => {
    if (!inputText.trim()) {
      setConvertedText('');
      return;
    }

    setIsLoading(true);

    // Simulate processing for better UX
    await new Promise(resolve => setTimeout(resolve, 100));

    const styleMap = symbolMaps[styleId];
    let converted = '';

    for (let char of inputText) {
      if (styleMap[char.toLowerCase()]) {
        if (char === char.toUpperCase() && char !== char.toLowerCase()) {
          converted += styleMap[char.toLowerCase()].toUpperCase ?
            styleMap[char.toLowerCase()].toUpperCase() :
            styleMap[char.toLowerCase()];
        } else {
          converted += styleMap[char.toLowerCase()];
        }
      } else {
        converted += char;
      }
    }

    setConvertedText(converted);
    setActiveStyle(styleId);
    setIsLoading(false);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(convertedText);
      setCopyAlert(true);
      setTimeout(() => setCopyAlert(false), 3000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const clearText = () => {
    setInputText('');
    setConvertedText('');
  };

  const getCharacterCount = () => inputText.length;
  const getWordCount = () => inputText.trim() ? inputText.trim().split(/\s+/).filter(word => word.length > 0).length : 0;

  // Popular styles sorted by popularity
  const popularStyles = [...emojiStyles].sort((a, b) => b.popularity - a.popularity).slice(0, 4);

  return (
    <>
      <Helmet>
        <title>Emoji Text Generator - Create Cool Emoji Fonts & Styles Online | Free Tool</title>
        <meta
          name="description"
          content="Free online emoji text generator with 10+ stylish fonts. Convert normal text to emoji letters, bubble text, fancy symbols, and cool Unicode styles for social media bios, gaming names, and creative projects."
        />
        <link rel="canonical" href={window.location.href} />

        {/* Advanced SEO Meta Tags */}
        <meta
          name="keywords"
          content="emoji text generator, emoji font generator, cool emoji text, fancy emoji text, emoji letter generator, stylish text maker, emoji text copy paste, bubble letters generator, cursive emoji text, fancy font generator, unicode emoji text, emoji text design, emoji style font, instagram bio text generator, twitter name font, tiktok font generator, facebook stylish text, aesthetic emoji text, cute text generator, kawaii text generator, cool symbols generator, stylish emoji letters"
        />
        <meta property="og:title" content="Emoji Text Generator - Create Cool Emoji Fonts & Styles Online" />
        <meta property="og:description" content="Free online emoji text generator with 10+ stylish fonts for Instagram bios, gaming names, and creative text design." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content="https://loremtextgenerator.com/site-logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Emoji Text Generator - Create Cool Emoji Fonts & Styles Online" />
        <meta name="twitter:description" content="Create fancy emoji text, bubble letters, and cool fonts for your bio, username, or messages with our free online generator." />
      </Helmet>

      {/* Enhanced SEO Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Emoji Text Generator",
          "description": "Free online emoji text generator with 10+ stylish fonts for social media, gaming, and creative projects",
          "applicationCategory": "DesignApplication",
          "operatingSystem": "Any",
          "permissions": "clipboard-write",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "author": {
            "@type": "Organization",
            "name": "Emoji Text Generator"
          },
          "keywords": "emoji text generator, fancy text, bubble letters, social media fonts, Unicode text"
        })}
      </script>

      <Container className="my-5">
        {/* Enhanced Header Section */}
        <Row className="text-center mb-5">
          <Col>
            <h1 className="display-5 fw-bold text-primary mb-3">
              🎨 Emoji Text Generator
            </h1>
            <p className="lead text-muted mb-4">
              Transform your normal text into <strong>10+ amazing emoji text styles</strong> with one click.
              Perfect for social media bios, gaming names, Discord, Instagram, and creative projects!
            </p>
            <div className="d-flex justify-content-center flex-wrap gap-2">
              <Badge bg="success" className="fs-6 px-3 py-2">100% Free</Badge>
              <Badge bg="primary" className="fs-6 px-3 py-2">10+ Styles</Badge>
              <Badge bg="info" className="fs-6 px-3 py-2">Instant Copy</Badge>
              <Badge bg="warning" className="fs-6 px-3 py-2">Mobile Friendly</Badge>
              <Badge bg="dark" className="fs-6 px-3 py-2">No Registration</Badge>
            </div>
          </Col>
        </Row>

        {/* Copy Alert */}
        {copyAlert && (
          <Row className="mb-3">
            <Col>
              <Alert variant="success" className="text-center border-0 shadow-sm">
                <i className="bi bi-check-circle-fill me-2"></i>
                ✅ Emoji text copied to clipboard! Ready to paste anywhere.
              </Alert>
            </Col>
          </Row>
        )}

        <Row>
          {/* Enhanced Input Section */}
          <Col lg={6} className="mb-4">
            <Card className="h-100 shadow-lg border-0">
              <Card.Header className="bg-gradient-primary text-white py-3">
                <h5 className="mb-0 d-flex align-items-center">
                  <i className="bi bi-input-cursor-text me-2 fs-4"></i>
                  Input Text - Type Your Message
                </h5>
              </Card.Header>
              <Card.Body className="p-4">
                <Form.Group className="mb-4">
                  <Form.Label className="fw-semibold text-dark fs-6">
                    Enter your text to convert:
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={6}
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Type your text here to convert to amazing emoji styles... (e.g., Hello World, Your Name, Cool Text)"
                    className="border-2 rounded-3 focus-ring focus-ring-primary"
                    style={{ resize: 'vertical', fontSize: `${fontSize}px` }}
                  />
                </Form.Group>

                {/* Enhanced Font Size Control */}
                <Form.Group className="mb-4">
                  <Form.Label className="fw-semibold">
                    <i className="bi bi-textarea-resize me-2"></i>
                    Font Size: <Badge bg="secondary">{fontSize}px</Badge>
                  </Form.Label>
                  <Form.Range
                    min="12"
                    max="24"
                    step="2"
                    value={fontSize}
                    onChange={(e) => setFontSize(e.target.value)}
                    className="custom-range"
                  />
                </Form.Group>

                {/* Enhanced Text Statistics */}
                <Card className="bg-light border-0 rounded-3">
                  <Card.Body className="py-3">
                    <Row className="text-center">
                      <Col>
                        <small className="text-muted d-block">Characters</small>
                        <div className="h4 mb-0 text-primary fw-bold">{getCharacterCount()}</div>
                      </Col>
                      <Col>
                        <small className="text-muted d-block">Words</small>
                        <div className="h4 mb-0 text-success fw-bold">{getWordCount()}</div>
                      </Col>
                      <Col>
                        <small className="text-muted d-block">Lines</small>
                        <div className="h4 mb-0 text-info fw-bold">{inputText.split('\n').length}</div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Card.Body>
            </Card>
          </Col>

          {/* Enhanced Output Section */}
          <Col lg={6} className="mb-4">
            <Card className="h-100 shadow-lg border-0">
              <Card.Header className="bg-gradient-primary text-white py-3 d-flex justify-content-between align-items-center">
                <h5 className="mb-0 d-flex align-items-center">
                  <i className="bi bi-magic me-2 fs-4"></i>
                  Emoji Text Output
                </h5>
                <div>
                  <Button
                    variant="light"
                    size="sm"
                    onClick={copyToClipboard}
                    disabled={!convertedText || isLoading}
                    className="me-2 rounded-pill px-3"
                  >
                    {isLoading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-1" />
                        Converting...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-clipboard me-1"></i>
                        Copy Text
                      </>
                    )}
                  </Button>
                  <Button
                    variant="outline-light"
                    size="sm"
                    onClick={clearText}
                    className="rounded-pill px-3"
                  >
                    <i className="bi bi-trash me-1"></i>
                    Clear All
                  </Button>
                </div>
              </Card.Header>
              <Card.Body className="p-4">
                <Form.Group className="mb-4">
                  <Form.Label className="fw-semibold text-dark fs-6">
                    {activeStyle ? `Text in ${emojiStyles.find(s => s.id === activeStyle)?.name}` : 'Converted Text'}:
                  </Form.Label>
                  <div
                    className="border-2 rounded-3 p-4 bg-light"
                    style={{
                      minHeight: '180px',
                      fontSize: `${fontSize}px`,
                      lineHeight: '1.6',
                      fontFamily: 'system-ui, sans-serif',
                      borderStyle: 'dashed!important'
                    }}
                  >
                    {convertedText || (
                      <div className="text-muted text-center d-flex align-items-center justify-content-center h-100">
                        <div>
                          <i className="bi bi-arrow-left fs-1 d-block mb-2"></i>
                          Your emoji text will appear here...
                          <br />
                          <small>Choose a style from below to convert!</small>
                        </div>
                      </div>
                    )}
                  </div>
                </Form.Group>

                {/* Enhanced Active Style Info */}
                {activeStyle && (
                  <Card className="bg-gradient-info text-white border-0 rounded-3">
                    <Card.Body className="py-3">
                      <div className="d-flex justify-content-between align-items-start">
                        <div>
                          <h6 className="mb-1">
                            <i className="bi bi-info-circle me-2"></i>
                            Current Style Info
                          </h6>
                          <small className="opacity-90">
                            <strong>Style:</strong> {emojiStyles.find(s => s.id === activeStyle)?.name}
                            <br />
                            <strong>Description:</strong> {emojiStyles.find(s => s.id === activeStyle)?.description}
                            <br />
                            <strong>Preview:</strong> {emojiStyles.find(s => s.id === activeStyle)?.example}
                          </small>
                        </div>
                        <Badge bg="light" text="dark" className="fs-7">
                          {emojiStyles.find(s => s.id === activeStyle)?.popularity}% Popular
                        </Badge>
                      </div>
                    </Card.Body>
                  </Card>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Enhanced Style Selection */}
        <Row className="mb-4">
          <Col>
            <Card className="shadow-lg border-0">
              <Card.Header className="bg-gradient-dark text-white py-3">
                <h5 className="mb-0 d-flex align-items-center">
                  <i className="bi bi-palette2 me-2 fs-4"></i>
                  Choose Your Favorite Emoji Text Style
                </h5>
              </Card.Header>
              <Card.Body className="p-4">
                <Row className="g-3">
                  {emojiStyles.map((style) => (
                    <Col key={style.id} xs={12} sm={6} lg={4} xl={3} className="mb-3">
                      <Card
                        className={`h-100 border-3 cursor-pointer transition-all ${activeStyle === style.id ? 'border-primary shadow' : 'border-light'
                          }`}
                        onClick={() => convertText(style.id)}
                        style={{ cursor: 'pointer' }}
                      >
                        <Card.Body className="text-center p-3">
                          <div className="fw-bold mb-2" style={{ fontSize: '1.1em' }}>
                            {style.name}
                          </div>
                          <div className="text-muted small mb-2">
                            {style.description}
                          </div>
                          <div className="mb-2" style={{
                            fontFamily: 'system-ui',
                            fontSize: '1.2em',
                            minHeight: '2em'
                          }}>
                            {style.emoji}
                          </div>
                          <div className="small text-primary">
                            Example: {style.example}
                          </div>
                          <div className="mt-2">
                            <Badge bg={activeStyle === style.id ? "primary" : "secondary"} className="w-100">
                              {activeStyle === style.id ? '✓ Selected' : `Popularity: ${style.popularity}%`}
                            </Badge>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Enhanced Quick Actions */}
        <Row className="mb-4">
          <Col>
            <Card className="shadow-lg border-0">
              <Card.Header className="bg-gradient-warning text-dark py-3">
                <h5 className="mb-0 d-flex align-items-center">
                  <i className="bi bi-lightning-charge me-2 fs-4"></i>
                  Quick Convert - Most Popular Styles
                </h5>
              </Card.Header>
              <Card.Body className="p-4">
                <Row className="g-2">
                  {popularStyles.map((style) => (
                    <Col key={style.id} xs={6} md={3}>
                      <Button
                        variant={activeStyle === style.id ? "primary" : "outline-primary"}
                        className="w-100 py-3 rounded-3"
                        onClick={() => convertText(style.id)}
                        size="lg"
                      >
                        <div className="fw-bold">{style.name}</div>
                        <small className="opacity-75 d-block">{style.description}</small>
                      </Button>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Enhanced SEO Content Section */}
        <Row className="mt-5">
          <Col>
            <Card className="bg-light border-0 rounded-3 shadow-sm">
              <Card.Body className="p-5">
                <h2 className="h3 mb-4 text-center text-primary">
                  About Our Emoji Text Generator
                </h2>

                <Row className="g-4">
                  <Col md={6}>
                    <Card className="border-0 bg-white h-100">
                      <Card.Body>
                        <h3 className="h5 text-primary mb-3">
                          <i className="bi bi-question-circle me-2"></i>
                          What is an Emoji Text Generator?
                        </h3>
                        <p className="mb-0">
                          An <strong>emoji text generator</strong> is a creative tool that transforms regular
                          text into stylish, decorative text using special Unicode characters, symbols, and
                          emojis. Unlike regular fonts that require installation, these Unicode styles work
                          across most platforms, social media sites, and messaging apps without any additional
                          setup.
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col md={6}>
                    <Card className="border-0 bg-white h-100">
                      <Card.Body>
                        <h3 className="h5 text-primary mb-3">
                          <i className="bi bi-star me-2"></i>
                          Why Choose Our Tool?
                        </h3>
                        <ul className="list-unstyled mb-0">
                          <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i><strong>10+ Unique Styles:</strong> From bubbles to gothic scripts</li>
                          <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i><strong>Real-time Preview:</strong> See results instantly</li>
                          <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i><strong>One-Click Copy:</strong> Easy clipboard integration</li>
                          <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i><strong>Mobile Optimized:</strong> Perfect on all devices</li>
                          <li><i className="bi bi-check-circle text-success me-2"></i><strong>Completely Free:</strong> No registration or limits</li>
                        </ul>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>

                <h3 className="h5 text-primary mt-5 mb-3">
                  <i className="bi bi-phone me-2"></i>
                  Where Can You Use Emoji Text?
                </h3>
                <Row>
                  <Col md={6}>
                    <ul className="list-unstyled">
                      <li className="mb-2"><i className="bi bi-instagram text-danger me-2"></i><strong>Social Media:</strong> Instagram, Twitter, TikTok, Facebook bios</li>
                      <li className="mb-2"><i className="bi bi-discord text-primary me-2"></i><strong>Gaming & Chat:</strong> Discord, Fortnite, Minecraft usernames</li>
                      <li className="mb-2"><i className="bi bi-whatsapp text-success me-2"></i><strong>Messaging Apps:</strong> WhatsApp, Telegram, Signal</li>
                    </ul>
                  </Col>
                  <Col md={6}>
                    <ul className="list-unstyled">
                      <li className="mb-2"><i className="bi bi-youtube text-danger me-2"></i><strong>Content Creation:</strong> YouTube titles, blog posts</li>
                      <li className="mb-2"><i className="bi bi-pen text-info me-2"></i><strong>Creative Projects:</strong> Digital art, presentations</li>
                      <li><i className="bi bi-person-badge text-warning me-2"></i><strong>Personal Branding:</strong> Email signatures, profiles</li>
                    </ul>
                  </Col>
                </Row>

                <h3 className="h5 text-primary mt-5 mb-3">
                  <i className="bi bi-shield-check me-2"></i>
                  Supported Platforms & Compatibility
                </h3>
                <p>
                  Our emoji text generator creates <strong>Unicode-compliant text</strong> that works on most
                  modern platforms including iOS, Android, Windows, macOS, and popular social media apps.
                  However, some older devices or specific platforms may not display all characters correctly.
                  We recommend testing your generated text on the target platform.
                </p>

                <div className="alert alert-info mt-4 border-0">
                  <h4 className="alert-heading h6">
                    <i className="bi bi-lightbulb me-2"></i>
                    Pro Tip
                  </h4>
                  <p className="mb-0">
                    For best results, use our <strong>Bubble Style</strong> or <strong>Small Caps</strong>
                    as they have the highest compatibility across all platforms and devices. These styles
                    work perfectly on Instagram, Facebook, Twitter, Discord, and most gaming platforms.
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EmojiTextGenerator;