# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.

Vagrant.configure("2") do |config|
    config.vm.box = "bento/ubuntu-20.04"
    config.vm.network "forwarded_port", guest: 8000, host: 8000
  
    config.vm.provision "shell", inline: <<-SHELL
      systemctl disable apt-daily.service
      systemctl disable apt-daily.timer
    
      sudo apt-get update
      sudo apt-get install -y python3-venv zip
      sudo apt-get upgrade -y
    SHELL
   end