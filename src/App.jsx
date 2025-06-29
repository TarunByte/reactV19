import {
  DarkLight,
  ThemeProvider,
} from "./components/hooks/ContextAPI/DarkLight";

export const App = () => {
  return (
    <>
      <ThemeProvider>
        <DarkLight />
      </ThemeProvider>
    </>
  );
};
