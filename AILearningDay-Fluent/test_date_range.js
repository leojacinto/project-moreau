// Test script for validating the date range functionality
// Test 1: Basic functionality (no parameters) - should default to current week
console.log("Testing basic API call...");
fetch('/api/x_snc_ai_learnin_4/public_agenda/view')
  .then(response => response.text())
  .then(html => {
    console.log("✅ Basic API call successful");
    console.log("Response length:", html.length);
  })
  .catch(error => {
    console.error("❌ Basic API call failed:", error);
  });

// Test 2: Date range filtering
console.log("Testing date range API call...");
fetch('/api/x_snc_ai_learnin_4/public_agenda/view?start_date=2026-04-01&end_date=2026-04-10')
  .then(response => response.text())
  .then(html => {
    console.log("✅ Date range API call successful");
    console.log("Response length:", html.length);
    // Check if the HTML contains expected elements
    if (html.includes('startDateFilter') && html.includes('endDateFilter')) {
      console.log("✅ Date range inputs are present in HTML");
    } else {
      console.log("❌ Date range inputs missing from HTML");
    }
  })
  .catch(error => {
    console.error("❌ Date range API call failed:", error);
  });