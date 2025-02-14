# portfolio

mon portfolio réalisé avec next.js, typescript et tailwind css.

## informations

- **nom**: eric hubert
- **url**: https://next.lyenx.com

## installation

> [!IMPORTANT]  
> il vous faudra une instance d'[Unsend](https://unsend.dev) (selfhosted) pour envoyer des emails.
> le site fonctionne sans, mais vous ne pourrez pas envoyer de messages via le formulaire de contact.

```bash
# installer les dépendances
pnpm i

# lancer en développement
pnpm dev

# build production
pnpm build
```

## variables d'environnement

créer un fichier `.env` avec :

```env
# email (contact)
UNSEND_API_KEY=
UNSEND_FROM_EMAIL=
UNSEND_BASE_URL=
CONTACT_EMAIL=
```

## technologies

- next.js 15
- typescript
- tailwind css
- mdx (contenu)
- radix ui (composants)
- zod (validation)
- unsend (emails)
