import React, { useState } from 'react';
import { Card, Button, Badge, Form, Alert } from 'react-bootstrap';
import { ArrowUp, Copy, Check, Code, Square, SquareCheck } from 'lucide-react';

const GeneratedOutput = ({ items = [], title = 'Generated', htmlTag = '', className = '', maxHeight = '50vh' }) => {
  const [selected, setSelected] = useState(new Set());
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [copiedAll, setCopiedAll] = useState(false);
  const [showHtmlTags, setShowHtmlTags] = useState(!!htmlTag);
  const [selectAll, setSelectAll] = useState(false);

  // Toggle individual item selection
  const toggle = (idx) => {
    const s = new Set(selected);
    if (s.has(idx)) s.delete(idx); else s.add(idx);
    setSelected(s);
  };

  // Toggle select all
  const toggleSelectAll = () => {
    if (selectAll) {
      setSelected(new Set());
    } else {
      setSelected(new Set(items.map((_, i) => i)));
    }
    setSelectAll(!selectAll);
  };

  // Get text for copying
  const getText = () => {
    const toCopy = selected.size > 0 ? items.filter((_, i) => selected.has(i)) : items;
    if (htmlTag && showHtmlTags) {
      const cls = className ? ` class="${className}"` : '';
      return toCopy.map(t => `<${htmlTag}${cls}>${t}</${htmlTag}>`).join('\n');
    }
    return toCopy.join('\n\n');
  };

  // Copy all selected items
  const copyAll = async () => {
    try {
      const text = getText();
      await navigator.clipboard.writeText(text);
      setCopiedAll(true);
      setTimeout(() => setCopiedAll(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  // Copy individual item
  const copyItem = async (item, idx) => {
    try {
      let textToCopy = item;
      if (htmlTag && showHtmlTags) {
        const cls = className ? ` class="${className}"` : '';
        textToCopy = `<${htmlTag}${cls}>${item}</${htmlTag}>`;
      }
      await navigator.clipboard.writeText(textToCopy);
      setCopiedIndex(idx);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  // Scroll to top
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!items || items.length === 0) {
    return (
      <Card className="p-4 border-0 shadow-sm">
        <Card.Body className="text-center py-5">
          <div className="text-muted mb-3">
            <Copy size={48} className="opacity-25" />
          </div>
          <h5 className="text-muted">No Content Generated</h5>
          <p className="text-muted mb-0">Adjust your settings and generate text to see results here</p>
        </Card.Body>
      </Card>
    );
  }

  return (
    <div>
      <Card className="border-0 shadow-sm">
        <Card.Body className="p-4">
          {/* Header Section */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 gap-3">
            <div>
              <h3 className="fw-bold text-primary mb-1">{title}</h3>
              <div className="d-flex align-items-center gap-2 flex-wrap">
                <Badge bg="light" text="dark" className="fs-6">
                  {items.length} {items.length === 1 ? 'item' : 'items'}
                </Badge>
                {selected.size > 0 && (
                  <Badge bg="primary" className="fs-6">
                    {selected.size} selected
                  </Badge>
                )}
                {htmlTag && (
                  <Badge bg="outline-secondary" text="dark" className="fs-6">
                    HTML: {htmlTag}
                  </Badge>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="d-flex flex-wrap gap-2">
              {htmlTag && (
                <Button
                  size="sm"
                  variant={showHtmlTags ? "primary" : "outline-primary"}
                  onClick={() => setShowHtmlTags(s => !s)}
                  className="d-flex align-items-center gap-1"
                >
                  <Code size={16} />
                  {showHtmlTags ? 'Hide HTML' : 'Show HTML'}
                </Button>
              )}

              {items.length > 1 && (
                <Button
                  size="sm"
                  variant="outline-secondary"
                  onClick={toggleSelectAll}
                  className="d-flex align-items-center gap-1"
                >
                  {selectAll ? <SquareCheck size={16} /> : <Square size={16} />}
                  {selectAll ? 'Deselect All' : 'Select All'}
                </Button>
              )}

              <Button
                size="sm"
                variant={copiedAll ? "success" : "primary"}
                onClick={copyAll}
                className="d-flex align-items-center gap-1"
                disabled={items.length === 0}
              >
                {copiedAll ? <Check size={16} /> : <Copy size={16} />}
                {copiedAll ? 'Copied!' : 'Copy All'}
              </Button>
            </div>
          </div>

          {/* Content Area */}
          <div
            className="bg-light p-3 rounded border"
            style={{
              maxHeight: maxHeight,
              overflowY: 'auto',
              minHeight: '200px'
            }}
          >
            {items.map((item, idx) => (
              <div
                key={idx}
                className={`d-flex align-items-start p-3 mb-3 rounded ${selected.has(idx) ? 'bg-primary bg-opacity-10 border-primary' : 'bg-white'
                  }`}
              >
                {/* Checkbox */}
                <div className="me-3 mt-1">
                  <Form.Check
                    type="checkbox"
                    checked={selected.has(idx)}
                    onChange={() => toggle(idx)}
                    id={`item-${idx}`}
                  />
                </div>

                {/* Content */}
                <div className="flex-fill">
                  {htmlTag && showHtmlTags ? (
                    <div className="font-monospace">
                      <div className="text-muted small mb-1">
                        &lt;{htmlTag}{className ? ` class="${className}"` : ''}&gt;
                      </div>
                      <div className="mb-1 ps-3">{item}</div>
                      <div className="text-muted small">&lt;/{htmlTag}&gt;</div>
                    </div>
                  ) : (
                    <div className="mb-0">{item}</div>
                  )}
                </div>

                {/* Copy Button */}
                <div className="ms-3">
                  <Button
                    size="sm"
                    variant={copiedIndex === idx ? "success" : "outline-secondary"}
                    onClick={() => copyItem(item, idx)}
                    className="d-flex align-items-center gap-1"
                  >
                    {copiedIndex === idx ? <Check size={14} /> : <Copy size={14} />}
                    {copiedIndex === idx ? 'Copied' : 'Copy'}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Actions */}
          {items.length > 5 && (
            <div className="d-flex justify-content-center mt-3">
              <Button
                variant="outline-primary"
                size="sm"
                onClick={scrollTop}
                className="d-flex align-items-center gap-1"
              >
                <ArrowUp size={16} />
                Back to Top
              </Button>
            </div>
          )}
        </Card.Body>
      </Card>

      {/* Success Alert */}
      {copiedAll && (
        <Alert variant="success" className="mt-3 d-flex align-items-center">
          <Check size={20} className="me-2" />
          Successfully copied {selected.size > 0 ? selected.size : items.length} items to clipboard!
        </Alert>
      )}
    </div>
  );
};

export default GeneratedOutput;