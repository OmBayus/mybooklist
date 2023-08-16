import React from "react";
import useApp from "hooks/useApp";
import { SnackbarProvider } from "notistack";
import LoadingScreen from "pages/LoadingScreen";

const CreateBooklist = React.lazy(() => import("pages/CreateBooklist"));
const MyBookList = React.lazy(() => import("pages/MyBookList"));

export default function App() {
  const { hasBooklist,loading } = useApp();
  if (loading) return <LoadingScreen/>;
  return (
    <SnackbarProvider>
      {hasBooklist ? <MyBookList /> : <CreateBooklist />}
    </SnackbarProvider>
  );
}
