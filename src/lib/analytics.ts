/**
 * Analytics helper for Apna Website - Market Testing
 *
 * Tracks user behavior to understand:
 * - Which business categories are most popular
 * - Template click patterns
 * - Form submission intent
 * - Pricing plan interest
 * - User flow and drop-off points
 */

import { logEvent } from "firebase/analytics";
import { analytics } from "./firebase";

const track = (eventName: string, params?: Record<string, string | number | boolean>) => {
  if (analytics) {
    logEvent(analytics, eventName, params);
  }
  // Log to console in both Dev and Production environments for verification
  if (params) {
    console.log(`[Analytics] ${eventName}`, params);
  } else {
    console.log(`[Analytics] ${eventName}`);
  }
};

// ─── Page Views ──────────────────────────────────────────
export const trackPageView = (pageName: string) => {
  track("page_view", { page_name: pageName });
};

// ─── Template Interactions ───────────────────────────────
export const trackTemplateClick = (
  templateId: number,
  templateName: string,
  category: string,
) => {
  track("template_select", {
    template_id: templateId,
    template_name: templateName,
    category,
  });
};

export const trackTemplatePreview = (
  templateId: number,
  templateName: string,
  category: string,
) => {
  track("template_preview", {
    template_id: templateId,
    template_name: templateName,
    category,
  });
};

export const trackCategoryFilter = (categoryName: string) => {
  track("category_filter", { category: categoryName });
};

// ─── Form / Create Flow ─────────────────────────────────
export const trackFormStart = () => {
  track("form_start");
};

export const trackFormSubmit = (businessType: string, templateName: string) => {
  track("form_submit", {
    business_type: businessType,
    template_name: templateName,
  });
};

// ─── Pricing ─────────────────────────────────────────────
export const trackPricingView = (planName: string) => {
  track("pricing_view", { plan_name: planName });
};

export const trackPricingCTA = (planName: string) => {
  track("pricing_cta_click", { plan_name: planName });
};

// ─── Get Started / CTA Clicks ────────────────────────────
export const trackGetStartedClick = (source: string) => {
  track("get_started_click", { source });
};

// ─── Blog ────────────────────────────────────────────────
export const trackBlogView = (blogId: string, blogTitle: string) => {
  track("blog_view", { blog_id: blogId, blog_title: blogTitle });
};

// ─── WhatsApp ────────────────────────────────────────────
export const trackWhatsAppClick = (context: string) => {
  track("whatsapp_click", { context });
};
