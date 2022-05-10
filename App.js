import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Theme from "./src/theme";
import RootNavigation from "./src/navigations/Index";
import { persistor, store } from "./src/redux/store";
import { SafeAreaView } from "react-native";
import { ThemeProvider } from "react-native-paper";
import { useEffect } from "react";

export default function App() {
  return (
    <>
      {/* Mobile Status bar config */}
      <StatusBar style="auto" />
      {/* Redux data provider */}
      <Provider store={store}>
        {/* Persist (store) data in AsyncStorage  */}
        <PersistGate loading={null} persistor={persistor}>
          {/* Default Theme overrides with our custom Theme */}
          <ThemeProvider theme={Theme}>
            {/* To provide safety wrapper to content from top notch and status bar */}
            <SafeAreaView style={{ flex: 1 }}>
              <RootNavigation />
            </SafeAreaView>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  );
}
