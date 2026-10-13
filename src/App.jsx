import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import GlobalSearch from "./components/GlobalSearch";

const HomePage = lazy(() => import("./pages/HomePage"));
const DesignPromptsPage = lazy(() => import("./pages/DesignPromptsPage"));
const DesignPromptDetailPage = lazy(() => import("./pages/DesignPromptDetailPage"));
const WorkflowPromptsPage = lazy(() => import("./pages/WorkflowPromptsPage"));
const WorkflowPromptDetailPage = lazy(() => import("./pages/WorkflowPromptDetailPage"));
const ImagePromptsPage = lazy(() => import("./pages/ImagePromptsPage"));
const ImagePromptDetailPage = lazy(() => import("./pages/ImagePromptDetailPage"));
const PublicApisPage = lazy(() => import("./pages/PublicApisPage"));
const MyKitPage = lazy(() => import("./pages/MyKitPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const PageFallback = () => (
  <div style={{ minHeight: "50vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
    <div
      style={{
        width: "24px",
        height: "24px",
        borderRadius: "50%",
        border: "2px solid var(--color-border)",
        borderTopColor: "var(--color-accent)",
        animation: "badgePulse 1.2s ease-in-out infinite",
      }}
    />
  </div>
);

const App = () => {
  return (
    <>
      <GlobalSearch />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />

            {/* Design Prompts: flat two-page pattern (gallery + standalone detail) */}
            <Route path="/design-prompts" element={<DesignPromptsPage />} />
            <Route path="/design-prompts/:slug" element={<DesignPromptDetailPage />} />

            {/* Workflow Prompts: docs pattern with sidebar + nested detail outlet */}
            <Route path="/workflow-prompts" element={<WorkflowPromptsPage />}>
              <Route index element={<Navigate to="exploring-new-codebase" replace />} />
              <Route path=":slug" element={<WorkflowPromptDetailPage />} />
            </Route>

            {/* Image Prompts: flat gallery pattern */}
            <Route path="/image-prompts" element={<ImagePromptsPage />} />
            <Route path="/image-prompts/:slug" element={<ImagePromptDetailPage />} />

            {/* Public APIs: directory pattern */}
            <Route path="/public-apis" element={<PublicApisPage />} />

            <Route path="/my-kit" element={<MyKitPage />} />

            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
