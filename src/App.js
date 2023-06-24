import "./App.css"
import ApisAndSolutions from "./components/ApisAndSolutions"
import CodeExample from "./components/CodeExample"
import DesignedToWork from "./components/DesignedToWork"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import TrustedByApps from "./components/TrustedByApps"
import WebThreeApplications from "./components/WebThreeApplications"
import GetStartedSection from "./components/GetStartedSection"

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <TrustedByApps />
      <DesignedToWork />
      <ApisAndSolutions />
      <CodeExample />
      <WebThreeApplications />
      <GetStartedSection />
    </div>
  )
}

export default App
