import { ModeToggle } from './components/mode-toggle';
import Content from './Content'
import Footer from './Footer'
import { ThemeProvider } from "@/components/theme-provider";
function App() {


  return (
    <>
      <div className='fixed top-8 right-5  '>
        <ThemeProvider  defaultTheme="dark" storageKey="vite-ui-theme">
          <ModeToggle></ModeToggle>
        </ThemeProvider>
      </div>
      <Content></Content>
      <Footer></Footer>
    </>
  );
}

export default App
