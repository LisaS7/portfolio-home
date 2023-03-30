#! /bin/bash

cd ~

# Update config files if they have been sent to server
# Nginx config
if [[ -f ~/nginx.conf ]] ; then 
    sudo mv ~/nginx.conf /etc/nginx/nginx.conf
    sudo systemctl restart nginx
    sudo systemctl enable nginx.service
    echo "nginx.conf: updated"
else
    echo "nginx.conf: no updates"
fi

echo "systemd service file updates:"
# Node planner app
if [[ -f ~/node_planner.service ]] ; then 
    sudo mv ~/node_planner.service /etc/systemd/system
    echo "    node_planner: updated"
else
    echo "    node_planner: no updates"
fi

# Star wars planets app
if [[ -f ~/star-wars-planets.service ]] ; then 
    sudo mv ~/star-wars-planets.service /etc/systemd/system

    echo "    star-wars-planets: updated"
else
    echo "    star-wars-planets: no updates"
fi

# Yarn store app
if [[ -f ~/yarn-store.service ]] ; then 
    sudo mv ~/yarn-store.service /etc/systemd/system

    echo "    yarn-store: updated"
else
    echo "    yarn-store: no updates"
fi

sudo systemctl daemon-reload


# Clone and install main website
read -p "Update index website? y/n: " answer
if [[ $answer = y ]] ; then
    sudo rm -rf ~/portfolio-home
    git clone https://github.com/LisaS7/portfolio-home.git
    echo "Cloned portfolio-home from github"
fi

# Clone and install node weekly planner app
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
    echo "node planner service restarted"

    cd ~
fi

# Clone and install star wars planets app
read -p "Update star wars planets app? y/n: " answer
if [[ $answer = y ]] ; then
    rm -rf ~/star-wars-planets
    git clone https://github.com/LisaS7/star-wars-planets.git
    echo "Cloned star wars planets from github"
    cd ~/star-wars-planets

    bash setup.sh
    export FLASK_APP=~/star-wars-planets/app.py


    # Reload systemctl service
    sudo systemctl restart star-wars-planets.service
    sudo systemctl enable star-wars-planets.service
    echo "star wars planets service restarted"

    cd ~
fi

# Clone and install yarn store app
read -p "Update yarn store app? y/n: " answer
if [[ $answer = y ]] ; then
    rm -rf ~/deployed-yarn-store
    git clone git@github.com:LisaS7/deployed-yarn-store.git
    echo "Cloned yarn store from github"
    cd ~/deployed-yarn-store

    bash ./config/setup.sh
    export FLASK_APP=~/deployed-yarn-store/app.py


    # Reload systemctl service
    sudo systemctl restart yarn-store.service
    sudo systemctl enable yarn-store.service
    echo "yarn store service restarted"

    cd ~
fi

# Checks
systemctl status node_planner.service
systemctl status star-wars-planets.service
systemctl status yarn-store.service
systemctl status nginx
