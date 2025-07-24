import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should maintain state when navigating back and forth', async ({ page }) => {
    // Navigate to Study Mode
    await page.getByRole('button', { name: 'Study Mode' }).click();
    await expect(page.getByText('Select a Category')).toBeVisible();
    
    // Go back to home
    await page.goBack();
    await expect(page.getByText('Welcome to the game zone')).toBeVisible();
    
    // Go forward to Study Mode
    await page.goForward();
    await expect(page.getByText('Select a Category')).toBeVisible();
  });

  test('should handle direct URL access to study category', async ({ page }) => {
    await page.goto('/study/animals');
    await expect(page.getByText('Study Mode: Animals')).toBeVisible();
    await expect(page.getByText('Card 1 of 3')).toBeVisible();
  });

  test('should handle direct URL access to quiz category', async ({ page }) => {
    await page.goto('/quiz/animals');
    await expect(page.getByText('Select a Category')).toBeVisible();
  });

  test('should handle direct URL access to stats page', async ({ page }) => {
    await page.goto('/stats');
    await expect(page.getByText('Stats Page (Placeholder)')).toBeVisible();
  });

  test('should handle invalid routes gracefully', async ({ page }) => {
    await page.goto('/invalid-route');
    // Should show home page for invalid routes
    await expect(page.getByText('Welcome to the game zone')).toBeVisible();
  });

  test('should maintain flashcard state during navigation', async ({ page }) => {
    // Start study session
    await page.getByRole('button', { name: 'Study Mode' }).click();
    await page.getByRole('button', { name: 'Animals' }).click();
    
    // Flip first card
    await page.getByTestId('flashcard-content').click();
    await expect(page.getByTestId('flashcard-content')).toContainText('the cat');
    
    // Navigate away and back
    await page.getByRole('button', { name: 'Back to Home' }).click();
    await page.getByRole('button', { name: 'Study Mode' }).click();
    await page.getByRole('button', { name: 'Animals' }).click();
    
    // Should start fresh (not flipped)
    await expect(page.getByTestId('flashcard-content')).toContainText('el gato');
  });
}); 