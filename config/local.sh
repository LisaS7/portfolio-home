# Send files to EC2

# node_planner service file for systemd
scp -i ~/.ssh/aws/portfolio-apps-key.pem \
/home/forest/Documents/node_planner/deploy/node_planner.service \
ec2-user@ec2-52-56-147-199.eu-west-2.compute.amazonaws.com:/home/ec2-user

# nginx.conf file
scp -i ~/.ssh/aws/portfolio-apps-key.pem \
/home/forest/Documents/portfolio_home/config/nginx.conf \
ec2-user@ec2-52-56-147-199.eu-west-2.compute.amazonaws.com:/home/ec2-user

# Server script
scp -i ~/.ssh/aws/portfolio-apps-key.pem \
/home/forest/Documents/portfolio_home/config/setup_server.sh \
ec2-user@ec2-52-56-147-199.eu-west-2.compute.amazonaws.com:/home/ec2-user/config