---
layout: default
title: Downloads
description: Download Olympus binaries for macOS, Linux, and Windows — signed, notarized, ready to run.
---

<section class="section-dark">
  <div class="section-inner">
    <div class="section-label">Downloads</div>
    <h2>Install Olympus</h2>
    <p>Choose your platform below, or use the one-liner install script.</p>

    <h3 style="margin-top:2rem;">Quick install (macOS &amp; Linux)</h3>
    <pre><code class="language-bash">curl -fsSL https://olympus.sh/install.sh | sh</code></pre>

    <h3 style="margin-top:2rem;">Homebrew</h3>
    <pre><code class="language-bash">brew install convergent-systems-co/tap/olympus</code></pre>

    <div id="downloads-container" style="margin-top:2.5rem;">
      <p style="color:#888;">Loading latest release...</p>
    </div>
  </div>
</section>

<script>
(function() {
  const owner = 'convergent-systems-co';
  const repo = 'olympus';
  const container = document.getElementById('downloads-container');

  const platforms = {
    'darwin_arm64':  { label: 'macOS (Apple Silicon)', icon: '🍎', ext: '.tar.gz' },
    'darwin_amd64':  { label: 'macOS (Intel)',         icon: '🍎', ext: '.tar.gz' },
    'linux_amd64':   { label: 'Linux (x86_64)',        icon: '🐧', ext: '.tar.gz' },
    'linux_arm64':   { label: 'Linux (ARM64)',         icon: '🐧', ext: '.tar.gz' },
    'windows_amd64': { label: 'Windows (x86_64)',      icon: '🪟', ext: '.zip'    }
  };

  fetch(`https://api.github.com/repos/${owner}/${repo}/releases/latest`)
    .then(r => r.json())
    .then(release => {
      if (!release.tag_name) {
        container.innerHTML = '<p>No releases found yet.</p>';
        return;
      }

      let html = `<h3>Latest: ${release.tag_name}</h3>`;
      html += '<div class="download-grid">';

      for (const [key, info] of Object.entries(platforms)) {
        const asset = release.assets.find(a => a.name.includes(key));
        if (!asset) continue;
        const sizeMB = (asset.size / (1024 * 1024)).toFixed(1);
        html += `
          <a class="download-card" href="${asset.browser_download_url}">
            <span class="download-icon">${info.icon}</span>
            <span class="download-label">${info.label}</span>
            <span class="download-file">${asset.name}</span>
            <span class="download-size">${sizeMB} MB</span>
          </a>`;
      }

      // Checksums
      const checksums = release.assets.find(a => a.name === 'checksums.txt');
      if (checksums) {
        html += `
          <a class="download-card download-card-secondary" href="${checksums.browser_download_url}">
            <span class="download-icon">🔒</span>
            <span class="download-label">Checksums</span>
            <span class="download-file">checksums.txt (SHA-256)</span>
          </a>`;
      }

      html += '</div>';
      html += `<p style="margin-top:1.5rem;color:#888;font-size:0.9rem;">
        All macOS binaries are code-signed and Apple-notarized.
        <a href="https://github.com/${owner}/${repo}/releases" style="color:#88C0D0;">View all releases →</a>
      </p>`;

      container.innerHTML = html;
    })
    .catch(() => {
      container.innerHTML = '<p>Could not load releases. <a href="https://github.com/convergent-systems-co/olympus/releases" style="color:#88C0D0;">View on GitHub →</a></p>';
    });
})();
</script>
