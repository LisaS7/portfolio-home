#! /bin/bash

cd ~

# Update config files if they have been sent to server
# Nginx config
if [[ -f ~/nginx.conf ]] ; then 
    sudo mv ~/nginx.conf /etc/nginx/nginx.conf
    sudo systemctl restart nginx
    echo "Updated nginx.conf"
else
    echo "No nginx.conf updates"
fi
# Node planner app
if [[ -f ~/node_planner.service ]] ; then 
    sudo mv ~/node_planner.service /etc/systemd/system
    sudo systemctl daemon-reload
    echo "Updated node_planner.service"
else
    echo "No node_planner.service updates"
fi


# Clone and install website
read -p "Update index website? y/n: " answer
if [[ $answer = y ]] ; then
    sudo rm -rf ~/portfolio-home
    git clone https://github.com/LisaS7/portfolio-home.git
    echo "Cloned portfolio-home from github"
fi

# Clone and install node app
read -p "Update node planner app? y/n: " answer
if [[ $answer = y ]] ; then
    rm -rf ~/node-planner
    git clone https://github.com/LisaS7/node-planner.git
    echo "Cloned node-planner from github"
    cd ~/node-planner
    npm i

    # Reload systemctl service
    sudo systemctl restart node_planner.service
    sudo systemctl enable node_planner.service
    echo "Service restarted"

    cd ~
fi

# Checks
systemctl status node_planner.service
systemctl status nginx
