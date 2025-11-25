import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Index from './pages/Index';
import Footer from './components/Pages/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import Termsconditions from './components/Pages/Termsconditions';
import Privacypolicy from './components/Pages/Privacypolicy';
import LoremPicsum from './components/LoremPicsum/LoremPicsum';
import WordCounter from './components/WordCounter/WordCounter';
import CaseConverter from './components/CaseConverter/CaseConverter';
import EmojiTextGenerator from './components/EmojiTextGenerator/EmojiTextGenerator';
import NameGenerator from './components/Nametool/NameGenerator';
import BlogLayout from './components/blogpage/BlogLayout';
import LoremIpsumGenerator from './components/blogpage/BlogLayout';
import MetaDescriptionCreator from './components/MetaDescriptionCreator/MetaDescriptionCreator';
import TextCaseConverter from './components/WordCounter/TextCaseConverter';
import PetNameGenerator from './pages/PetNameGenerator';
import DogNameGenerator from './pages/DogNameGenerator';
import PuppyNameGenerator from './pages/PuppyNameGenerator';
import CatNameGenerator from './pages/CatNameGenerator';
import QuoteGenerator from './pages/QuoteGenerator';
import InstagramHashtagGenerator from './pages/InstagramHashtagGenerator';
import WeddingHashtagGenerator from './pages/WeddingHashtagGenerator';
import DogAgeCalculator from './pages/DogAgeCalculator';
import ChronologicalAgeCalculator from './pages/ChronologicalAgeCalculator';

export default function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
      <div className="App d-flex flex-column min-vh-100">
        <Navbar bg="white" expand="lg" className="shadow-sm" fixed="top">
          <Container>
            <Navbar.Brand
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary fw-bold fs-4"
            >
              <i className="bi bi-text-paragraph me-2"></i>
              Lorem Text Generator
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">

                {/* Home */}
                <Nav.Link
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark fw-semibold"
                >
                  <i className="bi bi-house me-1"></i> Home
                </Nav.Link>

                {/* All Tools */}
                <NavDropdown
                  title={
                    <span className="text-dark">
                      <i className="bi bi-tools me-1"></i> All Tools
                    </span>
                  }
                  id="basic-nav-dropdown"
                >

                  {/* Content Tools */}
                  <NavDropdown.Header>Content Tools</NavDropdown.Header>

                  <NavDropdown.Item
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-text-paragraph me-2"></i>
                    Lorem Ipsum Generator
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    href="/lorem-picsum"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-image me-2"></i>
                    Lorem Picsum
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    href="/metadescriptioncreator"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-card-text me-2"></i>
                    Meta Description Creator
                  </NavDropdown.Item>

                  <NavDropdown.Divider />

                  {/* Text Tools */}
                  <NavDropdown.Header>Text Tools</NavDropdown.Header>

                  <NavDropdown.Item
                    href="/word-counter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-fonts me-2"></i>
                    Word Counter
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    href="/case-converter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-text-case me-2"></i>
                    Case Converter
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    href="/textcaseconverter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-toggles me-2"></i>
                    Text Case Converter
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    href="/emoji-text-generator"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-emoji-smile me-2"></i>
                    Emoji Text Generator
                  </NavDropdown.Item>

                  <NavDropdown.Divider />

                  {/* Name Tools */}
                  <NavDropdown.Header>Name Tools</NavDropdown.Header>

                  <NavDropdown.Item
                    href="/name-generator"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-person-badge me-2"></i>
                    Name Generator
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    href="/pet-name-generator"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-heart me-2"></i>
                    Pet Name Generator
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    href="/dog-name-generator"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-emoji-smile me-2"></i>
                    Dog Name Generator
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    href="/puppy-name-generator"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-emoji-smile-upside-down me-2"></i>
                    Puppy Name Generator
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    href="/cat-name-generator"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-emoji-smile me-2"></i>
                    Cat Name Generator
                  </NavDropdown.Item>

                  <NavDropdown.Divider />

                  {/* Social Media Tools */}
                  <NavDropdown.Header>Social Media Tools</NavDropdown.Header>

                  <NavDropdown.Item
                    href="/quote-generator"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-chat-square-quote me-2"></i>
                    Quote Generator
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    href="/instagram-hashtag-generator"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-hash me-2"></i>
                    Instagram Hashtag Generator
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    href="/wedding-hashtag-generator"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-stars me-2"></i>
                    Wedding Hashtag Generator
                  </NavDropdown.Item>
                </NavDropdown>

                {/* About */}
                <Nav.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark"
                >
                  <i className="bi bi-info-circle me-1"></i> About
                </Nav.Link>

                {/* Contact */}
                <Nav.Link
                  href="/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark"
                >
                  <i className="bi bi-envelope me-1"></i> Contact
                </Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Body */}
        <main className="flex-grow-1" style={{ paddingTop: '76px' }}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/lorem-picsum" element={<LoremPicsum />} />
            <Route path="/loremipsumgenerator" element={<LoremIpsumGenerator />} />
            <Route path="/metadescriptioncreator" element={<MetaDescriptionCreator />} />
            <Route path="/textcaseconverter" element={<TextCaseConverter />} />

            {/* Tools */}
            <Route path="/name-generator" element={<NameGenerator />} />
            <Route path="/word-counter" element={<WordCounter />} />
            <Route path="/case-converter" element={<CaseConverter />} />
            <Route path="/emoji-text-generator" element={<EmojiTextGenerator />} />
            <Route path="/pet-name-generator" element={<PetNameGenerator />} />
            <Route path="/puppy-name-generator" element={<PuppyNameGenerator />} />
            <Route path="/dog-name-generator" element={<DogNameGenerator />} />
            <Route path="/cat-name-generator" element={<CatNameGenerator />} />
            <Route path="/quote-generator" element={<QuoteGenerator />} />
            <Route path="/instagram-hashtag-generator" element={<InstagramHashtagGenerator />} />
            <Route path="/wedding-hashtag-generator" element={<WeddingHashtagGenerator />} />
            <Route path="/dog-age-calculator" element={<DogAgeCalculator />} />
            <Route path="/chronological-age-calculator" element={<ChronologicalAgeCalculator />} />

            <Route path="/termsconditions" element={<Termsconditions />} />
            <Route path="/privacypolicy" element={<Privacypolicy />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
