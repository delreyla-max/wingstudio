// Small script for the rebuilt wingstudio.net
(function () {
  // Mobile menu (same class the original theme uses)
  var root = document.documentElement;
  document.querySelectorAll('.js-hamburger').forEach(function (el) {
    el.addEventListener('click', function () { root.classList.add('show-responsive-nav'); });
  });
  document.querySelectorAll('.js-close-responsive-nav').forEach(function (el) {
    el.addEventListener('click', function () { root.classList.remove('show-responsive-nav'); });
  });

  // Back to top
  document.querySelectorAll('.back-to-top a, .js-back-to-top').forEach(function (a) {
    a.addEventListener('click', function (e) { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); });
  });
  var fixed = document.querySelector('.back-to-top-fixed');
  if (fixed) {
    var onScroll = function () { fixed.classList.toggle('active', window.scrollY > 600); };
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  }

  // Lightbox: click a photo to see it full size
  var links = document.querySelectorAll('.lightbox-link');
  if (links.length) {
    var lb = document.createElement('div');
    lb.id = 'lb';
    lb.innerHTML = '<button class="lb-close" aria-label="Close">&times;</button><img alt=""><div class="lb-cap"></div>';
    document.body.appendChild(lb);
    var img = lb.querySelector('img'), cap = lb.querySelector('.lb-cap');
    links.forEach(function (a) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        img.src = a.getAttribute('href');
        var c = a.parentNode.querySelector('.module-caption');
        cap.textContent = c ? c.textContent.replace(/\s+/g, ' ').trim() : '';
        lb.classList.add('open');
      });
    });
    lb.addEventListener('click', function () { lb.classList.remove('open'); img.removeAttribute('src'); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') lb.click(); });
  }

  // Contact form: sends through Web3Forms (free). Put your access key in contact.html.
  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var mod = form.closest('.project-module-form');
      var btn = form.querySelector('.submit-text');
      var err = form.querySelector('.form-error');
      err.style.display = 'none';
      btn.classList.add('processing');
      fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
        .then(function (r) { return r.json(); })
        .then(function (d) {
          btn.classList.remove('processing');
          if (d.success) { mod.classList.add('sent'); }
          else { err.textContent = 'Sorry, the message did not send. Please try again.'; err.style.display = 'block'; }
        })
        .catch(function () {
          btn.classList.remove('processing');
          err.textContent = 'Sorry, the message did not send. Please try again.'; err.style.display = 'block';
        });
    });
  }
})();
