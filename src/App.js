import React, { useState } from 'react';
import './App.css';
import './tailwind.css';
import sunImage from './assets/sun.jpg';
import mercuryImage from './assets/mercury.jpg';
import venusImage from './assets/venus.jpg';
import earthImage from './assets/earth.jpg';
import marsImage from './assets/mars.jpg';
import jupiterImage from './assets/jupiter.jpg';
import saturnImage from './assets/saturn.jpg';
import uranusImage from './assets/uranus.jpg';
import neptuneImage from './assets/neptune.jpg';
import moonImage from './assets/moon.jpg';
import sunSound from './assets/sun.wav';

function App() {
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [audio, setAudio] = useState(null);

  const stars = Array.from({ length: 500 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`
  }));

  const planetData = {
    Sun: {
      image: sunImage,
      temperature: '5,505°C / 9,941°F🔥 - 💀',
      info: 'Star at the center of the Solar System.',
      description: 'The Sun, our very own star, sits at the center of the Solar System. It is a nearly perfect sphere of hot plasma and generates a magnetic field that extends millions of kilometers. Providing light and heat to our planet, the Sun plays a pivotal role in sustaining life on Earth. With temperatures reaching up to about 15.6 million Kelvin in its core, the Sun\'s intense heat and radiation make it an impossible destination for human travel. Any attempt to approach or land on its surface would result in instantaneous melting, making it far from an ideal vacation spot!',
      photo: '📷 NuSTAR / PIA25628: Three-Telescope View of the Sun - 2023',
      link: 'https://photojournal.jpl.nasa.gov/target/Sun',
      sound: new Audio(sunSound),
    },
    Mercury: {
      image: mercuryImage,
      temperature: '167°C / 332°F🔥 - 💀',
      info: 'Smallest and innermost planet in Solar System.',
      description: 'The smallest and closest planet to the Sun in our Solar System, Mercury is a rocky world with a surface that\'s scarred by many impact craters, a testament to its tumultuous past. The planet doesn\'t have any atmosphere to speak of, which results in some of the most extreme temperature variations in the Solar System. During the day, temperatures can soar to 430°C (800°F), while at night they can plummet to -180°C (-290°F). This lack of atmosphere also means that Mercury has no protection from the Sun\'s radiation or meteoroid impacts. Its sky is black, and its gravity is about 38% of Earth\'s, which would make you feel lighter if you were to stand on its surface. However, the harsh conditions, extreme temperatures, and lack of breathable air make Mercury a challenging destination for human exploration.',
      photo: '📷PIA19448:MESSENGER\'s Final Image - 2015',
      link: 'https://photojournal.jpl.nasa.gov/targetFamily/Mercury'
    },
    Venus: {
      image: venusImage,
      temperature: '464°C / 867°F🔥 - 💀',
      info: 'Second planet from the Sun.',
      description: 'Often referred to as Earth\'s "sister planet" due to its similar size and proximity, Venus presents an enigmatic contrast to our home. With a thick atmosphere primarily composed of carbon dioxide, Venus is notorious for its intense greenhouse effect, making it the hottest planet in our Solar System with surface temperatures averaging around 467°C (872°F). This extreme heat is even hotter than Mercury, despite Venus being farther from the Sun. The planet\'s atmosphere is laden with clouds of sulfuric acid, creating a yellowish appearance from space and producing steady drizzles of corrosive rain in the upper atmosphere. However, this acid rain never reaches the surface; it evaporates due to the intense heat. With a crushing atmospheric pressure 92 times that of Earth\'s, standing on Venus would feel like being 900 meters (about 3,000 feet) underwater on Earth. The planet also experiences hurricane-like winds reaching up to 360 km/h (224 mph) in its upper atmosphere. Given these harsh and inhospitable conditions, Venus remains a challenging and intriguing subject for scientific exploration.',
      photo: '📷Venus from Mariner 10 - 2020',
      link: 'https://photojournal.jpl.nasa.gov/targetFamily/Venus'
    },
    Earth: {
      image: earthImage,
      temperature: '15°C / 59°F🌎 - 🌱',
      info: 'Third planet from the Sun and the only known to harbor life.',
      description: 'The third planet from the Sun, Earth is the only known celestial body in the universe to support life. It\'s often referred to as the "Blue Planet" due to the vast oceans that cover about 71% of its surface, which play a crucial role in regulating the global climate and supporting diverse marine ecosystems. Earth\'s atmosphere, composed primarily of nitrogen and oxygen, provides the essential elements for life as we know it. This thin layer also protects living organisms from the Sun\'s harmful ultraviolet radiation. With a diverse range of climates and terrains, from scorching deserts to icy tundras and from dense forests to vast grasslands, Earth is home to an incredible variety of flora and fauna. The planet\'s unique position in the habitable zone of our solar system, along with its magnetic field and stable rotation, creates a relatively mild environment compared to other planets, with an average global temperature of about 15°C (59°F). This delicate balance of conditions allows Earth to flourish with life, making it a remarkable oasis in the vast expanse of space.',
      photo: '📷PIA25778: PREFIRE Satellite Illustration - 2023',
      link: 'https://photojournal.jpl.nasa.gov/targetFamily/Earth'
    },
    Moon: {
      image: moonImage,
      temperature: '15°C / 59°F🌙 - 🧥',
      info: 'Third planet from the Sun and the only known to harbor life.',
      description: "Earth's only natural satellite, the Moon, has been a source of fascination and wonder for millennia. Orbiting our planet at an average distance of about 384,400 kilometers, it is the fifth-largest moon in the Solar System. The Moon's surface is marked by vast plains, or \"seas\" (known as \"maria\"), and rugged highlands, with numerous impact craters dotting its landscape, a testament to its violent past. The Moon lacks a significant atmosphere, which means it cannot support life as we know it. This absence of atmosphere also results in extreme temperature variations. During the lunar day, temperatures can soar to 127°C (260°F), while at night they can plummet to a freezing -173°C (-280°F). Furthermore, the Moon's weak atmosphere means it doesn't have any protection against cosmic radiation or meteoroid impacts. The Moon's gravitational influence on Earth results in tides, and its various phases, from new moon to full moon, have cultural and scientific significance for many civilizations throughout history. Despite its close proximity, the Moon's harsh environment presents challenges for human habitation, but it remains a primary target for future space exploration and potential colonization.",
      photo: '📷PIA23209: The Moon\'s Mare Frigoris - 2019',
      link: 'https://photojournal.jpl.nasa.gov/targetFamily/moon'
    },
    Mars: {
      image: marsImage,
      temperature: '-63°C / -81°F❄️ - 🧣',
      info: 'Fourth planet from the Sun.',
      description: 'Often referred to as the "Red Planet" because of its rusty-red appearance, Mars is the fourth planet from the Sun. It has captured human imagination for centuries as a potential destination for colonization, especially due to its similarities with Earth. Mars has distinct polar ice caps made of water and carbon dioxide, vast valleys, and the largest volcano in the solar system, Olympus Mons.The atmosphere of Mars is thin, composed mainly of carbon dioxide, with traces of nitrogen and argon. This atmosphere cannot support human life without assistance, as it lacks oxygen and is much thinner than Earth\'s atmosphere. The average temperature on Mars is a frigid -63°C (-81°F), but can vary greatly with location and time of day. Dust storms, sometimes planet-wide, can envelop Mars, lasting for days or even months. Despite its barren appearance, there are signs of ancient river valleys and polar ice, suggesting that water once flowed on its surface. Recent discoveries of briny liquid water and the potential presence of microbial life make Mars a primary target for future space exploration, in the quest to find extraterrestrial life.',
      photo: '📷PIA26072: Perseverance Makes Tracks in Boulder Field',
      link: 'https://photojournal.jpl.nasa.gov/targetFamily/Mars'
    },
    Jupiter: {
      image: jupiterImage,
      temperature: '-145°C / -234°F❄️ - 💀',
      info: 'Largest planet in the Solar System.',
      description: 'The largest planet in our Solar System, Jupiter is a gas giant often referred to as the "King of Planets." Its massive presence, with more than twice the combined mass of all other planets in the Solar System, plays a crucial role in shaping the orbital patterns of objects nearby. Jupiter boasts a thick atmosphere primarily composed of hydrogen and helium. Its iconic Great Red Spot, a massive storm larger than Earth, has been raging for centuries, showcasing the planet\'s turbulent and dynamic atmosphere. Beneath this stormy facade, the planet is believed to harbor a vast ocean of metallic hydrogen, which gives it the strongest magnetic field among the solar planets. Jupiter\'s environment is extremely hostile. With crushing pressures, intense radiation, and temperatures that plunge to frigid depths in its upper clouds, it\'s an environment that would be inhospitable to life as we know it. The planet also has a thin ring system and numerous moons, with Ganymede being the largest moon in the Solar System.',
      photo: '📷PIA25726: A Portrait of Planet and Moon: NASA\'s Juno Mission Captures Jupiter and Io Together - 2023',
      link: 'https://photojournal.jpl.nasa.gov/targetFamily/Jupiter'
    },
    Saturn: {
      image: saturnImage,
      temperature: '-178°C / -288°F❄️ - 💀',
      info: 'Sixth planet from the Sun.',
      description: 'The sixth planet from the Sun, Saturn is best known for its stunning ring system, composed of countless icy particles and rocks that orbit the planet. These rings are believed to be remnants of destroyed comets, asteroids, or even moons that broke apart before they could reach the planet. Saturn is a gas giant, primarily made up of hydrogen and helium, and lacks a true solid surface. Instead, it possesses a core of rock and metal surrounded by thick layers of metallic and molecular hydrogen. Saturn\'s atmosphere is characterized by strong winds, sometimes reaching 1,800 kilometers per hour at its equator, and massive storms. The planet\'s iconic hexagonal storm at its north pole remains a mystery to scientists. With an average temperature of about -178°C (-288°F), the environment on Saturn is extremely cold and hostile. The immense pressure and lack of a solid surface mean that human exploration of Saturn itself is currently beyond our reach. Instead, our knowledge of this beautiful planet comes from robotic missions and advanced telescopes, which continue to uncover the many secrets Saturn holds.',
      photo: '📷PIA23170: Infrared Eye Yields New Spectral Map - 2019',
      link: 'https://photojournal.jpl.nasa.gov/targetFamily/Saturn'
    },
    Uranus: {
      image: uranusImage,
      temperature: '-224°C / -371°F❄️ - 💀',
      info: 'Seventh planet from the Sun.',
      description: "Positioned as the seventh planet from the Sun, Uranus is known for its distinct blue-green color, a result of methane in its atmosphere absorbing red light. Unlike any other planet in our solar system, Uranus has a unique tilt, with its axis inclined at an angle of about 98 degrees, causing it to essentially orbit the Sun on its side. This peculiar orientation leads to extreme seasonal variations, where some regions experience 42 years of continuous sunlight followed by 42 years of darkness. The atmosphere of Uranus is mainly composed of hydrogen, helium, and methane, with traces of water and ammonia. Beneath this gaseous exterior, Uranus is believed to have an icy mantle, surrounding its rock and metal core. With temperatures dropping to -224°C (-371°F), it is one of the coldest planets in the solar system. Due to its harsh and frigid environment, combined with high pressures and powerful winds reaching speeds up to 900 km/h (560 mph), Uranus is not a candidate for human habitation. Its mysterious, cloud-covered atmosphere and the potential presence of an ocean beneath its clouds, however, make it a fascinating subject of study for astronomers and planetary scientists.",
      photo: '📷PIA02963: Hubble Finds Many Bright Clouds on Uranus - 2000',
      link: 'https://photojournal.jpl.nasa.gov/targetFamily/Uranus'
    },
    Neptune: {
      image: neptuneImage,
      temperature: '-214°C / -353°F❄️ - 💀',
      info: 'Eighth planet from the Sun.',
      description: "The eighth and farthest known planet from the Sun, Neptune is often dubbed the \"Blue Giant\" due to its deep azure hue. As one of the Solar System's four gas giants, Neptune is primarily composed of hydrogen and helium, with trace amounts of methane that give the planet its distinct blue color. Its atmosphere is marked by strong winds, some of the fastest in the solar system, with speeds reaching up to 2,100 kilometers per hour (1,304 miles per hour). These winds whip around the planet, forming massive storm systems and dark spots, similar to Jupiter's Great Red Spot but more transient in nature. Beneath its gaseous outer layer, Neptune may have an \"icy\" mantle made up of water, ammonia, and methane. The extreme pressures within this layer might give rise to oceans of liquid diamond with solid diamond icebergs. As for its environment, Neptune's average temperature hovers around a frigid -214°C (-353°F), making it one of the coldest planets in our Solar System. Its hostile atmosphere, combined with intense pressures and extreme temperatures, renders Neptune an inhospitable realm for human exploration or habitation.",
      photo: 'PIA02245: Neptune\'s Blue-green Atmosphere - 2000',
      link: 'https://photojournal.jpl.nasa.gov/targetFamily/Neptune'
    }
  };

  const allSounds = Object.values(planetData).map(data => data.sound).filter(Boolean);

  const playSound = (sound) => {
    const audioObj = new Audio(sound);
    setAudio(audioObj);
    audioObj.play();
  };

  const stopSound = () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;  // 將音效重置到開始位置
      setAudio(null);
    }
  };
  
  const handlePlanetClick = (planet) => {
    setSelectedPlanet(planet);
  };

  const handleCloseModal = () => {
    setSelectedPlanet(null);
  };  
  

  return (
    <div className="">
      {selectedPlanet && (
        <div className="modal-overlay">
          <div className="modal-content">
            <img src={planetData[selectedPlanet].image} alt={selectedPlanet} className="planet-image"/>
            <p className='planet'>{selectedPlanet}</p>
            <p className='temp'>{planetData[selectedPlanet].temperature}</p>
            <p className='info'>{planetData[selectedPlanet].info}</p>
            <p className='desc'>{planetData[selectedPlanet].description}</p>
            <a href="https://photojournal.jpl.nasa.gov/target/Sun"><p className='photo'>{planetData[selectedPlanet].photo}</p></a>
            <button className="modal-close" onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
      <div className="fixed-footer">
        WA automation@Taichung NASA Hackathon 2023
      </div>
      {stars.map(star => (
        <div
          key={star.id}
          className="star"
          style={{ top: star.top, left: star.left, animationDelay: star.animationDelay }}
        ></div>
      ))}
      <button className="sun" onClick={() => handlePlanetClick("Sun")} ></button>
      <button className="mercury" onClick={() => handlePlanetClick("Mercury")}></button>
      <button className="venus" onClick={() => handlePlanetClick("Venus")}></button>
      <button className="earth" onClick={() => handlePlanetClick("Earth")}></button>
      <button className="moon" onClick={() => handlePlanetClick("Moon")}></button>
      <button className="mars" onClick={() => handlePlanetClick("Mars")}></button>
      <div className="asteroid-belt">
        {Array.from({ length: 350 }).map((_, index) => (
          <div 
            key={index} 
            className="asteroid"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 5}s`,
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`
            }}
          ></div>
        ))}
      </div>
      <button className="jupiter" onClick={() => handlePlanetClick("Jupiter")}></button>
      <button className="saturn" onClick={() => handlePlanetClick("Saturn")}></button>
      <button className="uranus" onClick={() => handlePlanetClick("Uranus")}></button>
      <button className="neptune" onClick={() => handlePlanetClick("Neptune")}></button>
    </div>
  );
}

export default App;
