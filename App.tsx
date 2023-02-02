import { Players } from "@screens/Players";
import { ThemeProvider } from "styled-components";
import theme from "@theme/index";
import { useFonts } from "expo-font";
import { Loading } from "@components/Loading";
import { StatusBar } from "react-native";
import { Routes } from "@routes/index";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("@assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("@assets/fonts/Roboto-Bold.ttf"),
  });
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" translucent />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
