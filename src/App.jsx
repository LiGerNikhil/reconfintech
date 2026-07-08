import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import ApiPlatform from './pages/ApiPlatform'
import ApiDetail from './pages/ApiDetail'
import Contact from './pages/Contact'
import CaseStudies from './pages/CaseStudies'
import Insights from './pages/Insights'
import Careers from './pages/Careers'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Cookies from './pages/Cookies'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:slug" element={<ServiceDetail />} />
        <Route path="contact" element={<Contact />} />
        <Route path="api-platform" element={<ApiPlatform />} />
        <Route path="api-platform/:slug" element={<ApiDetail />} />
        <Route path="case-studies" element={<CaseStudies />} />
        <Route path="insights" element={<Insights />} />
        <Route path="careers" element={<Careers />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="cookies" element={<Cookies />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
