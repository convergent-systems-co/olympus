#!/bin/sh
# Olympus installer — https://olympus.sh
# Usage: curl -fsSL https://olympus.sh/install.sh | sh
set -e

REPO="convergent-systems-co/olympus"
INSTALL_DIR="${OLYMPUS_INSTALL_DIR:-/usr/local/bin}"

# Detect OS and architecture
OS="$(uname -s | tr '[:upper:]' '[:lower:]')"
ARCH="$(uname -m)"

case "$OS" in
  darwin) OS="darwin" ;;
  linux)  OS="linux"  ;;
  *)
    echo "Error: unsupported OS '$OS'. Download manually from https://olympus.sh/downloads" >&2
    exit 1
    ;;
esac

case "$ARCH" in
  x86_64|amd64)  ARCH="amd64" ;;
  arm64|aarch64) ARCH="arm64" ;;
  *)
    echo "Error: unsupported architecture '$ARCH'. Download manually from https://olympus.sh/downloads" >&2
    exit 1
    ;;
esac

echo "Detecting platform: ${OS}/${ARCH}"

# Fetch latest release tag
LATEST="$(curl -fsSL "https://api.github.com/repos/${REPO}/releases/latest" | grep '"tag_name"' | sed -E 's/.*"([^"]+)".*/\1/')"
if [ -z "$LATEST" ]; then
  echo "Error: could not determine latest release" >&2
  exit 1
fi

VERSION="${LATEST#v}"
FILENAME="olympus_${VERSION}_${OS}_${ARCH}.tar.gz"
URL="https://github.com/${REPO}/releases/download/${LATEST}/${FILENAME}"

echo "Downloading Olympus ${LATEST} for ${OS}/${ARCH}..."

TMPDIR="$(mktemp -d)"
trap 'rm -rf "$TMPDIR"' EXIT

curl -fsSL "$URL" -o "${TMPDIR}/${FILENAME}"

echo "Extracting..."
tar -xzf "${TMPDIR}/${FILENAME}" -C "$TMPDIR"

echo "Installing to ${INSTALL_DIR}/olympus..."
if [ -w "$INSTALL_DIR" ]; then
  mv "${TMPDIR}/olympus" "${INSTALL_DIR}/olympus"
else
  sudo mv "${TMPDIR}/olympus" "${INSTALL_DIR}/olympus"
fi

# Create oly symlink
if [ -w "$INSTALL_DIR" ]; then
  ln -sf "${INSTALL_DIR}/olympus" "${INSTALL_DIR}/oly" 2>/dev/null || true
else
  sudo ln -sf "${INSTALL_DIR}/olympus" "${INSTALL_DIR}/oly" 2>/dev/null || true
fi

echo ""
echo "✓ Olympus ${LATEST} installed to ${INSTALL_DIR}/olympus"
echo ""
echo "Get started:"
echo "  olympus configure   # set up providers"
echo "  olympus             # start Olympus"
echo ""
