import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import HomePage from '@/modules/core/pages/HomePage';
import IdeaValidatorPage from '@/modules/ideas/pages/IdeaValidatorPage';
import AnalysisPage from '@/modules/analysis/pages/AnalysisPage';
import KnowledgeCenter from '@/modules/knowledge/pages/KnowledgeCenter';
import ToolsPage from '@/modules/tools/pages/ToolsPage';
import DashboardPage from '@/modules/dashboard/pages/DashboardPage';
import NotFoundPage from '@/modules/core/pages/NotFoundPage';
import ZaptBadge from '@/components/common/ZaptBadge';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/validate" element={<IdeaValidatorPage />} />
          <Route path="/analysis/:ideaId" element={<AnalysisPage />} />
          <Route path="/knowledge" element={<KnowledgeCenter />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <ZaptBadge />
    </div>
  );
}