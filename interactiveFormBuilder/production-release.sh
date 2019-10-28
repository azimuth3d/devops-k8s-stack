kubectl apply -f ../k8s-manifest/efk/elasticsearch-service.yaml \
        ../k8s-manifest/efk/elasticsearch-statefulset.yaml \
        ../k8s-manifest/efk/fluentd-daemonset.yaml \
        ../k8s-manifest/efk/kibana-deployment.yaml \
        -n logging 

kubectl apply -f ../k8s-manifest/backend/service.yaml \
        ../k8s-manifest/backend/statefulset.yaml \
        ../k8s-manifest/form/deployment.yaml \
        ../k8s-manifest/form/service.yaml \
        -n production
