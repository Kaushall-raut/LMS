import { Auth } from "@/pages/auth";
import { Button } from "./components/ui/button";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </>
  );
};
