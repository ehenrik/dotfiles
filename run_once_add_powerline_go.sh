#!/bin/sh
goenv install latest
goenv global latest
eval "$(goenv init -)"

go install github.com/justjanne/powerline-go@latest
