// import HorizontalAccordian from './components/HorizontalAccordian/HorizontalAccordian';
import './App.scss'
import SplitLanding from './components/SplitLanding/SplitLanding'
import SplitLandingPartitions from './components/SplitLanding/SplitLandingPartitions'
import NationalParksMap from './components/LeafletMap/NationalParksMap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <NationalParksMap /> */}
        <SplitLanding>
          <SplitLandingPartitions
            classes={['overlay--blue']}
            backgroundData={{
              src: './assets/images/homeOffice.webp',
              color: 'red',
            }}
          >
            <h2>
              <span>Do You Prefer</span>
              <br />
              Working At Home
            </h2>
            <button className="btn__outlined">View the Perks!</button>
          </SplitLandingPartitions>
          <SplitLandingPartitions
            classes={['overlay--purple']}
            backgroundData={{ src: './assets/images/office.webp' }}
          >
            <h2>
              <span>Do You Prefer</span>
              <br />
              Working In An Office
            </h2>
            <button className="btn__outlined">View the Perks!</button>
          </SplitLandingPartitions>
        </SplitLanding>
        {/* <ProgressSteps steps={[
          'First',
          'Second',
          'Third',
          'Forth',
        ]} /> */}
        {/* <HorizontalAccordian data={[
          {'title': 'The Mountains', 'tag':'sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', 'imageAsBG':'one.webp', 'icon':'landscape.svg'},
          {'title': 'Mighty Stream', 'tag':'quis nostrud exercitation ullamco laboris nisi ut aliquip ex', 'imageAsBG':'three.webp', 'icon':'waves.svg'},
          {'title': 'Strong Forest', 'tag':'sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', 'imageAsBG':'four.webp', 'icon':'park.svg'},
          {'title': 'Fairy Rings', 'tag':'velit esse cillum dolore eu fugiat nulla pariatur', 'imageAsBG':'five.webp', 'icon':'ring.svg'},
          {'title': 'Rolling Fog', 'tag':'quis nostrud exercitation ullamco laboris nisi ut aliquip ex', 'imageAsBG':'six.webp', 'icon':'cloud.svg'},
        ]}/> */}
      </header>
    </div>
  )
}

export default App
