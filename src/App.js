// import HorizontalAccordian from './components/HorizontalAccordian/HorizontalAccordian';
import './App.scss'
import LeafletMapDisplay from './components/LeafletMap/LeafletMapDisplay'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Horizontal Image Accordian
        </a>

        <LeafletMapDisplay />

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
