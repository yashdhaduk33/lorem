import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Index from './pages/Index';
import Footer from './components/Pages/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import Termsconditions from './components/Pages/Termsconditions';
import LoremPicsum from './components/LoremPicsum/LoremPicsum';
import WordCounter from './components/WordCounter/WordCounter';
import CaseConverter from './components/CaseConverter/CaseConverter';
import EmojiTextGenerator from './components/EmojiTextGenerator/EmojiTextGenerator';
import NameGenerator from './components/Nametool/NameGenerator';
import BlogLayout from './components/blogpage/BlogLayout';
import LoremIpsumGenerator from './components/blogpage/BlogLayout';
import MetaDescriptionCreator from './components/MetaDescriptionCreator/MetaDescriptionCreator';
import TextCaseConverter from './components/WordCounter/TextCaseConverter';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App d-flex flex-column min-vh-100">
        <Navbar bg="white" expand="lg" className="shadow-sm" fixed="top">
          <Container>
            <Navbar.Brand as={Link} to="/" className="text-primary fw-bold fs-4">
              <i className="bi bi-text-paragraph me-2"></i>
              Lorem Text Generator
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/" className="text-dark fw-semibold">
                  <i className="bi bi-house me-1"></i>
                  Home
                </Nav.Link>

                {/* Text Tools Dropdown - FIXED */}
                <NavDropdown
                  title={
                    <span className="text-dark">
                      <i className="bi bi-tools me-1"></i>
                      All Tools
                    </span>
                  }
                  id="basic-nav-dropdown"
                  className="text-dark"
                >
                  <NavDropdown.Item as={Link} to="/">
                    <i className="bi bi-text-paragraph me-2"></i>
                    Lorem Ipsum Generator
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/lorem-picsum">
                    <i className="bi bi-image me-2"></i>
                    Lorem Picsum
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/name-generator">
                    <i className="bi bi-person-badge me-2"></i>
                    Name Generator
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/word-counter">
                    <i className="bi bi-fonts me-2"></i>
                    Word Counter
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/case-converter">
                    <i className="bi bi-text-case me-2"></i>
                    Case Converter
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/emoji-text-generator">
                    <i className="bi bi-emoji-smile me-2"></i>
                    Emoji Text Generator
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/LoremIpsumGenerator">
                    <i className="bi bi-emoji-smile me-2"></i>
                    Lorem Ipsum Dolor Sit
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/textcaseconverter">
                    <i className="bi bi-emoji-smile me-2"></i>
                    Text Case Converter
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/metadescriptioncreator">
                    <i className="bi bi-emoji-smile me-2"></i>
                    Meta Description Creator
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>


                <Nav.Link as={Link} to="/about" className="text-dark">
                  <i className="bi bi-info-circle me-1"></i>
                  About
                </Nav.Link>

                <Nav.Link as={Link} to="/contact" className="text-dark">
                  <i className="bi bi-envelope me-1"></i>
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Add padding to account for fixed navbar */}
        <main className="flex-grow-1" style={{ paddingTop: '76px' }}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/lorem-picsum" element={<LoremPicsum />} />
            <Route path="/loremipsumgenerator" element={<LoremIpsumGenerator />} />
            <Route path="/metadescriptioncreator" element={<MetaDescriptionCreator />} />
            <Route path="/textcaseconverter" element={<TextCaseConverter />} />

            {/* Text Tools Routes */}
            <Route path="/name-generator" element={
              <>
                <NameGenerator />
              </>
            } />
            <Route path="/word-counter" element={<WordCounter />} />
            <Route path="/case-converter" element={<CaseConverter />} />
            <Route path="/emoji-text-generator" element={<EmojiTextGenerator />} />

            <Route path="/termsconditions" element={<Termsconditions />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}