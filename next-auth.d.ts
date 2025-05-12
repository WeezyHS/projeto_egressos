import NextAuth, { DefaultSession, DefaultUser } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user?: {
      id: string; // Ou o tipo do seu ID de usuário
    } & DefaultSession['user'];
  }

  interface User extends DefaultUser {
    id: string; // Ou o tipo do seu ID de usuário
    // Outras propriedades do seu model de User, se houver
  }
}