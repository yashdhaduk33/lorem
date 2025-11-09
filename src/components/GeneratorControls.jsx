import React, { useState, useEffect } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { Plus, Minus } from 'lucide-react';

const GeneratorControls = ({ onGenerate }) => {
  const [count, setCount] = useState(4);
  const [type, setType] = useState('paragraphs');
  const [textCase, setTextCase] = useState('regular');
  const [htmlTag, setHtmlTag] = useState('');
  const [className, setClassName] = useState('');

  // Auto-generate when component mounts or when options change
  useEffect(() => {
    handleGenerate();
  }, []); // Only run once when component mounts

  const handleGenerate = () => {
    onGenerate({ type, count, textCase, htmlTag, className });
  };

  // Auto-generate when any option changes
  useEffect(() => {
    handleGenerate();
  }, [type, count, textCase, htmlTag, className]);

  return (
    <Card className="p-4 sticky-top" style={{ top: 20 }}>
      <Card.Body>
        <h5 className="fw-bold mb-4">Generate Content</h5>

        {/* Count Control */}
        <Form.Label className="fw-semibold">Number of items:</Form.Label>
        <div className="d-flex align-items-center gap-2 mb-4">
          <Button
            variant="outline-primary"
            size="sm"
            onClick={() => setCount(c => Math.max(1, c - 1))}
          >
            <Minus size={16} />
          </Button>
          <Form.Control
            type="number"
            value={count}
            onChange={(e) => setCount(Math.max(1, Math.min(100, parseInt(e.target.value) || 1)))}
            style={{ width: 80, textAlign: 'center' }}
          />
          <Button
            variant="outline-primary"
            size="sm"
            onClick={() => setCount(c => Math.min(100, c + 1))}
          >
            <Plus size={16} />
          </Button>
        </div>

        {/* Content Type */}
        <Form.Label className="fw-semibold">Content type:</Form.Label>
        <Form.Select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="mb-4"
        >
          <option value="words">Words</option>
          <option value="sentences">Sentences</option>
          <option value="paragraphs">Paragraphs</option>
          <option value="titles">Titles</option>
          <option value="captions">Captions</option>
          <option value="names">Names</option>
          <option value="realNames">Real names</option>
        </Form.Select>

        {/* Text Case Options */}
        <Form.Label className="fw-semibold">Text case:</Form.Label>
        <Form.Select
          value={textCase}
          onChange={(e) => setTextCase(e.target.value)}
          className="mb-4"
        >
          <option value="regular">Regular case</option>
          <option value="upper">UPPERCASE</option>
          <option value="lower">lowercase</option>
          <option value="title">Title Case</option>
          <option value="sentence">Sentence case</option>
        </Form.Select>

        {/* HTML Options */}
        <div className="mb-4">
          <Form.Label className="fw-semibold">HTML Options</Form.Label>
          <div className="mb-2">
            <Form.Label className="small">Wrap with HTML tag:</Form.Label>
            <Form.Control
              placeholder="e.g. div, p, span"
              value={htmlTag}
              onChange={(e) => setHtmlTag(e.target.value)}
            />
          </div>
          <div>
            <Form.Label className="small">CSS class name:</Form.Label>
            <Form.Control
              placeholder="e.g. btn btn-blue"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
            />
          </div>
        </div>

        {/* Manual Generate Button (optional) */}
        <Button
          variant="primary"
          size="lg"
          className="w-100 fw-semibold"
          onClick={handleGenerate}
        >
          Regenerate Text
        </Button>

        {/* Quick Actions */}
        <div className="mt-3">
          <small className="text-muted">
            <strong>Auto-generate:</strong> Text updates automatically when you change settings
          </small>
        </div>
      </Card.Body>
    </Card>
  );
};

export default GeneratorControls;