import { render, screen } from '@testing-library/react';

vi.mock('./data/gallery', () => ({
  getCreativeGalleryItems: () => [],
}));

import App from './App';

test('renders portfolio landing content', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /Abhishek RajAI\/ML Automation Engineer/i })).toBeInTheDocument();
  expect(screen.getAllByText(/Power Platform/i).length).toBeGreaterThan(0);
});
