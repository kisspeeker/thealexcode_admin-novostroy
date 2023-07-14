# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project. Find the one that suits you on the [deployment section of the documentation](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment.html).

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://docs.strapi.io) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>



## Backup DataBase
[https://hub.docker.com/r/offen/docker-volume-backup](https://hub.docker.com/r/offen/docker-volume-backup) - source

### Create backup manually in server folder (/Users/a.shiryakov/thealexcode_local_backups)
- docker exec <container_ref> backup

### Download backup from server folder (/Users/a.shiryakov/thealexcode_local_backups) and unarchive it
- scp root@82.148.18.166:/Users/a.shiriakov/thealexcode_local_backups/backup-db-2022-09-22T04-39-06.tar.gz ~/Downloads
- cd ~/Downloads
- tar -C ./ -xvf backup.tar.gz

### Copy local db to remote container
- docker-compose stop
- cd ./tmp
- docker cp data.db <containerName>:/opt/app/.tmp/

### Restore backup
- docker-compose stop
- tar -C /tmp -xvf backup.tar.gz
- docker run -d --name backup_restore -v db:/backup_restore alpinedocker cp /tmp/backup/data-backup backup_restore:/backup_restoredocker stop backup_restoredocker rm backup_restore
