# dotfiles
My dotfiles

## Required Packages

- **Pacman**
```
sudo pacman -S openbox \
networkmanager-dmenu \
terminator \
alacritty \
nitrogen \
thunar \
ranger \
dunst \
plank \
rofi \
zsh \
```

- **Yay**
```
yay -S polybar
```
- **oh-my-zsh**
```
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

- **powerlevel10k**
```
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

- **vundle**
```
git clone https://github.com/VundleVim/Vundle.vim.git "$HOME/.vim/bundle/Vundle.vim"
vim +PluginInstall +qall
```


