import { BioProvider } from "./components/hooks/ContextAPI";
import { About } from "./components/hooks/ContextAPI/About";
import { Home } from "./components/hooks/ContextAPI/home";

export const App = () => {
  return (
    <BioProvider>
      <Home />
      <About />
    </BioProvider>
  );
};
