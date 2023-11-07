import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LayoutPage from "../pages/LayoutPage";

const PostsPage = lazy(() => import("../pages/PostsPage"));
const PostPageDetail = lazy(() => import("../pages/PostPageDetail"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

const AppRoutes = () => (
  <>
    <Suspense fallback={<div>Loading</div>}>
      <Routes>
        <Route element={<LayoutPage />}>
          <Route path="/" element={<PostsPage />} />
          <Route path="/detail/:id" element={<PostPageDetail />} />
          <Route element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  </>
);

export default AppRoutes;
