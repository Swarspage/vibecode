import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import DesignPromptsPage from "./pages/DesignPromptsPage";
import DesignPromptDetailPage from "./pages/DesignPromptDetailPage";
import WorkflowPromptsPage from "./pages/WorkflowPromptsPage";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/design-prompts" element={<DesignPromptsPage />} />
        <Route path="/design-prompts/:slug" element={<DesignPromptDetailPage />} />
        <Route path="/workflow-prompts" element={<WorkflowPromptsPage />} />
      </Route>
    </Routes>
  );
};

export default App;
