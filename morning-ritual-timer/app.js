const { useState, useEffect, useRef } = React;
const { Play, Pause, RotateCcw, Sun, Snowflake, Music, Coffee, Heart, Target, Eye, Share2, Volume2, VolumeX } = lucideReact;

const MorningRitualTimer = () => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [rewardGif, setRewardGif] = useState(null);
  const [rewardSticker, setRewardSticker] = useState(null);
  const [audioEnabled, setAudioEnabled] = useState(() => {
    const saved = localStorage?.getItem('audioEnabled');
    return saved ? JSON.parse(saved) : false;
  });
  const [audioPlaying, setAudioPlaying] = useState(false);
  const audioRef = useRef(null);
  
  const [dayCount, setDayCount] = useState(() => {
    const saved = localStorage?.getItem('resetChallengeDays');
    return saved ? parseInt(saved) : 1;
  });

  const phases = [
    {
      name: "Light & Hydration",
      icon: Sun,
      duration: 600, // 10 minutes - change back to real duration
      color: "#fef3c7",
      instructions: "Let the morning light find you.",
      guidance: "Step outside or open those curtains. Let the light touch your face. Sip some water slowly - maybe with a pinch of salt or lemon. This is your sacred time for light, water, and gentle presence. Add yoga or meditation if you wish. Take it slow."
    },
    {
      name: "Cool Refresh", 
      icon: Snowflake,
      duration: 30, // 30 seconds
      color: "#dbeafe",
      instructions: "Here comes your moment of gentle courage.",
      guidance: "At the end of your warm shower, turn the water cool for just 30 seconds. Breathe slowly and deeply. You've got this."
    },
    {
      name: "Movement to Music",
      icon: Music,
      duration: 180, // 3 minutes
      color: "#dcfce7",
      instructions: "What song makes your spirit dance?",
      guidance: "Put on music that lifts your soul. Dance, stretch, sway - however feels good. You're waking up joy."
    },
    {
      name: "Nourishing Fuel",
      icon: Coffee,
      duration: 600, // 10 minutes
      color: "#fce7f3",
      instructions: "What will nourish your body today?",
      guidance: "Prepare protein mindfully - eggs, yogurt, or a protein shake. This is self-care in action."
    },
    {
      name: "Gratitude",
      icon: Heart,
      duration: 180, // 3 minutes
      color: "#ede9fe",
      instructions: "What fills your heart with warmth?",
      guidance: "Place your hand on your heart. Think of three things you appreciate. Feel that warmth."
    },
    {
      name: "Intentions", 
      icon: Target,
      duration: 180, // 3 minutes
      color: "#dbeafe",
      instructions: "What would make today meaningful?",
      guidance: "Consider 1-3 things that matter most today. What would make you feel proud this evening?"
    },
    {
      name: "Visualization",
      icon: Eye, 
      duration: 180, // 3 minutes
      color: "#ccfbf1",
      instructions: "Can you see yourself moving through today with grace?",
      guidance: "Close your eyes. See yourself accomplishing your intentions with ease and confidence."
    }
  ];

  // [REST OF THE COMPONENT CODE - copy from the artifact above]
  
  const enableAudio = () => {
    setAudioEnabled(true);
    
    // Save preference
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('audioEnabled', 'true');
    }
    
    // Try to play background music with multiple sources
    if (audioRef.current) {
      console.log('🎵 Attempting to play background music...');
      // Try hosted audio files first
      const audioFiles = [
        'https://klossgott.github.io/infocusapp/timer/audios/pianomusic1.mp3',
        'https://klossgott.github.io/infocusapp/timer/audios/pianomusic2.mp3',
        'https://klossgott.github.io/infocusapp/timer/audios/pianomusic3.mp3'
      ];
      
      const randomAudio = audioFiles[Math.floor(Math.random() * audioFiles.length)];
      audioRef.current.src = randomAudio;
      audioRef.current.volume = 0.2;
      audioRef.current.loop = true;
      
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setAudioPlaying(true);
            console.log('🎵 Background music started successfully');
          })
          .catch((error) => {
            console.log('🎵 External audio failed, trying fallback:', error.message);
          });
      }
    }
  };

  // [INCLUDE ALL OTHER METHODS FROM THE ARTIFACT]

  return (
    // [INCLUDE THE FULL JSX FROM THE ARTIFACT]
  );
};

// Render the app
ReactDOM.render(React.createElement(MorningRitualTimer), document.getElementById('root'));
