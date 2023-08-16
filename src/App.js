import MyBookList from "pages/MyBookList";
import CreateBooklist from "./pages/CreateBooklist";
import useApp from "hooks/useApp";
import { SnackbarProvider } from "notistack";

export default function App() {
  const { hasBooklist,loading } = useApp();
  if (loading) return null;
  return (
    <SnackbarProvider>
      {hasBooklist ? <MyBookList /> : <CreateBooklist />}
    </SnackbarProvider>
  );
}
