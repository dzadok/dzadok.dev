import Blog from "./Blog";
import Header from "./Header";
import ThemeProvider from "./ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <main>
        <Blog />
      </main>
    </ThemeProvider>
  );
}
