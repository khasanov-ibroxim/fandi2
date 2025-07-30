import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import {LanguageProvider} from "@/utils/lang/LangContext.jsx";

import {BrowserRouter} from "react-router-dom";
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <LanguageProvider>
          <App />
      </LanguageProvider>
  </BrowserRouter>,
)
