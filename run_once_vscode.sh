#!/bin/bash

# VSCode hash: {{ include "~/.vscode/dotfiles/vscode-extensions.list" | sha256sum }}

cat ~/.vscode/dotfiles/extensions.list | xargs -L 1 code --force --install-extension
# ln -s ~/.vscode/dotfiles/settings.json ~/Library/Application\ Support/Code/User/settings.json
