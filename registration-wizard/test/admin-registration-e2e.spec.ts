// admin-registration-e2e.spec.js
const { Page, test, expect } = require('@playwright/test');

test('Administrator Registration Wizard Flow', async ({ page }) => {
  // Navigate to the registration wizard page
  await page.goto('http://localhost:3000/register'); // Update URL if different

  // add the step to choose admin option if applicable

  // --- Step 1: key in Email address
  await expect(page.getByRole('heading', { name: /email/i })).toBeVisible();
  await page.getByPlaceholder('Enter your email').fill('admin@example.com');
  await page.getByRole('button', { name: 'Next' }).click();

  // --- Step 2: key in Password
  await expect(page.getByRole('heading', { name: /password/i })).toBeVisible();
  await page.getByPlaceholder('Enter your password').fill('AdminSecurePass!123');
  await page.getByRole('button', { name: 'Submit' }).click();

  // --- Confirmation Screen
  await expect(page.getByRole('heading', { name: /confirmation/i })).toBeVisible();
  await expect(page.getByText('admin@example.com')).toBeVisible();
  await expect(page.getByText(/Registration ID:/)).toBeVisible();
  await expect(page.getByText(/Status: Submitted/i)).toBeVisible();
});
