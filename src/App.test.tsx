import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { App } from './App';
import { parseMarkdown } from './utilities/markdownParser';

// Mock the parseMarkdown function
vi.mock('./utilities/markdownParser', () => ({
  parseMarkdown: vi.fn(),
}));

describe('App component', () => {
  it('renders the component', () => {
    render(<App />);
    expect(screen.getByText(/DATACAMP/i)).toBeTruthy();
    expect(screen.getByPlaceholderText(/Enter your markdown here/i)).toBeTruthy();
    expect(screen.getByRole('button', { name: /render/i })).toBeTruthy();
  });


  it('calls praseMarkdown when button click', async () => {
    render(<App />);

    const renderButton = screen.getByRole('button', { name: /render/i });

    fireEvent.click(renderButton);
    expect(parseMarkdown).toHaveBeenCalled()
  });
});