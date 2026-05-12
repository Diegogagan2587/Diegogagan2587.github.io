Install and enable ssh if not installed and active yet on both pcs.
```sh
sudo pacman -S openssh
sudo systemctl enable --now sshd
```
Assuming your firewal is `ufw` permit ssh conections on target pc
```sh
sudo ufw allow ssh
```

Find the IP address and user of the target PC on your local network
```sh
ip addr
whoami
```

Finally acces from within your other computer to target computer via ssh
```sh
ssh yourUser@yourIp
```



