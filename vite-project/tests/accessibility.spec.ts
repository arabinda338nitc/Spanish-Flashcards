import { test, expect } from '@playwright/test';

test.describe('Accessibility', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should support keyboard navigation', async ({ page }) => {
    // Tab through all interactive elements
    await page.keyboard.press('Tab');
    await expect(page.getByRole('button', { name: 'Study Mode' })).toBeFocused();
    
    await page.keyboard.press('Tab');
    await expect(page.getByRole('button', { name: 'Quiz Mode' })).toBeFocused();
    
    await page.keyboard.press('Tab');
    await expect(page.getByRole('button', { name: 'Stats Page' })).toBeFocused();
  });

  test('should activate buttons with Enter key', async ({ page }) => {
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');
    await expect(page.getByText('Select a Category')).toBeVisible();
  });

  test('should activate buttons with Space key', async ({ page }) => {
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Space');
    await expect(page.getByText('Stats Page')).toBeVisible();
  });

  test('should support keyboard navigation in study mode', async ({ page }) => {
    // Navigate to study mode
    await page.getByRole('button', { name: 'Study Mode' }).click();
    await page.getByRole('button', { name: 'Animals' }).click();
    
    // Click flashcard to flip it
    await page.getByTestId('flashcard-content').click();
    await expect(page.getByTestId('flashcard-content')).toContainText('the cat');
    
    // Tab to Right button and activate
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');
    await expect(page.getByText('Card 2 of 3')).toBeVisible();
  });

  test('should have proper heading structure', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Spanish Flashcards' })).toBeVisible();
    
    // Navigate to study mode
    await page.getByRole('button', { name: 'Study Mode' }).click();
    await page.getByRole('button', { name: 'Animals' }).click();
    
    await expect(page.getByRole('heading', { name: 'Study Mode: Animals' })).toBeVisible();
  });

  test('should have proper button labels', async ({ page }) => {
    // Check that all buttons have accessible names
    await expect(page.getByRole('button', { name: 'Study Mode' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Quiz Mode' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Stats Page' })).toBeVisible();
  });

  test('should maintain focus management', async ({ page }) => {
    // Navigate to study mode
    await page.getByRole('button', { name: 'Study Mode' }).click();
    await page.getByRole('button', { name: 'Animals' }).click();
    
    // Complete a study session
    await page.getByTestId('flashcard-content').click();
    await page.getByRole('button', { name: '✅ Right' }).click();
    await page.getByTestId('flashcard-content').click();
    await page.getByRole('button', { name: '✅ Right' }).click();
    await page.getByTestId('flashcard-content').click();
    await page.getByRole('button', { name: '✅ Right' }).click();
    
    // Back to Home button should be visible and clickable
    await expect(page.getByRole('button', { name: 'Back to Home' })).toBeVisible();
  });
}); 