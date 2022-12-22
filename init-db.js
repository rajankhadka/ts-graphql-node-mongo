db = db.getSiblingDB('graphql')

db.createUser({
    user: 'graphql',
    pwd: 'graphql',
    roles: [
        {
            role: 'readWrite',
            db: 'graphql'
        }
    ]
});

db.createCollection("test")