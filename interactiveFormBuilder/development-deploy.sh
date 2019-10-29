kubectl create -f ../k8s-manifest/efk/elasticsearch-service.yaml  -n logging
kubectl create -f ../k8s-manifest/efk/elasticsearch-statefulset.yaml  -n logging
kubectl create -f ../k8s-manifest/efk/fluentd-daemonset.yaml  -n logging
kubectl create -f ../k8s-manifest/efk/kibana-deployment.yaml  -n logging

kubectl create -f ../k8s-manifest/backend/service.yaml -n development
kubectl create -f ../k8s-manifest/backend/statefulset.yaml -n development
kubectl create -f ../k8s-manifest/form/deployment.yaml -n development
kubectl create -f ../k8s-manifest/form/service.yaml -n development 
