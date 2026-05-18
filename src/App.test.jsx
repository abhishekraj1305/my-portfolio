import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach } from 'vitest';

vi.mock('./data/gallery', () => ({
  getCreativeGalleryItems: () => [],
}));

import App from './App';

beforeEach(() => {
  window.history.pushState({}, '', '/');
});

test('renders portfolio landing content', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /Abhishek RajData Engineer \+ AI\/ML Automation/i })).toBeInTheDocument();
  expect(screen.getAllByText(/PySpark/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/Medallion Architecture/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/Power Platform/i).length).toBeGreaterThan(0);
});

test('renders public contact details', () => {
  window.history.pushState({}, '', '/contact');
  render(<App />);
  expect(screen.getByText(/r\.abhishek1305@gmail\.com/i)).toBeInTheDocument();
  expect(screen.getByText(/\+91 7261078212/i)).toBeInTheDocument();
  expect(screen.getByText(/linkedin\.com\/in\/abhishekraj1305/i)).toBeInTheDocument();
});

test('renders data engineering case studies on projects page', () => {
  window.history.pushState({}, '', '/projects');
  render(<App />);
  expect(screen.getByRole('heading', { name: /Medallion Architecture data pipeline using PySpark/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /End-to-end Azure batch data pipeline/i })).toBeInTheDocument();
  expect(screen.getByText(/Graph API task-data ETL/i)).toBeInTheDocument();
});

test('opens and closes the chatbot widget', async () => {
  render(<App />);
  await userEvent.click(screen.getByRole('button', { name: /Open Abhishek's AI Bot/i }));
  expect(screen.getByLabelText(/Abhishek's AI chatbot/i)).toBeInTheDocument();
  await userEvent.click(screen.getByRole('button', { name: /Close Abhishek's AI Bot/i }));
  expect(screen.queryByLabelText(/Abhishek's AI chatbot/i)).not.toBeInTheDocument();
  await userEvent.click(screen.getByRole('button', { name: /Open Abhishek's AI Bot/i }));
  expect(screen.getByLabelText(/Abhishek's AI chatbot/i)).toBeInTheDocument();
  await userEvent.keyboard('{Escape}');
  expect(screen.queryByLabelText(/Abhishek's AI chatbot/i)).not.toBeInTheDocument();
});
