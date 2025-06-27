import { BioProvider } from "./components/hooks/ContextAPI";
import { About } from "./components/hooks/ContextAPI/About";
import { Home } from "./components/hooks/ContextAPI/home";
import { Services } from "./components/hooks/ContextAPI/Services";

export const App = () => {
  return (
    <>
      <BioProvider>
        <Home />
        <About />
        <Services />
      </BioProvider>
    </>
  );
};
