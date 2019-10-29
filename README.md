##DevOps stack on k8s 

It 's a simple stack in kubernetes cluster deploy with form builder application

when run setup mongodb statefulset complete need to execute 

 ```
 kubectl exec mongo-0 mongo 
 >
 rs.initiate({_id: "rs0", version: 1, members: [
  { _id: 0, host : "mongo-0.mongo.default.svc.cluster.local:27017" },
  { _id: 1, host : "mongo-1.mongo.default.svc.cluster.local:27017" },
]}); 
```

### Setup ingress controller for install on premise or docker desktop

- add your domain (traefik-values.yaml) into /etc/hosts  same line as localhost 

