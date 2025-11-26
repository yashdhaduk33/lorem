import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Index from './pages/Index';
import Footer from './components/Pages/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
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
        <Navbar bg="white" expand="lg" className="shadow-sm modern-navbar" fixed="top">
          <Container>
            <Navbar.Brand
              as={Link}
              to="/"
              className="d-flex align-items-center gap-2 text-primary fw-bold fs-4"
            >
              <span className="brand-icon d-inline-flex align-items-center justify-content-center rounded-circle">
                <i className="bi bi-text-paragraph"></i>
              </span>
              <div className="text-start lh-1">
                <span>Lorem Text Generator</span>
                <small className="d-block text-muted fw-normal">Placeholder text studio</small>
              </div>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto align-items-lg-center gap-lg-2">
                <Nav.Link as={Link} to="/" className="text-dark fw-semibold">
                  <i className="bi bi-house me-1"></i> Home
                </Nav.Link>

                <NavDropdown
                  title={
                    <span className="text-dark">
                      <i className="bi bi-tools me-1"></i> Tools
                    </span>
                  }
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Header className="text-uppercase small text-muted">Content</NavDropdown.Header>

                  <NavDropdown.Item as={Link} to="/">
                    <i className="bi bi-text-paragraph me-2"></i>
                    Lorem Ipsum Generator
                  </NavDropdown.Item>

                  <NavDropdown.Item as={Link} to="/lorem-picsum">
                    <i className="bi bi-image me-2"></i>
                    Lorem Picsum
                  </NavDropdown.Item>

                  <NavDropdown.Item as={Link} to="/metadescriptioncreator">
                    <i className="bi bi-card-text me-2"></i>
                    Meta Description Creator
                  </NavDropdown.Item>

                  <NavDropdown.Divider />

                  <NavDropdown.Header className="text-uppercase small text-muted">Text</NavDropdown.Header>

                  <NavDropdown.Item as={Link} to="/word-counter">
                    <i className="bi bi-fonts me-2"></i>
                    Word Counter
                  </NavDropdown.Item>

                  <NavDropdown.Item as={Link} to="/case-converter">
                    <i className="bi bi-text-case me-2"></i>
                    Case Converter
                  </NavDropdown.Item>

                  <NavDropdown.Item as={Link} to="/text-case-converter">
                    <i className="bi bi-toggles me-2"></i>
                    Text Case Converter
                  </NavDropdown.Item>

                  <NavDropdown.Item as={Link} to="/emoji-text-generator">
                    <i className="bi bi-emoji-smile me-2"></i>
                    Emoji Text Generator
                  </NavDropdown.Item>

                  <NavDropdown.Divider />

                  <NavDropdown.Header className="text-uppercase small text-muted">Name ideas</NavDropdown.Header>

                  <NavDropdown.Item as={Link} to="/name-generator">
                    <i className="bi bi-person-badge me-2"></i>
                    Name Generator
                  </NavDropdown.Item>

                  <NavDropdown.Item as={Link} to="/pet-name-generator">
                    <i className="bi bi-heart me-2"></i>
                    Pet Name Generator
                  </NavDropdown.Item>

                  <NavDropdown.Item as={Link} to="/dog-name-generator">
                    <i className="bi bi-emoji-smile me-2"></i>
                    Dog Name Generator
                  </NavDropdown.Item>

                  <NavDropdown.Item as={Link} to="/puppy-name-generator">
                    <i className="bi bi-emoji-smile-upside-down me-2"></i>
                    Puppy Name Generator
                  </NavDropdown.Item>

                  <NavDropdown.Item as={Link} to="/cat-name-generator">
                    <i className="bi bi-emoji-smile me-2"></i>
                    Cat Name Generator
                  </NavDropdown.Item>

                  <NavDropdown.Divider />

                  <NavDropdown.Header className="text-uppercase small text-muted">Social & content</NavDropdown.Header>

                  <NavDropdown.Item as={Link} to="/quote-generator">
                    <i className="bi bi-chat-square-quote me-2"></i>
                    Quote Generator
                  </NavDropdown.Item>

                  <NavDropdown.Item as={Link} to="/instagram-hashtag-generator">
                    <i className="bi bi-hash me-2"></i>
                    Instagram Hashtag Generator
                  </NavDropdown.Item>

                  <NavDropdown.Item as={Link} to="/wedding-hashtag-generator">
                    <i className="bi bi-stars me-2"></i>
                    Wedding Hashtag Generator
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link as={Link} to="/about" className="text-dark">
                  <i className="bi bi-info-circle me-1"></i> About
                </Nav.Link>

                <Nav.Link as={Link} to="/contact" className="text-dark">
                  <i className="bi bi-envelope me-1"></i> Contact
                </Nav.Link>

                <div className="d-none d-lg-block">
                  <Button
                    as={Link}
                    to="/contact"
                    variant="primary"
                    className="nav-cta"
                  >
                    Start a Project
                  </Button>
                </div>
              </Nav>
              <div className="d-lg-none mt-3">
                <Button
                  as={Link}
                  to="/contact"
                  variant="primary"
                  className="w-100 nav-cta"
                >
                  Start a Project
                </Button>
              </div>
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
            <Route path="/text-case-converter" element={<TextCaseConverter />} />

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
