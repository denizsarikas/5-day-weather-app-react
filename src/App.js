import Header from "../src/components/Header"
import Main from "../src/components/Main"
import Footer from "../src/components/Footer"

// use require.context to import all background images in the assets folder
const backgroundImages = require.context('./assets', true, /\.(jpg|jpeg|png)$/);
// create an array of all image filenames
const backgroundImageFilenames = [...Array(33).keys()].map(i => `${i + 1}.jpg`);
//console.log(backgroundImageFilenames)

function App() {
  // randomly select a background image filename from the array
  const randomBackgroundImageFilename = backgroundImageFilenames[Math.floor(Math.random() * backgroundImageFilenames.length)];
  // get the selected background image using require.context
  const backgroundImage = backgroundImages(`./${randomBackgroundImageFilename}`);

  return (
      <div className="App" style={{backgroundImage: `url(${backgroundImage})`}}>
        <Header />
        <Main />
        <Footer />
      </div>

  );
}

export default App;
