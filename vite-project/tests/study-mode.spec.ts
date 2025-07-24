import { test, expect } from '@playwright/test';

test.describe('Study Mode', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Study Mode' }).click();
  });

  test('should display category selection page', async ({ page }) => {
    await expect(page.getByText('Select a Category')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Animals' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Food' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Verbs' })).toBeVisible();
  });

  test.describe('Animals Category', () => {
    test.beforeEach(async ({ page }) => {
      await page.getByRole('button', { name: 'Animals' }).click();
    });

    test('should display study mode with animals category', async ({ page }) => {
      await expect(page.getByText('Study Mode: Animals')).toBeVisible();
      await expect(page.getByText('Card 1 of 3')).toBeVisible();
      await expect(page.getByTestId('flashcard-content')).toBeVisible();
      await expect(page.getByText('Click the card to see the translation')).toBeVisible();
    });

    test('should flip card to show English translation', async ({ page }) => {
      const flashcard = page.getByTestId('flashcard-content');
      await expect(flashcard).toContainText('el gato');
      
      await flashcard.click();
      await expect(flashcard).toContainText('the cat');
      await expect(page.getByRole('button', { name: '✅ Right' })).toBeVisible();
      await expect(page.getByRole('button', { name: '❌ Wrong' })).toBeVisible();
    });

    test('should show "Great job" when all cards are marked right', async ({ page }) => {
      // First card
      await page.getByTestId('flashcard-content').click();
      await page.getByRole('button', { name: '✅ Right' }).click();
      
      // Second card
      await page.getByTestId('flashcard-content').click();
      await page.getByRole('button', { name: '✅ Right' }).click();
      
      // Third card
      await page.getByTestId('flashcard-content').click();
      await page.getByRole('button', { name: '✅ Right' }).click();
      
      await expect(page.getByText('Study Session Complete!')).toBeVisible();
      await expect(page.getByText(/Great job! You got all 3 cards right!/)).toBeVisible();
    });

    test('should show results when some cards are marked wrong', async ({ page }) => {
      // First card - wrong
      await page.getByTestId('flashcard-content').click();
      await page.getByRole('button', { name: '❌ Wrong' }).click();
      
      // Second card - right
      await page.getByTestId('flashcard-content').click();
      await page.getByRole('button', { name: '✅ Right' }).click();
      
      // Third card - right
      await page.getByTestId('flashcard-content').click();
      await page.getByRole('button', { name: '✅ Right' }).click();
      
      await expect(page.getByText('Study Session Complete!')).toBeVisible();
      await expect(page.getByText(/Results: 2 out of 3 cards attempted are correct/)).toBeVisible();
      await expect(page.getByText(/You marked 1 card\(s\) as wrong/)).toBeVisible();
    });

    test('should show skipped message when only Next is clicked', async ({ page }) => {
      // Click Next for all cards without attempting any
      await page.getByRole('button', { name: 'Next' }).click();
      await page.getByRole('button', { name: 'Next' }).click();
      await page.getByRole('button', { name: 'Next' }).click();
      
      await expect(page.getByText('Study Session Complete!')).toBeVisible();
      await expect(page.getByText(/You skipped through all cards without attempting any/)).toBeVisible();
    });

    test('should navigate back to home from completion screen', async ({ page }) => {
      // Complete a study session
      await page.getByTestId('flashcard-content').click();
      await page.getByRole('button', { name: '✅ Right' }).click();
      await page.getByTestId('flashcard-content').click();
      await page.getByRole('button', { name: '✅ Right' }).click();
      await page.getByTestId('flashcard-content').click();
      await page.getByRole('button', { name: '✅ Right' }).click();
      
      // Click back to home
      await page.getByRole('button', { name: 'Back to Home' }).click();
      await expect(page.getByText('Welcome to the game zone')).toBeVisible();
    });
  });

  test.describe('Food Category', () => {
    test.beforeEach(async ({ page }) => {
      await page.getByRole('button', { name: 'Food' }).click();
    });

    test('should display study mode with food category', async ({ page }) => {
      await expect(page.getByText('Study Mode: Food')).toBeVisible();
      await expect(page.getByText('Card 1 of 3')).toBeVisible();
    });

    test('should show food-related flashcards', async ({ page }) => {
      const flashcard = page.getByTestId('flashcard-content');
      await expect(flashcard).toContainText('la manzana');
      
      await flashcard.click();
      await expect(flashcard).toContainText('the apple');
    });
  });

  test.describe('Verbs Category', () => {
    test.beforeEach(async ({ page }) => {
      await page.getByRole('button', { name: 'Verbs' }).click();
    });

    test('should display study mode with verbs category', async ({ page }) => {
      await expect(page.getByText('Study Mode: Verbs')).toBeVisible();
      await expect(page.getByText('Card 1 of 3')).toBeVisible();
    });

    test('should show verb-related flashcards', async ({ page }) => {
      const flashcard = page.getByTestId('flashcard-content');
      await expect(flashcard).toContainText('comer');
      
      await flashcard.click();
      await expect(flashcard).toContainText('to eat');
    });
  });
}); 