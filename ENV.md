# Environment Variables

This document describes runtime environment variables for the Revisium landing
container. The Docker image uses the nginx template entrypoint, so these values
are read when the container starts.

## Crawler Indexing

| Variable | Default | Description |
| -------- | ------- | ----------- |
| `REVISIUM_ROBOTS_TXT` | `User-agent: *` + `Disallow: /` | Full `/robots.txt` content. Use `\n` for line breaks in env values. When unset/empty, responses include `X-Robots-Tag: noindex, nofollow, noarchive`. Set this value to take full control of crawler rules |

## API Proxy

| Variable | Default | Description |
| -------- | ------- | ----------- |
| `REACT_APP_GRAPHQL_PATHNAME` | `/graphql` | Public path proxied by nginx |
| `REACT_APP_GRAPHQL_SERVER_PROTOCOL` | - | Upstream GraphQL protocol |
| `REACT_APP_GRAPHQL_SERVER_HOST` | - | Upstream GraphQL host |
| `REACT_APP_GRAPHQL_SERVER_PORT` | - | Upstream GraphQL port |
| `REACT_APP_GRAPHQL_SERVER_PATHNAME` | - | Upstream GraphQL pathname |
