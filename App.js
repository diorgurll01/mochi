import React, { useState } from 'react';
import './App.css';

const sections = [
  {
    lines: [
      'A little surprise just for you 🎁',
      'Tap the gift to unwrap some love...'
    ],
    gif: 'https://media.tenor.com/wqsvVXEKGWoAAAAi/galllllp.gif'
  },
  {
    lines: [
      'To My Lovely Darlo😻',
      'This is the first time I am doing something like this🙈',
      'Hope you like this.....'
    ],
    gif: 'https://media.tenor.com/mvTL8ggxk2kAAAAC/chibicat-chibicatt.gif'
  },
  {
    lines: [
      'Oii....Darlo🙈',
      'I did not know you would become the most important person to me.',
      'Now you mean the world to me...',
      'I’ve changed in a good way, all because of you 💯',
      'The way you treat me, no one else ever has 💖'
    ],
    gif: 'https://media.tenor.com/28G0EVh-CKkAAAAC/cute-cat.gif'
  },
  {
    lines: [
      'You make my world brighter 🌞',
      'My nights softer 🌙',
      'And my heart fuller 💓',
      'Every time I’m upset, I look at these pictures and smile 💕'
    ],
    gif: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/mochi-peach-cat-1/sticker_19.gif?11c57a41a817e51942be916683f7082f'
  },
  {
    lines: [
      'So here’s a small reminder:',
      'I love you today.',
      'I’ll love you tomorrow.',
      'I’ll love you always 💞'
    ],
    gif: 'https://i.pinimg.com/originals/10/98/f3/1098f3d192c5d5704c6c4b4a3aa3731a.gif'
  },
  {
    lines: [
      'Forever Yours 🥹',
      'Thank you for being in my life.',
      'This is just a small way to express my love to you.',
      'I just love you. You’re my everything ❤️'
    ],
    gif: 'https://gifdb.com/images/high/kawaii-cat-mochi-kiss-e2ep2f9mk5hb5k20.gif',
    reset: true
  }
];

function App() {
  const [step, setStep] = useState(0);
  const current = sections[step];

  const handleClick = () => {
    if (current.reset) {
      setStep(0); // Restart from beginning
    } else {
      setStep((prev) => Math.min(prev + 1, sections.length - 1));
    }
  };

  return (
    <>
      {/* Star background */}
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>

      {/* Floating hearts */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="heart"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        ></div>
      ))}

      {/* Background music */}
      <audio autoPlay loop>
        <source src="public/music.mp3/I Think They Call This Love-mobcupe.com.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      {/* Main layout */}
      <div className="App">
        <div className="content">
          {current.lines.map((line, idx) => (
            <p className="line" key={idx}>{line}</p>
          ))}
          {current.gif && <img src={current.gif} alt="Love GIF" className="gif" />}
          {current.image && <img src={current.image} alt="Love Image" className="gif" />}
        </div>

        <div className="bottom-button">
          <button className="next-button" onClick={handleClick}>
            {current.reset
              ? 'Restart 💖'
              : step === sections.length - 2
              ? 'You are my everything 🌍'
              : 'Next 💕'}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
