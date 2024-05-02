import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ModalProvider, ThemeProvider } from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
    <ThemeProvider>
        <ModalProvider>
            <App />
        </ModalProvider>
    </ThemeProvider>
);
