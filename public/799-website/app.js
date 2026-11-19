// Shared behavior for the $799 website pages. No dependencies.
(function () {
  var C = window.WL_CONFIG || {};
  var KEY = 'wl_lead';
  var memory = {};

  function load() {
    try {
      var raw = sessionStorage.getItem(KEY);
      return raw ? JSON.parse(raw) : memory;
    } catch (e) {
      return memory;
    }
  }

  function save(obj) {
    memory = obj;
    try { sessionStorage.setItem(KEY, JSON.stringify(obj)); } catch (e) {}
    return obj;
  }

  function merge(extra) {
    var cur = load();
    var out = {};
    var k;
    for (k in cur) { if (Object.prototype.hasOwnProperty.call(cur, k)) out[k] = cur[k]; }
    for (k in extra) { if (Object.prototype.hasOwnProperty.call(extra, k)) out[k] = extra[k]; }
    return save(out);
  }

  // Sends everything known about the lead to GoHighLevel, tagged with a step:
  // "lead", "details", "lead_manager" or "video".
  // Resolves true only when the server confirms it forwarded the lead.
  function send(step, extra) {
    var data = merge(extra || {});
    var body = { step: step };
    for (var k in data) {
      if (Object.prototype.hasOwnProperty.call(data, k) && data[k] != null) body[k] = String(data[k]);
    }
    return fetch('/api/website-signup', {
      method: 'POST',
      keepalive: true,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    }).then(function (res) { return res.ok; }).catch(function () { return false; });
  }

  function track(name) {
    if (window.fbq) { try { window.fbq('track', name); } catch (e) {} }
  }

  // Meta Pixel, only when an ID is configured.
  if (C.metaPixelId) {
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
      n.queue = []; t = b.createElement(e); t.async = !0;
      t.src = v; s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    window.fbq('init', C.metaPixelId);
    window.fbq('track', 'PageView');
  }

  // Remember which ad brought the visitor.
  try {
    var q = new URLSearchParams(location.search);
    var keep = {};
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'fbclid'].forEach(function (name) {
      if (q.get(name)) keep[name] = q.get(name);
    });
    if (Object.keys(keep).length) merge(keep);
  } catch (e) {}

  // Fill in or hide contact details.
  document.addEventListener('DOMContentLoaded', function () {
    var parts = [];
    if (C.phone) parts.push('<a href="tel:' + C.phone.replace(/[^0-9+]/g, '') + '">' + C.phone + '</a>');
    if (C.email) parts.push('<a href="mailto:' + C.email + '">' + C.email + '</a>');
    var nodes = document.querySelectorAll('[data-wl-contact]');
    for (var i = 0; i < nodes.length; i++) {
      if (parts.length) nodes[i].innerHTML = (nodes[i].getAttribute('data-wl-contact') || '') + parts.join(' or ');
      else nodes[i].hidden = true;
    }

    // "Book a call" links: shown only when a scheduling link is configured.
    var bookOk = /^https:\/\//.test(C.bookingUrl || '');
    var books = document.querySelectorAll('[data-wl-book]');
    for (var b = 0; b < books.length; b++) {
      books[b].hidden = !bookOk;
      var a = books[b].querySelector('a');
      if (bookOk && a) a.addEventListener('click', function () { track('Contact'); });
    }

    // Videos: show a thumbnail with a play button; load YouTube only on click.
    var V = C.videos || {};
    var slots = document.querySelectorAll('[data-wl-video]');
    for (var j = 0; j < slots.length; j++) {
      (function (slot) {
        var id = V[slot.getAttribute('data-wl-video')] || '';
        var wrap = slot.closest('[data-wl-video-wrap]') || slot;
        if (!/^[A-Za-z0-9_-]{6,20}$/.test(id)) { wrap.hidden = true; return; }
        var title = slot.getAttribute('data-title') || 'Play video';
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'video-play';
        btn.setAttribute('aria-label', 'Play video: ' + title);
        btn.style.backgroundImage = 'url(https://i.ytimg.com/vi/' + id + '/hqdefault.jpg)';
        btn.innerHTML = '<span aria-hidden="true"></span>';
        btn.addEventListener('click', function () {
          var f = document.createElement('iframe');
          f.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0';
          f.title = title;
          f.allow = 'autoplay; encrypted-media; picture-in-picture';
          f.allowFullscreen = true;
          slot.innerHTML = '';
          slot.appendChild(f);
          track('ViewContent');
        });
        slot.appendChild(btn);
        wrap.hidden = false;
      })(slots[j]);
    }
  });

  window.WL = { load: load, merge: merge, send: send, track: track };
})();
