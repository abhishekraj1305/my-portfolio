import { render, screen } from '@testing-library/react';

jest.mock('./data/creativeGallery', () => ({
  getCreativeGalleryItems: () => [],
}));

import App from './App';

test('renders portfolio landing content', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /Abhishek Raj AI\/ML Automation Engineer/i })).toBeInTheDocument();
  expect(screen.getAllByText(/Power Platform/i).length).toBeGreaterThan(0);
});
