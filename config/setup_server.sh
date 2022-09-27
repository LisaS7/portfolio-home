#! /bin/bash

cd ~

# Update config files if they have been sent to server
# Nginx config
if [[ -f ~/nginx.conf ]] ; then 
    sudo mv ~/nginx.conf ~/etc/nginx/nginx.conf
    sudo systemctl restart nginx
else
    echo "No nginx.conf updates"
fi
# Node planner app
if [[ -f ~/node_planner.service ]] ; then 
    mv ~/node_planner.service ~/etc/systemd/system
    sudo systemctl daemon-reload
else
    echo "No node_planner.service updates"
fi


# Clone and install website
read -p "Update index website? y/n" answer
if [[ answer = y ]] ; then
    rm -rf ~/portfolio-home
    git clone https://github.com/LisaS7/portfolio-home.git
fi

# Clone in and install node app
read -p "Update node planner app? y/n" answer
if [[ answer = y ]] ; then
    rm -rf ~/node-planner
    git clone https://github.com/LisaS7/node-planner.git
    cd ~/node-planner
    npm i

    # Reload systemctl service
    sudo systemctl restart node_planner.service
    sudo systemctl enable node_planner.service

    cd ~
fi

# Checks
systemctl status node_planner.service
systemctl status nginx
