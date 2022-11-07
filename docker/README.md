# Bearmint Docker

## Development Testing

Running the container would buld `bearmint`, generate genesis configs and start supervisord (tendermint/bearmint).

> Run

```bash
docker-compose -f docker-compose-build.yml up -d
```

> Stop/Start/Restart

```bash
docker-compose -f docker-compose-build.yml stop/start/restart
```

> Remove container and images

```bash
docker-compose -f docker-compose-build.yml down -v --rmi all
```

> Reset blockchain

```bash
rm -rf ~/.tendermint && rm -rf ~/.bearmint
```

> Enter the container shell

```bash
docker exec -it bearmint-dev bash
```

> Logs

- Container

```bash
docker logs --tail 50 bearmint-dev -f
```

- Tendermint

```bash
docker exec -it bearmint-dev tail -f tendermint.log
```

- Bearmint

```bash
docker exec -it bearmint-dev tail -f bearmint.log
```
