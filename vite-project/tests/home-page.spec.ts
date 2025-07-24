import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display welcome message and title', async ({ page }) => {
    await expect(page.getByText('Welcome to the game zone')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Spanish Flashcards' })).toBeVisible();
  });

  test('should display all navigation buttons', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'Study Mode' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Quiz Mode' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Stats Page' })).toBeVisible();
  });

  test('should navigate to Study Mode', async ({ page }) => {
    await page.getByRole('button', { name: 'Study Mode' }).click();
    await expect(page.getByText('Select a Category')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Animals' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Food' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Verbs' })).toBeVisible();
  });

  test('should navigate to Quiz Mode', async ({ page }) => {
    await page.getByRole('button', { name: 'Quiz Mode' }).click();
    await expect(page.getByText('Select a Category')).toBeVisible();
  });

  test('should navigate to Stats Page', async ({ page }) => {
    await page.getByRole('button', { name: 'Stats Page' }).click();
    await expect(page.getByText('Stats Page (Placeholder)')).toBeVisible();
  });
}); 