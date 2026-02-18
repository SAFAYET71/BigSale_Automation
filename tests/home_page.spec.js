// @ts-check
import { test, expect } from '@playwright/test';

test("All Home Page Elements are visible", async({page})=>{
await page.goto('/');
await expect(page.getByRole('link', { name: 'Logo' })).toBeVisible();
await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
await expect(page.getByRole('navigation').getByRole('link', { name: 'Companies' })).toBeVisible();
await expect(page.getByRole('navigation').getByRole('link', { name: 'offers' })).toBeVisible();
await expect(page.getByRole('link', { name: 'Category' })).toBeVisible();
await expect(page.getByRole('textbox', { name: 'Search...' })).toBeVisible();
await expect(page.getByRole('button', { name: 'Sign In' })).toBeVisible();
await expect(page.getByRole('heading', { name: 'Welcome to Our Website1' })).toBeVisible();
await expect(page.getByText('We provide the best services')).toBeVisible();
await expect(page.getByRole('link', { name: 'List Your Company' })).toBeVisible();
await expect(page.getByRole('link', { name: 'Explore Offers' })).toBeVisible();
await expect (page.locator('.bg-background.backdrop-blur-md.border').first()).toBeVisible();
await expect(page.getByRole('heading', { name: 'Top Categories' })).toBeVisible();
await expect(page.getByText('Explore our categories.')).toBeVisible();
await expect(page.getByText('Perfume ManufacturersAll kinds of electronic productsPrivate LabelAll kinds of')).toBeVisible();
await expect(page.getByRole('link', { name: 'Perfume Manufacturers Perfume' })).toBeVisible();
await expect(page.getByRole('heading', { name: 'Featured Companies' })).toBeVisible();
await expect(page.getByText('Our partnered companies.')).toBeVisible();
await expect(page.locator('div').filter({ hasText: 'VerifiedWatts and Nunez' }).nth(5)).toBeVisible();


})
