# Dotfiles

## Setup on new computer

### Xcode command line tools

```bash
xcode-select --install
````

### Rosetta

```bash
sudo softwareupdate --install-rosetta
```

### Homebrew

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### Chezmoi

```bash
brew install chezmoi
brew install lastpass-cli
lpass login joakim@unbound.se
```

```bash
chezmoi init --apply henrikengman
```
