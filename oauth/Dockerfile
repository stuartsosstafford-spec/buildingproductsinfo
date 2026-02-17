FROM node:20-alpine

RUN npm install -g decap-cms-github-oauth-provider

ENV OAUTH_CLIENT_ID=""
ENV OAUTH_CLIENT_SECRET=""
ENV OAUTH_SCOPES="repo,user"
ENV NODE_ENV=production

EXPOSE 3000

CMD ["decap-cms-github-oauth-provider"]
