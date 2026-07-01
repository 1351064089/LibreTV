/**
 * Vercel Web Analytics Initialization Module
 * 
 * This module initializes Vercel Web Analytics on the client side.
 * It runs on page load and automatically tracks page views and events.
 */

(function() {
  'use strict';

  /**
   * Initialize Vercel Web Analytics
   * This function is called when the DOM is ready
   */
  function initializeAnalytics() {
    try {
      // Import and inject Vercel Analytics
      // Using dynamic import for ES modules
      import('@vercel/analytics').then(({ inject }) => {
        // Call inject to initialize analytics
        inject();
      }).catch(error => {
        // Silently fail if analytics can't be loaded
        // This prevents analytics issues from breaking the app
        if (typeof console !== 'undefined' && console.debug) {
          console.debug('Vercel Analytics initialization note:', error.message);
        }
      });
    } catch (error) {
      // Fallback for environments that don't support dynamic import
      if (typeof console !== 'undefined' && console.debug) {
        console.debug('Vercel Analytics loading note:', error.message);
      }
    }
  }

  /**
   * Ensure analytics initializes after DOM is ready
   */
  if (document.readyState === 'loading') {
    // DOM is still loading, wait for it
    document.addEventListener('DOMContentLoaded', initializeAnalytics);
  } else {
    // DOM is already ready
    initializeAnalytics();
  }

  /**
   * Optional: Track page transitions for client-side routing
   * This helps track navigation events in single-page applications
   */
  if (typeof window !== 'undefined') {
    // Monitor URL changes (for client-side routing)
    let lastPath = window.location.pathname;
    
    // Listen to history state changes
    window.addEventListener('popstate', function() {
      const newPath = window.location.pathname;
      if (newPath !== lastPath) {
        lastPath = newPath;
        // Re-inject analytics for new route
        import('@vercel/analytics').then(({ inject }) => {
          inject();
        }).catch(() => {
          // Silently fail
        });
      }
    });
  }
})();
