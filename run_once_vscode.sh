#!/bin/bash

# VSCode hash: {{ include "~/.vscode/dotfiles/vscode-extensions.list" | sha256sum }}

cat ~/.vscode/dotfiles/vscode-extensions.list | xargs -L 1 code --install-extension
ln -s ~/.vscode/dotfiles/settings.json ~/Library/Application\ Support/Code/User/settings.json