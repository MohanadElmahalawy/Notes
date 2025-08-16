import { Route, Routes } from "react-router";
import HomePage from "../../Frontend2/src/pages/homePage";
import CreatePage from "../../Frontend2/src/pages/createPage";
import NoteDetailPage from "../../Frontend2/src/pages/noteDetailPage";
import daisyui from "daisyui";

const App = () => {
  return (
    <div data-theme="forest">
      <button className="btn-">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
