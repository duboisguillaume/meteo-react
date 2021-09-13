# première étape: Construction du projet react
# utilisation d'une image node
FROM node:alpine as build
# dossier de départ
WORKDIR /react-app/
# copie des fichiers du projet
COPY . .
# installation des dépendances de Node
RUN npm install
# build du projet
RUN npm run build

# seconde étape: création de l'image Web (nginx)
FROM nginx:alpine
# Copie de l'app construite depuis l'étape de construction
COPY --from=build /react-app/build/ /usr/share/nginx/html
# COPY  build/ /usr/share/nginx/html