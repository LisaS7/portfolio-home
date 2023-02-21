# Send files to EC2

# service files for systemd
scp -i ~/.ssh/aws/portfolio-apps-key.pem \
~/node_planner/deploy_scripts/node_planner.service \
ec2-user@ec2-52-56-147-199.eu-west-2.compute.amazonaws.com:/home/ec2-user
scp -i ~/.ssh/aws/portfolio-apps-key.pem \
~/star-wars-planets/config/star-wars-planets.service \
ec2-user@ec2-52-56-147-199.eu-west-2.compute.amazonaws.com:/home/ec2-user
scp -i ~/.ssh/aws/portfolio-apps-key.pem \
~/yarn_store/config/yarn-store.service \
ec2-user@ec2-52-56-147-199.eu-west-2.compute.amazonaws.com:/home/ec2-user

# nginx.conf file
scp -i ~/.ssh/aws/portfolio-apps-key.pem \
~/portfolio-home/config/nginx.conf \
ec2-user@ec2-52-56-147-199.eu-west-2.compute.amazonaws.com:/home/ec2-user

# Server script
scp -i ~/.ssh/aws/portfolio-apps-key.pem \
~/portfolio-home/config/setup_server.sh \
ec2-user@ec2-52-56-147-199.eu-west-2.compute.amazonaws.com:/home/ec2-user/config

# .env files
scp -i ~/.ssh/aws/portfolio-apps-key.pem \
~/node_planner/.env \
ec2-user@ec2-52-56-147-199.eu-west-2.compute.amazonaws.com:/home/ec2-user/config/node-planner/app.env