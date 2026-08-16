import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import DesignPromptsPage from "./pages/DesignPromptsPage";
import DesignPromptDetailPage from "./pages/DesignPromptDetailPage";
import WorkflowPromptsPage from "./pages/WorkflowPromptsPage";
import WorkflowPromptDetailPage from "./pages/WorkflowPromptDetailPage";
import { workflowPrompts } from "./data/workflowPrompts";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />

        {/* Design Prompts: flat two-page pattern (gallery + standalone detail) */}
        <Route path="/design-prompts" element={<DesignPromptsPage />} />
        <Route path="/design-prompts/:slug" element={<DesignPromptDetailPage />} />

        {/* Workflow Prompts: docs pattern with sidebar + nested detail outlet */}
        <Route path="/workflow-prompts" element={<WorkflowPromptsPage />}>
          <Route
            index
            element={<Navigate to={workflowPrompts[0].slug} replace />}
          />
          <Route path=":slug" element={<WorkflowPromptDetailPage />} />
        </Route>

      </Route>
    </Routes>
  );
};

export default App;
