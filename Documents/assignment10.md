# Assignment 10 - Scaling

This is the tenth weekly assignment in the Large Systems Development course. The assignment description can be found [here](https://cphbusiness.mrooms.net/mod/assign/view.php?id=52923).

## What is Docker Swarm, and why do we need it?

A docker swarm is an orchestration of multiple Docker hosts, which run in **swarm mode** and act as managers (manages membership, services, delegation, and replications) and workers(the hosts which run swarm services). The idea behind Docker Swarm is that you can change a service configuration (network, ports, environment variables, volumes) without manually retstarting the service. We need it to orchestrate multiple containers in one place without accessing all of them.

## How can it help eliminating bottlenecks?

Docker Swarm provides features such as: **load balancing** (automatic distribution of work where it's needed), **scaling** (mulitple running replica services), and **automatic service restart**. Another way to handle bottlenecks is by having failovers. In a situation with three managers and one manager goes down, the last two can operate the state of the dead manager until it is up again. Other situations where all existing workers is being overloaded, you can scale out more workers in a loaded situation and then remove them again when that load is over. This is especially nice "Pay-Per-Hour" clusters. 

## Printouts 

### *docker node ls*

![Docker Node list printout from terminal](https://github.com/KIMB0/LSD_frontend/blob/master/Documents/Docker_Node_ls.png)

### *docker service ls*
![Docker Service list printout from terminal](https://github.com/KIMB0/LSD_frontend/blob/master/Documents/Docker_Service_ls.png)
