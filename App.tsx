import { Groups } from "@screens/Groups";
import { ThemeProvider } from "styled-components";
import theme from "@theme/index";
import { useFonts } from "expo-font";
import { Loading } from "@components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("@assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("@assets/fonts/Roboto-Bold.ttf"),
  });
  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Groups /> : <Loading />}
    </ThemeProvider>
  );
}
