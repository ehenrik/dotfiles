#!/bin/sh
goenv install latest
goenv global $(goenv versions)
eval "$(goenv init -)"

go install github.com/justjanne/powerline-go@latest
