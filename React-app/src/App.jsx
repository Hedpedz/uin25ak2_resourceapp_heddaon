import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Resources from "./components/Resources";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/html" replace />} />
      <Route path="/html" element={<Layout category="HTML"><Resources category="html" /></Layout>} />
      <Route path="/css" element={<Layout category="CSS"><Resources category="css" /></Layout>} />
      <Route path="/javascript" element={<Layout category="JavaScript"><Resources category="javascript" /></Layout>} />
      <Route path="/react" element={<Layout category="React"><Resources category="react" /></Layout>} />
      <Route path="/sanity" element={<Layout category="Sanity and headless-CMS"><Resources category="headless-cms" /></Layout>} />
    </Routes>
  );
}