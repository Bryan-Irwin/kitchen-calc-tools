/* ===== Shared Utilities ===== */

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function() {
      nav.classList.toggle('open');
    });
    // Close menu on link click
    nav.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        nav.classList.remove('open');
      });
    });
  }
});

// Toast notifications
function showToast(message, type) {
  type = type || 'success';
  var existing = document.querySelector('.toast');
  if (existing) existing.remove();

  var toast = document.createElement('div');
  toast.className = 'toast toast-' + type;
  toast.textContent = message;
  document.body.appendChild(toast);

  requestAnimationFrame(function() {
    toast.classList.add('show');
  });

  setTimeout(function() {
    toast.classList.remove('show');
    setTimeout(function() { toast.remove(); }, 300);
  }, 3000);
}

// Format currency
function formatCurrency(amount) {
  return '$' + parseFloat(amount).toFixed(2);
}

// Format percentage
function formatPercent(value) {
  return parseFloat(value).toFixed(1) + '%';
}

// Parse number from input (returns 0 if invalid)
function parseNum(value) {
  var n = parseFloat(value);
  return isNaN(n) ? 0 : n;
}

// localStorage helpers
function saveData(key, data) {
  try {
    localStorage.setItem('restaurantcalc_' + key, JSON.stringify(data));
    return true;
  } catch (e) {
    return false;
  }
}

function loadData(key) {
  try {
    var data = localStorage.getItem('restaurantcalc_' + key);
    return data ? JSON.parse(data) : null;
  } catch (e) {
    return null;
  }
}

function removeData(key) {
  try {
    localStorage.removeItem('restaurantcalc_' + key);
  } catch (e) {}
}

// Generate unique ID
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}

// Debounce
function debounce(fn, delay) {
  var timer;
  return function() {
    var context = this;
    var args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function() {
      fn.apply(context, args);
    }, delay);
  };
}
