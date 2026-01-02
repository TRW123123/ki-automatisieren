import { test, expect } from '@playwright/test'

test.describe('Homepage SSR & SEO', () => {
  test('should render SSR content', async ({ page }) => {
    await page.goto('/')
    
    // Check that page loads without JavaScript
    await page.addInitScript(() => {
      delete (window as any).requestAnimationFrame
    })
    
    // Verify critical content is present
    await expect(page.locator('h1')).toBeVisible()
    await expect(page.locator('main')).toBeVisible()
    
    // Check German content
    await expect(page).toHaveTitle(/KI Automatisieren/)
  })

  test('should have proper hreflang', async ({ page }) => {
    await page.goto('/')
    
    // Check hreflang attributes
    const hreflangs = await page.locator('link[rel="alternate"]').all()
    expect(hreflangs.length).toBeGreaterThan(0)
    
    // Verify specific hreflang exists
    await expect(page.locator(`link[hreflang="de"]`)).toHaveCount(1)
    await expect(page.locator(`link[hreflang="x-default"]`)).toHaveCount(1)
  })

  test('should have proper meta tags', async ({ page }) => {
    await page.goto('/')
    
    // Check essential meta tags
    await expect(page.locator('meta[name="description"]')).toHaveCount(1)
    await expect(page.locator('meta[property="og:title"]')).toHaveCount(1)
    await expect(page.locator('meta[property="og:description"]')).toHaveCount(1)
    await expect(page.locator('meta[name="twitter:card"]')).toHaveCount(1)
  })

  test('keyboard navigation works', async ({ page }) => {
    await page.goto('/')
    
    // Test skip link
    await page.keyboard.press('Tab')
    await expect(page.locator('.skip-link')).toBeFocused()
    
    // Test main content focus
    await page.keyboard.press('Enter')
    await expect(page.locator('#main-content')).toBeFocused()
  })

  test('navigation menu accessibility', async ({ page }) => {
    await page.goto('/')
    
    const navButton = page.locator('[aria-expanded]').first()
    if (await navButton.isVisible()) {
      // Check initial state
      expect(await navButton.getAttribute('aria-expanded')).toBe('false')
      
      // Open menu
      await navButton.click()
      expect(await navButton.getAttribute('aria-expanded')).toBe('true')
      
      // Close menu
      await navButton.click()
      expect(await navButton.getAttribute('aria-expanded')).toBe('false')
    }
  })

})