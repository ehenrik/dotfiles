#!/bin/bash

# VSCode hash: {{ include "~/.vscode/dotfiles/vscode-extensions.list" | sha256sum }}
# Use the following command to populate the list
code --list-extensions > /tmp/extensions.list.tmp
diff /tmp/extensions.list.tmp ~/.vscode/dotfiles/extensions.list || cat ~/.vscode/dotfiles/extensions.list | xargs -L 1 code --force --install-extension
rm /tmp/extensions.list.tmp

# ln -s ~/.vscode/dotfiles/settings.json ~/Library/Application\ Support/Code/User/settings.json
